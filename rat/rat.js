/*
 * RAT Probability Explorer page. Runs RatGen (ratgen.js), the browser copy of MegaMek's RAT Generator, on
 * data/inputs.json.gz written by megamek.utilities.ratdata.RatInputExporter.
 *
 * Two engines are kept: "base" never changes and gives the published odds; "work" carries the person's test edits.
 */
(() => {
  'use strict';

  const root = document.getElementById('ratx');
  const DATA_URL = root.dataset.data || 'data/';
  const MAX_ROWS = 60;
  // MekBay palette on a dark ground: BT yellow, friendly blue, semantic cyan, enemy red, success green, focus lavender
  const SERIES_COLORS = ['#eaae3f', 'rgb(100, 180, 255)', '#17a2b8', 'rgb(220, 80, 80)', '#7dcc80', 'rgb(192, 192, 255)'];
  const WEIGHT_CLASS = ['Ultra light', 'Light', 'Medium', 'Heavy', 'Assault', 'Super heavy', 'Small craft',
    'Small DropShip', 'Medium DropShip', 'Large DropShip', 'Small WarShip', 'Large WarShip', 'Small support',
    'Medium support', 'Large support'];
  const CODE_PATTERN = /^(\d+[+-]?(:\d+)?|(![^!:]+:\d+)+)$/;

  const $ = (id) => document.getElementById(id);
  const esc = (text) => String(text).replace(/[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = (value) => (Math.abs(value) >= 10 ? value.toFixed(1) : value.toFixed(2));
  const roleLabel = (role) => role.replace(/_/g, ' ');

  // ---------------------------------------------------------------- links to MekBay
  const MEKBAY_URL = 'https://mekbay.com/';

  /**
   * MekBay's unit id, as MekBay's own buildMegaMekUnitName builds it (scripts/lib/megamek-unit-file-metadata.ts):
   * a type prefix, the chassis without any Clan name, "_", the model, keeping only letters, digits and underscores.
   */
  function mekbayId(model) {
    const support = Boolean(model.support);
    let prefix = '';
    switch (model.unitTypeName) {
      case 'Mek': prefix = model.unitSubType === 'Industrial' ? 'IM' : 'BM'; break;
      case 'ProtoMek': prefix = 'PM'; break;
      case 'Mobile Structure': prefix = 'MS'; break;
      case 'Tank': case 'VTOL': case 'Naval': prefix = support ? 'SV' : 'CV'; break;
      case 'Advanced Building': prefix = 'CV'; break;
      case 'Gun Emplacement': prefix = 'SV'; break;
      case 'BattleArmor': prefix = 'BA'; break;
      case 'Infantry': prefix = 'CI'; break;
      case 'Space Station': prefix = 'SS'; break;
      case 'Warship': prefix = 'WS'; break;
      case 'Jumpship': prefix = 'JS'; break;
      case 'Dropship': prefix = model.movementMode === 'SPHEROID' ? 'DS' : 'DA'; break;
      case 'Small Craft': prefix = 'SC'; break;
      case 'Conventional Fighter': prefix = support ? 'SV' : 'CF'; break;
      case 'AeroSpaceFighter': case 'Aero': prefix = 'AF'; break;
      default: prefix = '';
    }
    return `${prefix}${model.baseChassis || model.chassis}_${model.model}`
      .replace(/[^a-zA-Z0-9_]/g, '')
      .replace(/_+/g, '_')
      .replace(/^_+|_+$/g, '');
  }

  /**
   * Whether MekBay's ?shareUnit= accepts a unit file UUID. Its force links (?units=) already do; a single-unit link
   * needs app.ts to try getUnitByUuid before getUnitByName. Until then links use MekBay's name id, which works today.
   */
  const MEKBAY_SHARE_ACCEPTS_UUID = false;

  /** A MekBay link that opens the unit; tab is General (stats) or Factions (availability). */
  function mekbayUrl(model, tab) {
    const unit = (MEKBAY_SHARE_ACCEPTS_UUID && model.uuid) ? model.uuid : mekbayId(model);
    return `${MEKBAY_URL}?${new URLSearchParams({ gs: 'cbt', shareUnit: unit, tab })}`;
  }

  let inputs = null;
  let base = null;
  let work = null;
  const factionByKey = new Map();
  const unitIndexByName = new Map();
  const edits = new Map(); // "level|era|index|faction" -> { level, era, index, faction, before, after }
  let renderToken = 0;

  const state = {
    view: 'table', year: 3151, faction: 'IS', unitType: 0, ratings: ['C'], query: '', showAll: false,
    weights: [], motives: null, network: 0, roles: [], strictness: 2, editing: null, extraRows: { model: [], chassis: [] },
  };

  // ---------------------------------------------------------------- loading
  async function loadInputs() {
    const response = await fetch(`${DATA_URL}inputs.json.gz`);
    if (!response.ok) throw new Error('Could not load inputs.json.gz');
    let bytes = new Uint8Array(await response.arrayBuffer());
    if (bytes[0] === 0x1f && bytes[1] === 0x8b) {
      const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream('gzip'));
      bytes = new Uint8Array(await new Response(stream).arrayBuffer());
    }
    return JSON.parse(new TextDecoder().decode(bytes));
  }

  // ---------------------------------------------------------------- helpers
  const eras = () => inputs.eras;
  const firstYear = () => eras()[0];
  const lastYear = () => eras()[eras().length - 1];
  const clampYear = (year) => Math.min(lastYear(), Math.max(firstYear(), Math.round(year)));
  const floorEra = (year) => { let era = eras()[0]; for (const e of eras()) if (e <= year) era = e; return era; };
  const nextEraAfter = (year) => { for (const e of eras()) if (e > year) return e; return null; };

  function factionName(faction, year) {
    let name = faction.name;
    let best = -Infinity;
    for (const [changeYear, changedName] of Object.entries(faction.namesByYear || {})) {
      const numericYear = Number(changeYear);
      if (numericYear <= year && numericYear > best) { best = numericYear; name = changedName; }
    }
    return name;
  }

  /** The ratings a faction's tables can use, as MekHQ picks them: one pinned level, or each level of its system. */
  function ratingsFor(faction) {
    return faction.ratingLevels.length === 1 ? [faction.ratingLevels[0]] : faction.ratingSystem.slice();
  }
  const ratingArgument = (faction, rating) => (faction.ratingLevels.length === 1 ? null : rating);
  const middleRating = (faction) => { const list = ratingsFor(faction); return list[Math.floor((list.length - 1) / 2)]; };

  function isActive(faction, year) {
    for (const [first, last] of faction.activeYears) if (year >= first && year <= last) return true;
    return false;
  }

  function parseFactionInput(value) {
    const trimmed = String(value || '').trim();
    const bracketed = trimmed.match(/\(([^()]+)\)\s*$/);
    const key = bracketed ? bracketed[1] : trimmed;
    if (factionByKey.has(key)) return key;
    for (const faction of inputs.factions) {
      if (faction.key.toUpperCase() === key.toUpperCase() || faction.name.toLowerCase() === trimmed.toLowerCase()) return faction.key;
    }
    return null;
  }

  function parseFactionList(text, limit) {
    const keys = [];
    for (const part of String(text).split(/[,;\s]+/)) {
      const key = parseFactionInput(part);
      if (key && !keys.includes(key)) keys.push(key);
    }
    return keys.slice(0, limit);
  }

  function options() {
    return RatGen.filterOptions(state.unitType);
  }

  function motivesInUse() {
    const motiveOptions = options().motives;
    if (motiveOptions.length === 0) return [];
    if (state.motives === null) return motiveOptions.filter((m) => m.ticked).map((m) => m.mode);
    return state.motives.slice();
  }

  function tableParams(factionKey, rating, year, unitType) {
    const faction = factionByKey.get(factionKey);
    return {
      faction: factionKey, user: factionKey, year, unitType: unitType === undefined ? state.unitType : unitType,
      rating: ratingArgument(faction, rating), weightClasses: state.weights.slice(), movementModes: motivesInUse(),
      networkMask: state.network, roles: state.roles.slice(), roleStrictness: state.strictness,
    };
  }

  /** Chance per roll: salvage first (whole-number percentage), otherwise weight over the faction's own unit total. */
  function chances(table) {
    const units = new Map();
    const salvage = new Map();
    if (!table || table.error) return { units, salvage, salvagePct: 0, error: table ? table.error : null };
    const ownShare = (100 - table.salvagePct) / 100;
    for (const [unit, weight] of table.units) units.set(unit, (100 * ownShare * weight) / table.unitTotal);
    if (table.salvageTotal > 0) {
      for (const [key, weight] of table.salvage) salvage.set(key, (table.salvagePct * weight) / table.salvageTotal);
    }
    return { units, salvage, salvagePct: table.salvagePct, error: null };
  }

  // ---------------------------------------------------------------- URL state
  function readHash() {
    const params = new URLSearchParams(location.hash.slice(1));
    if (params.has('view')) state.view = params.get('view');
    if (params.has('year')) state.year = Number(params.get('year')) || state.year;
    if (params.has('f')) state.faction = params.get('f');
    if (params.has('t')) { const index = inputs.unitTypes.indexOf(params.get('t')); if (index >= 0) state.unitType = index; }
    if (params.has('r')) state.ratings = params.get('r').split('~').filter(Boolean);
    if (params.has('q')) state.query = params.get('q');
    state.weights = params.has('w') ? params.get('w').split(',').filter(Boolean).map(Number) : [];
    state.motives = params.has('m') ? params.get('m').split(',').filter(Boolean) : null;
    state.network = params.has('n') ? Number(params.get('n')) || 0 : 0;
    state.roles = params.has('roles') ? params.get('roles').split(',').filter(Boolean) : [];
    state.strictness = params.has('s') ? Number(params.get('s')) || 2 : 2;
    if (params.has('unit')) $('h-unit').value = params.get('unit');
    if (params.has('hf')) $('h-factions').value = params.get('hf');
    if (params.has('cf')) $('c-factions').value = params.get('cf');
    // edit=<unit name> opens that unit's code editor, so other pages can link straight to it
    if (params.has('edit')) {
      const index = unitIndexByName.get(params.get('edit'));
      if (index !== undefined) {
        state.editing = index;
        // Show the unit's own table: a Clan Cluster link names battle armor as well as 'Meks
        const unitType = work.models[index].unitType;
        state.unitType = unitType === 18 ? 9 : unitType;
      }
    }
  }

  function writeHash() {
    const params = new URLSearchParams();
    params.set('view', state.view);
    params.set('year', state.year);
    params.set('f', state.faction);
    params.set('t', inputs.unitTypes[state.unitType]);
    params.set('r', state.ratings.join('~'));
    if (state.query) params.set('q', state.query);
    if (state.weights.length) params.set('w', state.weights.join(','));
    if (state.motives !== null) params.set('m', state.motives.join(','));
    if (state.network) params.set('n', state.network);
    if (state.roles.length) params.set('roles', state.roles.join(','));
    if (state.strictness !== 2) params.set('s', state.strictness);
    if (state.view === 'history') { params.set('unit', $('h-unit').value); params.set('hf', $('h-factions').value); }
    if (state.view === 'compare') params.set('cf', $('c-factions').value);
    if (state.editing !== null && work.models[state.editing]) params.set('edit', work.models[state.editing].key);
    history.replaceState(null, '', `#${params}`);
  }

  // ---------------------------------------------------------------- filters
  function refreshFactionList() {
    const list = [];
    for (const faction of inputs.factions) {
      if (isActive(faction, state.year)) list.push(`<option value="${esc(`${factionName(faction, state.year)} (${faction.key})`)}"></option>`);
    }
    $('f-faction-list').innerHTML = list.join('');
    const current = factionByKey.get(state.faction);
    if (current && !picker.open) $('f-faction').value = factionLabel(current);
  }

  // ---- Faction picker: a searchable dropdown. Click shows every faction active in the year; typing filters by
  // name or code; arrows move, Enter picks, Escape puts the current faction back.
  const picker = { open: false, matches: [], active: -1 };

  function factionLabel(faction) {
    return `${factionName(faction, state.year)} (${faction.key})`;
  }

  function factionMatches(text) {
    const query = text.trim().toLowerCase();
    const exactCode = [];
    const rest = [];
    for (const faction of inputs.factions) {
      if (!isActive(faction, state.year)) continue;
      const label = factionLabel(faction).toLowerCase();
      if (query && faction.key.toLowerCase() === query) exactCode.push(faction);
      else if (!query || label.includes(query)) rest.push(faction);
    }
    rest.sort((a, b) => factionName(a, state.year).localeCompare(factionName(b, state.year)));
    return exactCode.concat(rest);
  }

  function drawFactionOptions() {
    const list = $('f-faction-options');
    if (!picker.matches.length) {
      list.innerHTML = '<li class="ratx-combo-empty" role="presentation">No faction active in this year matches.</li>';
      return;
    }
    list.innerHTML = picker.matches.map((faction, position) => `<li role="option" id="f-faction-option-${position}"`
      + ` data-key="${esc(faction.key)}" aria-selected="${position === picker.active}"`
      + ` class="${faction.key === state.faction ? 'is-current' : ''}${position === picker.active ? ' is-active' : ''}">`
      + `<span>${esc(factionName(faction, state.year))}</span><span class="ratx-combo-key">${esc(faction.key)}</span></li>`).join('');
    const input = $('f-faction');
    if (picker.active >= 0) {
      input.setAttribute('aria-activedescendant', `f-faction-option-${picker.active}`);
      const item = list.children[picker.active];
      if (item) item.scrollIntoView({ block: 'nearest' });
    } else {
      input.removeAttribute('aria-activedescendant');
    }
  }

  function openFactionPicker(filterText) {
    picker.open = true;
    picker.matches = factionMatches(filterText);
    const currentPosition = picker.matches.findIndex((faction) => faction.key === state.faction);
    picker.active = filterText ? (picker.matches.length ? 0 : -1) : currentPosition;
    $('f-faction-options').hidden = false;
    $('f-faction').setAttribute('aria-expanded', 'true');
    drawFactionOptions();
  }

  function closeFactionPicker(restoreText) {
    picker.open = false;
    $('f-faction-options').hidden = true;
    $('f-faction').setAttribute('aria-expanded', 'false');
    $('f-faction').removeAttribute('aria-activedescendant');
    const current = factionByKey.get(state.faction);
    if (restoreText && current) $('f-faction').value = factionLabel(current);
  }

  function pickFaction(key) {
    closeFactionPicker(false);
    if (key && key !== state.faction) {
      state.faction = key;
      render();
    }
    const current = factionByKey.get(state.faction);
    if (current) $('f-faction').value = factionLabel(current);
  }

  function wireFactionPicker() {
    const input = $('f-faction');
    const list = $('f-faction-options');
    input.addEventListener('focus', () => { input.select(); openFactionPicker(''); });
    input.addEventListener('click', () => { if (!picker.open) openFactionPicker(''); });
    input.addEventListener('input', () => openFactionPicker(input.value));
    input.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        if (!picker.open) { openFactionPicker(''); return; }
        const step = event.key === 'ArrowDown' ? 1 : -1;
        const count = picker.matches.length;
        if (count) picker.active = (picker.active + step + count) % count;
        drawFactionOptions();
      } else if (event.key === 'Enter') {
        event.preventDefault();
        const chosen = picker.matches[picker.active];
        pickFaction(chosen ? chosen.key : parseFactionInput(input.value));
      } else if (event.key === 'Escape') {
        closeFactionPicker(true);
        input.select();
      }
    });
    // mousedown, not click: it runs before the input loses focus and closes the list
    list.addEventListener('mousedown', (event) => {
      const item = event.target.closest('[data-key]');
      if (!item) return;
      event.preventDefault();
      pickFaction(item.dataset.key);
    });
    input.addEventListener('blur', () => {
      if (!picker.open) return;
      const typed = parseFactionInput(input.value);
      if (typed && typed !== state.faction) pickFaction(typed);
      else closeFactionPicker(true);
    });
  }

  /** The ratings picked before All was clicked, so a second click on All can put them back. */
  let ratingsBeforeAll = [];

  function refreshRatings() {
    const faction = factionByKey.get(state.faction);
    if (!faction) { $('f-ratings').innerHTML = ''; return; }
    const available = ratingsFor(faction);
    state.ratings = state.ratings.filter((rating) => available.includes(rating));
    if (state.ratings.length === 0) state.ratings = [middleRating(faction)];
    const multi = state.view === 'table';
    if (!multi && state.ratings.length > 1) state.ratings = [state.ratings[0]];
    $('f-ratings').innerHTML = available.map((rating) =>
      `<button type="button" class="ratx-pill" data-rating="${esc(rating)}" aria-pressed="${state.ratings.includes(rating)}">${esc(rating)}</button>`).join('')
      + (multi && available.length > 1 ? `<button type="button" class="ratx-pill" data-rating="*all*" aria-pressed="${state.ratings.length === available.length}">All</button>` : '');
  }

  function refreshUnitTypes() {
    const faction = factionByKey.get(state.faction);
    const types = [];
    for (let type = 0; type < inputs.unitTypes.length; type++) {
      if (state.view === 'compare') { types.push(type); continue; }
      if (!faction) continue;
      const params = { faction: state.faction, user: state.faction, year: state.year, unitType: type,
        rating: ratingArgument(faction, middleRating(faction)), roleStrictness: 2 };
      if (work.findTable(params).units.length > 0) types.push(type);
    }
    if (types.length > 0 && !types.includes(state.unitType)) {
      state.unitType = types.includes(0) ? 0 : types[0];
      resetRatGenOptions();
    }
    $('f-type').innerHTML = types.map((type) => `<option value="${type}" ${type === state.unitType ? 'selected' : ''}>${esc(inputs.unitTypes[type])}</option>`).join('');
  }

  function resetRatGenOptions() {
    state.weights = [];
    state.motives = null;
    state.network = 0;
    state.roles = [];
  }

  function refreshRatGenOptions() {
    const opts = options();
    $('f-weights-box').hidden = opts.weightClasses.length === 0;
    $('f-weights').innerHTML = opts.weightClasses.map((w) =>
      `<label class="ratx-check"><input type="checkbox" data-weight="${w.value}" ${state.weights.includes(w.value) ? 'checked' : ''}> ${esc(w.label)}</label>`).join('');
    const motives = motivesInUse();
    $('f-motives-box').hidden = opts.motives.length === 0;
    $('f-motives').innerHTML = opts.motives.map((m) =>
      `<label class="ratx-check"><input type="checkbox" data-motive="${m.mode}" ${motives.includes(m.mode) ? 'checked' : ''}> ${esc(m.label)}</label>`).join('');
    $('f-network-box').hidden = opts.networks.length === 0;
    $('f-network').innerHTML = opts.networks.map((n) =>
      `<label class="ratx-check"><input type="radio" name="f-network" data-network="${n.mask}" ${state.network === n.mask ? 'checked' : ''}> ${esc(n.label)}</label>`).join('');
    const roles = inputs.roles.filter((role) => RatGen.roleFitsUnitType(role, state.unitType))
      .sort((a, b) => roleLabel(a).localeCompare(roleLabel(b)));
    state.roles = state.roles.filter((role) => roles.includes(role));
    $('f-roles').innerHTML = roles.map((role) =>
      `<label class="ratx-check"><input type="checkbox" data-role="${role}" ${state.roles.includes(role) ? 'checked' : ''}> ${esc(roleLabel(role))}</label>`).join('');
    $('f-strictness').value = String(state.strictness);

    const summary = [];
    if (state.weights.length) summary.push(state.weights.map((w) => WEIGHT_CLASS[w]).join(', '));
    const defaults = opts.motives.filter((m) => m.ticked).map((m) => m.mode).join(',');
    if (opts.motives.length && motives.join(',') !== defaults) summary.push(`motive: ${motives.length} of ${opts.motives.length}`);
    if (state.network) summary.push((opts.networks.find((n) => n.mask === state.network) || {}).label);
    if (state.roles.length) summary.push(`${state.roles.map(roleLabel).join(' + ')} (${['', 'low', 'medium', 'high'][state.strictness]})`);
    $('f-ratgen-summary').textContent = summary.length ? `· ${summary.join(' · ')}` : '· none set';
  }

  // ---- Where the selected faction's codes come from, in the order the RAT Generator looks
  /**
   * The codes a faction's own units are filed under, in the order the engine reads them (ratgen.js lineageCodes): the
   * name it went by in the year first, then its key, then its other names.
   */
  function ownCodes(faction, year) {
    const years = Object.keys(faction.aliasesByYear || {}).map(Number).sort((a, b) => a - b);
    if (years.length === 0) return [faction.key];
    let active = null;
    for (const aliasYear of years) if (aliasYear <= year) active = faction.aliasesByYear[aliasYear];
    const codes = [active !== null ? active : faction.key];
    if (!codes.includes(faction.key)) codes.push(faction.key);
    for (const aliasYear of years) {
      const code = faction.aliasesByYear[aliasYear];
      if (!codes.includes(code)) codes.push(code);
    }
    return codes;
  }

  function lineageLink(key) {
    const faction = factionByKey.get(key);
    if (!faction) return `<span class="ratx-lineage-step"><span class="ratx-combo-key">${esc(key)}</span></span>`;
    return `<a class="ratx-lineage-step" href="#" data-lineage-goto="${esc(key)}" title="Show ${esc(factionName(faction, state.year))}">`
      + `${esc(factionName(faction, state.year))} <span class="ratx-combo-key">${esc(key)}</span></a>`;
  }

  function refreshLineage() {
    const start = factionByKey.get(state.faction);
    if (!start) { $('f-lineage').innerHTML = ''; return; }
    const steps = [];
    const seen = new Set();
    let faction = start;
    let ending = null;
    while (faction && !seen.has(faction.key)) {
      seen.add(faction.key);
      const codes = ownCodes(faction, state.year);
      steps.push(lineageLink(faction.key)
        + (codes.length > 1 ? ` <span class="ratx-hint">(codes filed under ${codes.map(esc).join(', then ')})</span>` : ''));
      const parents = faction.parents || [];
      if (parents.length === 1) {
        faction = factionByKey.get(parents[0]);
        // "General" (or a code with no faction record) reads the General codes, as findChassisByKey does
        if (!faction) ending = '<span class="ratx-lineage-step">General</span>';
      } else if (parents.length > 1) {
        ending = `<span class="ratx-lineage-step">the average of ${parents.map(lineageLink).join(' and ')}</span>`
          + ' <span class="ratx-hint">(each with its own fallback)</span>';
        faction = null;
      } else {
        ending = '<span class="ratx-lineage-step">General</span>';
        faction = null;
      }
    }
    if (ending) steps.push(ending);
    const tip = 'For each chassis and model, the RAT Generator uses the first code it finds, left to right. '
      + "It reads the faction's own code first, then its parent faction's, and so on. A faction with several "
      + 'parents takes the average of their codes. General is the code for any faction with none of its own. '
      + 'A faction that changed its name reads the codes under its name for that year first, then its other names. '
      + 'Click a faction to show its table.';
    $('f-lineage').innerHTML = `${tipLabel('Codes come from', tip)} ${steps.join(' <span class="ratx-lineage-arrow" aria-hidden="true">&rarr;</span> ')}`;
  }

  function showFieldsForView() {
    for (const element of document.querySelectorAll('[data-views]')) element.hidden = !element.dataset.views.split(' ').includes(state.view);
    for (const tab of document.querySelectorAll('.ratx-tab')) tab.setAttribute('aria-pressed', String(tab.dataset.view === state.view));
    for (const view of ['table', 'history', 'compare']) $(`view-${view}`).hidden = view !== state.view;
  }

  function setNote(text) {
    $('ratx-note').hidden = !text;
    $('ratx-note').textContent = text || '';
  }

  // ---------------------------------------------------------------- edits
  const editKey = (level, era, index, faction) => `${level}|${era}|${index}|${faction}`;

  function originalCode(level, era, index, faction) {
    const found = base.getCodes(level, era, index).find((entry) => entry.faction === faction);
    return found ? found.code : '';
  }

  function applyEdit(level, era, index, faction, value) {
    const code = value.trim();
    if (code && !CODE_PATTERN.test(code)) throw new Error(`"${code}" is not an availability code. Use a number such as 6, 7+, 5-, 4:3055 or !A:6!B:4.`);
    work.setCode(level, era, index, faction, code || null);
    const key = editKey(level, era, index, faction);
    const before = originalCode(level, era, index, faction);
    if (before === code) edits.delete(key);
    else edits.set(key, { level, era, index, faction, before, after: code });
  }

  function editLabel(edit) {
    const name = edit.level === 'model' ? work.models[edit.index].key : work.chassis[edit.index].name;
    return `${edit.era}.xml · ${edit.level} ${name} · ${edit.faction}: ${edit.before || '(none)'} → ${edit.after || '(removed)'}`;
  }

  function refreshEditsBanner() {
    $('ratx-edits').hidden = edits.size === 0;
    $('ratx-edits-count').textContent = `${edits.size} test edit${edits.size === 1 ? '' : 's'} active`;
    $('ratx-edits-list').innerHTML = [...edits.values()].map((edit) =>
      `<li><span>${esc(editLabel(edit))}</span> <button type="button" class="ratx-button-quiet" data-undo="${esc(editKey(edit.level, edit.era, edit.index, edit.faction))}">Undo</button></li>`).join('');
  }

  // ---------------------------------------------------------------- view: roll table
  function renderTable() {
    const faction = factionByKey.get(state.faction);
    $('ratx-title').textContent = faction ? `${factionName(faction, state.year)} · ${state.year} · ${inputs.unitTypes[state.unitType]}` : 'Pick a faction';
    if (!faction) { $('t-body').innerHTML = ''; return; }
    const showBefore = edits.size > 0;
    const after = state.ratings.map((rating) => chances(work.findTable(tableParams(state.faction, rating, state.year))));
    const before = showBefore ? state.ratings.map((rating) => chances(base.findTable(tableParams(state.faction, rating, state.year)))) : null;

    const notes = [];
    if (!isActive(faction, state.year)) notes.push(`${faction.key} is not active in ${state.year}, so MegaMek gives it no table.`);
    const errors = after.filter((result) => result.error).map((result) => result.error);
    if (errors.length) notes.push(`${errors[0]}. MegaMek's RAT Generator stops with an error for this request.`);
    setNote(notes.join(' '));

    const multi = after.length > 1;
    const rows = new Map();
    const addValues = (results, field) => {
      results.forEach((result, column) => {
        for (const [unit, chance] of result.units) {
          const key = `u${unit}`;
          if (!rows.has(key)) rows.set(key, { kind: 'unit', id: unit, values: new Array(after.length).fill(0), before: new Array(after.length).fill(0) });
          rows.get(key)[field][column] = chance;
        }
        for (const [salvageKey, chance] of result.salvage) {
          const key = `s${salvageKey}`;
          if (!rows.has(key)) rows.set(key, { kind: 'salvage', id: salvageKey, values: new Array(after.length).fill(0), before: new Array(after.length).fill(0) });
          rows.get(key)[field][column] = chance;
        }
      });
    };
    addValues(after, 'values');
    if (showBefore) addValues(before, 'before');
    const all = [...rows.values()];
    const mean = (list) => list.reduce((sum, value) => sum + value, 0) / list.length;
    for (const row of all) { row.blend = mean(row.values); row.blendBefore = mean(row.before); row.change = row.blend - row.blendBefore; }
    all.sort((a, b) => (b.blend - a.blend) || (b.blendBefore - a.blendBefore));

    const unitRows = all.filter((row) => row.kind === 'unit' && row.blend > 0);
    const top = unitRows[0];
    const unitSum = unitRows.reduce((sum, row) => sum + row.blend, 0);
    const variety = unitSum > 0 ? (unitSum * unitSum) / unitRows.reduce((sum, row) => sum + row.blend * row.blend, 0) : 0;
    const salvageShare = mean(after.map((result) => result.salvagePct));
    const ratingLabel = multi ? `ratings ${state.ratings.join(', ')} blended` : `rating ${state.ratings[0]}`;
    const topExample = top ? `${work.models[top.id].key} comes up on ${pct(top.blend)}% of rolls, about 1 roll in ${Math.round(100 / top.blend)}.` : '';
    $('t-tiles').innerHTML = [
      ['Units on the table', unitRows.length, ratingLabel,
        `How many different units can come up on this table, not counting salvage.${multi ? ' With several ratings picked, a unit counts if it can come up at any of them.' : ''}`],
      ['Most likely single roll', top ? `${pct(top.blend)}%` : '-', top ? `${work.models[top.id].key} · about 1 in ${Math.round(100 / top.blend)}` : 'no units',
        `The unit with the best chance on a single roll. ${topExample}`],
      ['Effective variety', `≈ ${Math.round(variety)}`, 'equally likely units it behaves like',
        `How spread out the table is. If every unit were equally likely, about ${Math.round(variety)} units would give the same spread. A table where a few units come up most of the time scores low, even if it lists many units.`],
      ['Salvage', `${pct(salvageShare)}%`, 'of rolls go to another faction\'s table',
        'The share of rolls that go to another faction\'s table instead of this one. The RAT Generator rolls for salvage first; on a hit it rolls a salvage faction\'s table from five years earlier. The salvage rows in the table show which factions.'],
    ].map(([label, value, caption, tip]) => `<div class="ratx-tile">${tipLabel(label, tip)}<strong>${esc(value)}</strong><span>${esc(caption)}</span></div>`).join('');

    const query = state.query.trim().toLowerCase();
    let shown = all.filter((row) => row.blend > 0 || row.blendBefore > 0);
    if (query) {
      shown = shown.filter((row) => (row.kind === 'unit' ? work.models[row.id].key
        : `salvage ${factionByKey.get(row.id).name} ${row.id}`).toLowerCase().includes(query));
    }
    if (showBefore) {
      // Changed rows first, so the effect of an edit is in view
      shown.sort((a, b) => (Math.abs(b.change) > 0.005) - (Math.abs(a.change) > 0.005) || (b.blend - a.blend));
    }
    const total = shown.length;
    if (!state.showAll) shown = shown.slice(0, MAX_ROWS);
    const maxValue = all.reduce((max, row) => Math.max(max, ...row.values, row.blend, row.blendBefore), 0) || 1;

    const headCells = ['#', 'Unit', 'Weight', 'Roles', 'Intro'];
    state.ratings.forEach((rating) => headCells.push(multi ? rating : `Chance per roll · ${rating}`));
    if (multi) headCells.push('Blended');
    if (showBefore) headCells.push('Before', 'Change');
    headCells.push('1 in', '');
    $('t-head').innerHTML = `<tr>${headCells.map((cell) => `<th scope="col">${tipLabel(cell, columnTip(cell, multi))}</th>`).join('')}</tr>`;
    const filterBits = [];
    if (state.roles.length) filterBits.push(state.roles.map(roleLabel).join(' + '));
    if (state.weights.length) filterBits.push(state.weights.map((w) => WEIGHT_CLASS[w]).join(', '));
    $('t-heading').textContent = `Roll chances · ${ratingLabel}${filterBits.length ? ` · ${filterBits.join(' · ')}` : ''}`;

    const bar = (value, isBlend) => `<div class="ratx-bar"><div class="ratx-bar-track"><div class="ratx-bar-fill${isBlend ? ' is-blend' : ''}" style="width:${(100 * value / maxValue).toFixed(1)}%"></div></div><span class="ratx-num">${value > 0 ? `${pct(value)}%` : '—'}</span></div>`;
    $('t-body').innerHTML = shown.map((row, rank) => {
      let cells = row.values.map((value) => `<td>${bar(value, false)}</td>`).join('') + (multi ? `<td>${bar(row.blend, true)}</td>` : '');
      if (showBefore) {
        const change = row.change;
        const changeClass = change > 0.005 ? 'is-up' : (change < -0.005 ? 'is-down' : '');
        const changeText = Math.abs(change) > 0.005 ? `${change > 0 ? '+' : '−'}${pct(Math.abs(change))}` : '—';
        cells += `<td class="ratx-num ratx-muted">${row.blendBefore > 0 ? `${pct(row.blendBefore)}%` : '—'}</td><td class="ratx-num ratx-change ${changeClass}">${changeText}</td>`;
      }
      const oneIn = row.blend > 0 ? Math.round(100 / row.blend) : '—';
      if (row.kind === 'salvage') {
        const salvageFaction = factionByKey.get(row.id);
        return `<tr class="ratx-salvage-row"><td class="ratx-num ratx-muted">${rank + 1}</td>
          <td><span class="ratx-unit-name">Salvage</span> <span class="ratx-muted">re-roll on</span>
          <a class="ratx-link" href="#" data-goto="${esc(row.id)}">${esc(factionName(salvageFaction, state.year - 5))}</a>
          <span class="ratx-muted">(${state.year - 5})</span></td><td></td><td></td><td></td>${cells}<td class="ratx-num ratx-muted">${oneIn}</td><td></td></tr>`;
      }
      const model = work.models[row.id];
      const nameHtml = `<a class="ratx-link" href="${esc(mekbayUrl(model, 'General'))}" target="_blank" rel="noopener" title="Open ${esc(model.key)} in MekBay">${esc(model.chassis)}</a>`;
      const editingClass = state.editing === row.id ? ' is-editing' : '';
      return `<tr class="${editingClass}"><td class="ratx-num ratx-muted">${rank + 1}</td>
        <td><span class="ratx-unit-name">${nameHtml}</span> <span class="ratx-muted">${esc(model.model)}</span></td>
        <td class="ratx-muted">${esc(WEIGHT_CLASS[model.weightClass] || '')}</td>
        <td class="ratx-muted">${esc(model.roles.map(roleLabel).join(', '))}</td>
        <td class="ratx-num ratx-muted">${model.introYear}</td>
        ${cells}<td class="ratx-num ratx-muted">${oneIn}</td>
        <td><button type="button" class="ratx-button-quiet" data-edit="${row.id}" aria-label="Test weights for ${esc(model.key)}">Test</button></td></tr>`;
    }).join('') || `<tr><td colspan="${headCells.length}" class="ratx-muted">No units on this table.</td></tr>`;
    $('t-foot').textContent = `Showing ${shown.length} of ${total} rows${query ? ` matching "${state.query}"` : ''}. `
      + 'Unit names open the unit in MekBay. Press Test to change its availability codes. Salvage factions open their own table.';
    renderEditor();
  }

  // ---------------------------------------------------------------- test weights editor
  const TEST_NOTICE_KEY = 'ratx-test-notice-seen';
  let testNoticeShownThisPage = false;

  /** Explains, once per browser, that test edits are for planning and cannot be exported. */
  function showTestNoticeOnce() {
    if (testNoticeShownThisPage) return;
    testNoticeShownThisPage = true;
    try {
      if (localStorage.getItem(TEST_NOTICE_KEY)) return;
      localStorage.setItem(TEST_NOTICE_KEY, '1');
    } catch (error) {
      // Storage is blocked (private mode): show it once per page load instead
    }
    const notice = $('test-notice');
    if (typeof notice.showModal === 'function') notice.showModal();
  }

  /** After the notice closes, put the keyboard back in the editor the user just opened. */
  function focusEditorAfterNotice() {
    const firstCell = document.querySelector('#t-editor input');
    if (firstCell) firstCell.focus({ preventScroll: true });
  }

  function renderEditor() {
    const modelIndex = state.editing;
    $('t-editor').hidden = modelIndex === null;
    if (modelIndex === null) return;
    const model = work.models[modelIndex];
    const chassisRecord = work.chassisByKey.get(model.chassisKey);
    $('e-title').textContent = model.key;
    const links = [
      `<a class="ratx-button-quiet" href="${esc(mekbayUrl(model, 'General'))}" target="_blank" rel="noopener">Stats in MekBay</a>`,
      `<a class="ratx-button-quiet" href="${esc(mekbayUrl(model, 'Factions'))}" target="_blank" rel="noopener">Availability in MekBay</a>`,
    ];
    $('e-links').innerHTML = links.join('');
    $('e-model-key').textContent = `· ${model.key}`;
    $('e-chassis-key').textContent = `· ${chassisRecord.name} (shared by ${chassisRecord.models.length} model${chassisRecord.models.length === 1 ? '' : 's'})`;

    const era = floorEra(state.year);
    const next = eras().includes(state.year) ? null : nextEraAfter(state.year);
    const describe = (level, index, year) => {
      const found = work.explain(level, year, index, state.faction, year);
      return found ? `${found.faction}=${found.code}` : 'no code (not fielded)';
    };
    let source = `For ${state.faction} in ${state.year}: chassis ${describe('chassis', chassisRecord.index, era)}, model ${describe('model', modelIndex, era)} from the ${era} era file`;
    if (next) source += `, blending toward ${next} (chassis ${describe('chassis', chassisRecord.index, next)}, model ${describe('model', modelIndex, next)})`;
    $('e-source').textContent = `${source}. Codes for a faction's parents count when it has none of its own.`;

    drawGrid('model', modelIndex, $('e-model-grid'), era, next);
    drawGrid('chassis', chassisRecord.index, $('e-chassis-grid'), era, next);
  }

  // ---- Explanations for the tile and column headings: a "?" after the heading, shown on hover or keyboard focus
  /** A heading with an explanation; plain text when there is none. */
  function tipLabel(label, tip) {
    if (!tip) return `<span>${esc(label)}</span>`;
    return `<span class="ratx-tip-target" tabindex="0" data-tip="${esc(tip)}">${esc(label)}`
      + '<span class="ratx-tip-mark" aria-hidden="true">?</span></span>';
  }

  /** What a roll-table column shows, by its heading. */
  function columnTip(heading, multi) {
    switch (heading) {
      case '#': return 'Rank by chance per roll, highest first.';
      case 'Unit': return 'Chassis and model. The name opens the unit in MekBay.';
      case 'Weight': return 'The unit\'s weight class.';
      case 'Roles': return 'Mission roles the unit carries in the RAT Generator data. The mission role filters in RAT Generator options use them.';
      case 'Intro': return 'The year the unit enters service. In that year its code counts 1 lower, so it comes up less often.';
      case 'Blended': return 'The average of the picked ratings\' chances, as if each rating were equally likely.';
      case 'Before': return 'The chance with the published codes, before your test edits.';
      case 'Change': return 'After your edits minus before, in percentage points.';
      case '1 in': return 'On average, how many rolls it takes to get this unit once (100 divided by its chance).';
      case '': return null;
      default:
        if (heading.startsWith('Chance per roll')) {
          return 'The chance that one roll on this faction\'s table gives this unit. The units plus the salvage rows add up to 100%.';
        }
        return multi ? `The chance per roll at equipment rating ${heading}.` : null;
    }
  }

  const helpTip = document.createElement('div');
  helpTip.className = 'ratx-code-tip ratx-help-tip';
  helpTip.id = 'ratx-help-tip';
  helpTip.setAttribute('role', 'tooltip');
  helpTip.hidden = true;
  document.body.appendChild(helpTip);

  function showHelpTip(target) {
    helpTip.textContent = target.dataset.tip;
    helpTip.hidden = false;
    target.setAttribute('aria-describedby', 'ratx-help-tip');
    const box = target.getBoundingClientRect();
    const tipBox = helpTip.getBoundingClientRect();
    const below = box.bottom + 6;
    const top = (below + tipBox.height > window.innerHeight) ? Math.max(6, box.top - tipBox.height - 6) : below;
    const left = Math.min(Math.max(6, box.left), window.innerWidth - tipBox.width - 6);
    helpTip.style.top = `${top}px`;
    helpTip.style.left = `${left}px`;
  }

  function hideHelpTip(target) {
    helpTip.hidden = true;
    if (target && target.removeAttribute) target.removeAttribute('aria-describedby');
  }

  document.addEventListener('mouseover', (event) => {
    const target = event.target.closest('.ratx-tip-target');
    if (target) showHelpTip(target);
  });
  document.addEventListener('mouseout', (event) => {
    const target = event.target.closest('.ratx-tip-target');
    if (target && !target.contains(event.relatedTarget) && document.activeElement !== target) hideHelpTip(target);
  });
  document.addEventListener('focusin', (event) => { if (event.target.matches('.ratx-tip-target')) showHelpTip(event.target); });
  document.addEventListener('focusout', (event) => { if (event.target.matches('.ratx-tip-target')) hideHelpTip(event.target); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') hideHelpTip(document.activeElement); });
  window.addEventListener('scroll', () => hideHelpTip(null), { passive: true });

  // ---- Code tooltip for the editor grids: the whole code, and what it gives at each equipment rating
  const codeTip = document.createElement('div');
  codeTip.className = 'ratx-code-tip';
  codeTip.setAttribute('role', 'tooltip');
  codeTip.hidden = true;
  document.body.appendChild(codeTip);

  /**
   * Reads a grid code the way the RAT Generator does. Ratings are listed best first.
   * Returns { error } for text the RAT Generator would not read, or { summary, ratings, startYear }.
   */
  function readCode(text, ratingNames) {
    let body = text.trim();
    let startYear = null;
    if (!body.startsWith('!')) {
      const yearMatch = body.match(/^(\d+[+-]?):(\d+)$/);
      if (yearMatch) { body = yearMatch[1]; startYear = Number(yearMatch[2]); }
    }
    const bestFirst = ratingNames.slice().reverse();
    if (body.startsWith('!')) {
      const given = new Map();
      for (const part of body.split('!').slice(1)) {
        const fields = part.split(':');
        if (fields.length !== 2 || !/^-?\d+$/.test(fields[1])) return { error: `"${part}" is not a rating:code pair.` };
        given.set(fields[0], Number(fields[1]));
      }
      const ratings = bestFirst.map((name) => [name, given.has(name) ? given.get(name) : 0]);
      for (const [name, value] of given) if (!ratingNames.includes(name)) ratings.push([`${name} (not a rating of this faction)`, value]);
      return { summary: 'A separate code for each equipment rating. Ratings not listed get 0.', ratings, startYear };
    }
    const match = body.match(/^(\d+)([+-]?)$/);
    if (!match) return { error: 'Not a code the RAT Generator reads. Examples: 6, 7+, 5-, 4:3055, !A:6!B:4' };
    const base = Number(match[1]);
    const count = ratingNames.length;
    // ratingNames runs worst to best, as the faction's rating system does
    const valueAt = (position) => (match[2] === '+' ? base - (count - 1 - position) : (match[2] === '-' ? base - position : base));
    const ratings = ratingNames.map((name, position) => [name, valueAt(position)]).reverse();
    const summary = match[2] === '+' ? `${base} at the best rating, 1 lower for each rating below it.`
      : (match[2] === '-' ? `${base} at the worst rating, 1 lower for each rating above it.` : `${base} at every rating.`);
    return { summary, ratings, startYear };
  }

  function showCodeTip(input) {
    if (editorContext) return;
    const { level, era, index, faction } = input.dataset;
    const record = factionByKey.get(faction) || factionByKey.get(state.faction);
    const ratingNames = record ? record.ratingSystem : [];
    const text = input.value.trim();
    const lines = [`<div class="ratx-code-tip-head">${esc(faction)} · ${esc(era)} · ${level === 'chassis' ? 'chassis' : 'model'} code</div>`];
    const edit = edits.get(editKey(level, Number(era), Number(index), faction));
    if (!text) {
      lines.push('<div class="ratx-code-tip-code">(no code)</div>');
      const inherited = faction === 'General' ? null : work.explain(level, Number(era), Number(index), faction, Number(era));
      lines.push(inherited
        ? `<p>No code of its own: it uses ${esc(inherited.faction)}'s code <code>${esc(inherited.code)}</code>.</p>`
        : '<p>No code: this faction does not field it in this era, apart from salvage.</p>');
    } else {
      lines.push(`<div class="ratx-code-tip-code">${esc(text)}</div>`);
      const reading = readCode(text, ratingNames);
      if (reading.error) {
        lines.push(`<p class="ratx-code-tip-error">${esc(reading.error)}</p>`);
      } else {
        lines.push(`<p>${esc(reading.summary)}</p>`);
        if (reading.ratings.length > 1 || text.startsWith('!')) {
          lines.push(`<table>${reading.ratings.map(([name, value]) =>
            `<tr><th>${esc(name)}</th><td>${value > 0 ? value : '<span class="ratx-muted">not fielded</span>'}</td></tr>`).join('')}</table>`);
        } else if (reading.ratings.length === 1 && reading.ratings[0][1] <= 0) {
          lines.push('<p>0 or less: not fielded.</p>');
        }
        if (reading.startYear !== null) lines.push(`<p>Only from ${reading.startYear}; earlier years in this era do not use it.</p>`);
      }
    }
    if (edit) lines.push(`<p class="ratx-muted">Published: <code>${esc(edit.before || '(no code)')}</code></p>`);
    lines.push('<p class="ratx-muted">0 removes it from this faction\'s own table. An empty cell uses the parent faction\'s code.</p>');
    codeTip.innerHTML = lines.join('');
    codeTip.hidden = false;
    const box = input.getBoundingClientRect();
    const tipBox = codeTip.getBoundingClientRect();
    const below = box.bottom + 6;
    const top = (below + tipBox.height > window.innerHeight) ? Math.max(6, box.top - tipBox.height - 6) : below;
    const left = Math.min(Math.max(6, box.left), window.innerWidth - tipBox.width - 6);
    codeTip.style.top = `${top}px`;
    codeTip.style.left = `${left}px`;
  }

  function hideCodeTip() {
    codeTip.hidden = true;
  }

  // ---- Right-click code editor: - and + per rating, quick buttons, and the chance before and after, live
  const codeEditor = document.createElement('div');
  codeEditor.className = 'ratx-code-editor';
  codeEditor.setAttribute('role', 'dialog');
  codeEditor.setAttribute('aria-label', 'Edit availability code');
  codeEditor.hidden = true;
  document.body.appendChild(codeEditor);
  let editorContext = null;

  /** Splits a code into something the buttons can change: no code, one value (with +/- and a year), or one per rating. */
  function codeToDraft(text, ratingNames) {
    const value = text.trim();
    if (!value) return { kind: 'none' };
    if (value.startsWith('!')) {
      const perRating = new Map(ratingNames.slice().reverse().map((name) => [name, 0]));
      for (const part of value.split('!').slice(1)) {
        const [name, number] = part.split(':');
        perRating.set(name, Number(number) || 0);
      }
      return { kind: 'rated', perRating };
    }
    const match = value.match(/^(\d+)([+-]?)(?::(\d+))?$/);
    if (!match) return { kind: 'none' };
    return { kind: 'plain', base: Number(match[1]), shift: match[2], startYear: match[3] ? Number(match[3]) : null };
  }

  function draftToCode(draft) {
    if (draft.kind === 'none') return '';
    if (draft.kind === 'rated') {
      let code = '';
      for (const [name, value] of draft.perRating) if (value > 0) code += `!${name}:${value}`;
      return code || '0';
    }
    return `${draft.base}${draft.shift}${draft.startYear !== null ? `:${draft.startYear}` : ''}`;
  }

  /** The edited unit's chance on the selected faction's table, at each picked rating, with this cell set to code. */
  function chancesWithCode(code) {
    const { level, era, index, faction } = editorContext;
    const current = work.getCodes(level, era, index).find((entry) => entry.faction === faction);
    work.setCode(level, era, index, faction, code || null);
    const result = state.ratings.map((rating) =>
      chances(work.findTable(tableParams(state.faction, rating, state.year))).units.get(state.editing) || 0);
    work.setCode(level, era, index, faction, current ? current.code : null);
    return result;
  }

  function drawCodeEditor() {
    const context = editorContext;
    const draft = context.draft;
    const code = draftToCode(draft);
    const after = chancesWithCode(code);
    const stepper = (key, value, label) => `<div class="ratx-ce-row"><span class="ratx-ce-name">${esc(label)}</span>`
      + `<button type="button" data-step="${esc(key)}" data-by="-1" aria-label="${esc(`${label} lower`)}">−</button>`
      + `<span class="ratx-ce-value">${value}</span>`
      + `<button type="button" data-step="${esc(key)}" data-by="1" aria-label="${esc(`${label} higher`)}">+</button>`
      + `<span class="ratx-ce-note">${value > 0 ? '' : 'not fielded'}</span></div>`;
    let body;
    if (draft.kind === 'rated') {
      body = [...draft.perRating].map(([name, value]) => stepper(name, value, name)).join('');
    } else if (draft.kind === 'plain') {
      const shiftButton = (shift, label) => `<button type="button" data-shift="${shift}" aria-pressed="${draft.shift === shift}">${label}</button>`;
      body = stepper('*base*', draft.base, 'Code')
        + `<div class="ratx-ce-row ratx-ce-shift"><span class="ratx-ce-name">By rating</span>${shiftButton('', 'Same')}${shiftButton('+', 'Higher at best')}${shiftButton('-', 'Higher at worst')}</div>`
        + `<button type="button" class="ratx-ce-link" data-action="split">Set each rating separately</button>`;
    } else {
      const inherited = context.faction === 'General' ? null : work.explain(context.level, context.era, context.index, context.faction, context.era);
      body = `<p>${inherited ? `No code of its own: it uses ${esc(inherited.faction)}'s code <code>${esc(inherited.code)}</code>.` : 'No code: not fielded in this era.'}</p>`
        + `<button type="button" class="ratx-ce-link" data-action="own">Give ${esc(context.faction)} its own code</button>`;
    }
    const rows = state.ratings.map((rating, position) => {
      const change = after[position] - context.before[position];
      const changeText = Math.abs(change) < 0.005 ? 'no change' : `${change > 0 ? '+' : ''}${change.toFixed(2)} pts`;
      return `<tr><th>${esc(rating)}</th><td>${pct(context.before[position])}%</td><td>→</td><td><strong>${pct(after[position])}%</strong></td><td class="${change > 0 ? 'ratx-up' : (change < 0 ? 'ratx-down' : 'ratx-muted')}">${changeText}</td></tr>`;
    }).join('');
    const selected = factionByKey.get(state.faction);
    codeEditor.innerHTML = `<div class="ratx-code-tip-head">${esc(context.faction)} · ${esc(context.era)} · ${context.level} code · ${esc(context.name)}</div>`
      + `<div class="ratx-ce-body">${body}</div>`
      + '<div class="ratx-ce-quick"><button type="button" data-action="down2">−2</button><button type="button" data-action="up2">+2</button>'
      + '<button type="button" data-action="zero">Remove (0)</button><button type="button" data-action="clear">Clear cell</button>'
      + `<button type="button" data-action="published"${context.published === code ? ' disabled' : ''}>Published</button></div>`
      + `<div class="ratx-ce-code">Code: <code>${esc(code || '(no code)')}</code>${context.published !== code ? ` <span class="ratx-muted">published: ${esc(context.published || '(no code)')}</span>` : ''}</div>`
      + `<div class="ratx-ce-preview"><div class="ratx-muted">${esc(work.models[state.editing].key)} on the ${esc(selected ? factionName(selected, state.year) : state.faction)} ${state.year} table</div><table>${rows}</table></div>`
      + '<div class="ratx-ce-actions"><button type="button" class="ratx-ce-apply" data-action="apply">Apply</button><button type="button" data-action="cancel">Cancel</button></div>';
  }

  function openCodeEditor(input) {
    hideCodeTip();
    const { level, era, index, faction } = input.dataset;
    const record = factionByKey.get(faction) || factionByKey.get(state.faction);
    const ratingNames = record ? record.ratingSystem : [];
    const eraNumber = Number(era);
    const indexNumber = Number(index);
    editorContext = {
      input, level, era: eraNumber, index: indexNumber, faction, ratingNames,
      name: level === 'chassis' ? work.chassis[indexNumber].name : work.models[indexNumber].key,
      published: originalCode(level, eraNumber, indexNumber, faction),
      draft: codeToDraft(input.value, ratingNames),
    };
    editorContext.before = chancesWithCode(input.value.trim());
    codeEditor.hidden = false;
    drawCodeEditor();
    const box = input.getBoundingClientRect();
    const editorBox = codeEditor.getBoundingClientRect();
    const fitsBelow = box.bottom + 6 + editorBox.height <= window.innerHeight;
    const top = fitsBelow ? box.bottom + 6 : Math.max(6, box.top - editorBox.height - 6);
    const left = Math.min(Math.max(6, box.left), window.innerWidth - editorBox.width - 6);
    codeEditor.style.top = `${top + window.scrollY}px`;
    codeEditor.style.left = `${left + window.scrollX}px`;
    const firstButton = codeEditor.querySelector('button');
    if (firstButton) firstButton.focus();
  }

  function closeCodeEditor(returnFocus) {
    if (!editorContext) return;
    const input = editorContext.input;
    codeEditor.hidden = true;
    editorContext = null;
    if (returnFocus && document.body.contains(input)) input.focus();
  }

  codeEditor.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button || !editorContext) return;
    const context = editorContext;
    const draft = context.draft;
    const asPlain = (base) => ({ kind: 'plain', base: Math.max(0, base), shift: '', startYear: null });
    if (button.dataset.step) {
      const by = Number(button.dataset.by);
      if (button.dataset.step === '*base*') draft.base = Math.max(0, draft.base + by);
      else draft.perRating.set(button.dataset.step, Math.max(0, draft.perRating.get(button.dataset.step) + by));
    } else if (button.dataset.shift !== undefined) {
      draft.shift = button.dataset.shift;
    } else {
      switch (button.dataset.action) {
        case 'split': {
          const reading = readCode(draftToCode(draft), context.ratingNames);
          context.draft = { kind: 'rated', perRating: new Map(reading.ratings.map(([name, value]) => [name, Math.max(0, value)])) };
          break;
        }
        case 'own': {
          const inherited = work.explain(context.level, context.era, context.index, context.faction, context.era);
          context.draft = inherited ? codeToDraft(inherited.code, context.ratingNames) : asPlain(0);
          if (context.draft.kind === 'none') context.draft = asPlain(0);
          break;
        }
        case 'down2':
        case 'up2': {
          const by = button.dataset.action === 'up2' ? 2 : -2;
          if (draft.kind === 'none') {
            // Start from the code the cell inherits, so -2 and +2 work on an empty cell too
            const inherited = work.explain(context.level, context.era, context.index, context.faction, context.era);
            const start = inherited ? codeToDraft(inherited.code, context.ratingNames) : asPlain(0);
            context.draft = start.kind === 'none' ? asPlain(0) : start;
          }
          const target = context.draft;
          if (target.kind === 'rated') for (const [name, value] of target.perRating) target.perRating.set(name, value > 0 ? Math.max(0, value + by) : value);
          else if (target.kind === 'plain') target.base = Math.max(0, target.base + by);
          break;
        }
        case 'zero': context.draft = asPlain(0); break;
        case 'clear': context.draft = { kind: 'none' }; break;
        case 'published': context.draft = codeToDraft(context.published, context.ratingNames); break;
        case 'apply':
          try {
            applyEdit(context.level, context.era, context.index, context.faction, draftToCode(context.draft));
            setNote('');
            closeCodeEditor(false);
            render();
          } catch (error) {
            setNote(error.message);
          }
          return;
        case 'cancel': closeCodeEditor(true); return;
        default: return;
      }
    }
    drawCodeEditor();
  });
  codeEditor.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); closeCodeEditor(true); }
  });
  document.addEventListener('mousedown', (event) => {
    if (editorContext && !codeEditor.contains(event.target)) closeCodeEditor(false);
  });

  function drawGrid(level, index, table, era, next) {
    const rowsByFaction = new Map();
    for (const e of eras()) {
      for (const entry of work.getCodes(level, e, index)) {
        if (!rowsByFaction.has(entry.faction)) rowsByFaction.set(entry.faction, new Map());
        rowsByFaction.get(entry.faction).set(e, entry.code);
      }
    }
    for (const extra of state.extraRows[level]) if (!rowsByFaction.has(extra)) rowsByFaction.set(extra, new Map());
    const factions = [...rowsByFaction.keys()].sort((a, b) => (a === 'General') - (b === 'General') || a.localeCompare(b));
    const head = `<tr><th scope="col">Faction</th>${eras().map((e) => `<th scope="col" class="${e === era ? 'is-current' : (e === next ? 'is-next' : '')}">${e}</th>`).join('')}</tr>`;
    const body = factions.map((faction) => {
      const highlight = faction === state.faction ? ' class="is-current-faction"' : '';
      const cells = eras().map((e) => {
        const value = rowsByFaction.get(faction).get(e) || '';
        const edited = edits.has(editKey(level, e, index, faction));
        const column = e === era ? ' is-current' : (e === next ? ' is-next' : '');
        return `<td class="${edited ? 'is-edited' : ''}${column}"><input value="${esc(value)}" size="4" data-level="${level}" data-era="${e}" data-index="${index}" data-faction="${esc(faction)}" aria-label="${esc(`${level} code for ${faction} in ${e}`)}"></td>`;
      }).join('');
      return `<tr${highlight}><th scope="row">${esc(faction)}</th>${cells}</tr>`;
    }).join('');
    table.innerHTML = `<thead>${head}</thead><tbody>${body || `<tr><td class="ratx-muted" colspan="${eras().length + 1}">No codes yet. Add a faction row below.</td></tr>`}</tbody>`;
    const current = table.querySelector('th.is-current');
    if (current) {
      const scroller = table.parentElement;
      scroller.scrollLeft = Math.max(0, current.offsetLeft - scroller.clientWidth / 2);
    }
  }

  // ---------------------------------------------------------------- view: unit across years
  function renderHistory() {
    const unitName = $('h-unit').value.trim();
    const modelIndex = unitIndexByName.get(unitName);
    const keys = parseFactionList($('h-factions').value || state.faction, 6);
    const from = clampYear(Number($('h-from').value) || firstYear());
    const to = clampYear(Number($('h-to').value) || lastYear());
    if (modelIndex === undefined) {
      setNote(unitName ? `No unit called "${unitName}". Pick one from the list.` : 'Pick a unit to chart.');
      $('h-chart').innerHTML = '';
      $('h-legend').innerHTML = '';
      return;
    }
    setNote('');
    const model = work.models[modelIndex];
    const unitType = model.unitType === 18 ? 9 : model.unitType;
    $('ratx-title').textContent = `${model.key} across years`;
    const years = [];
    for (let year = from; year <= to; year++) years.push(year);
    const series = [];
    keys.forEach((key, i) => {
      const faction = factionByKey.get(key);
      const wanted = state.ratings[0];
      const rating = ratingsFor(faction).includes(wanted) ? wanted : middleRating(faction);
      const line = (engine) => years.map((year) => {
        if (!isActive(faction, year)) return null;
        return chances(engine.findTable(tableParams(key, rating, year, unitType))).units.get(modelIndex) || 0;
      });
      series.push({ faction, rating, color: SERIES_COLORS[i], points: line(work), before: edits.size ? line(base) : null });
    });
    $('h-heading').textContent = `${model.key}: chance per roll on each faction's ${inputs.unitTypes[unitType]} table${edits.size ? ' (dashed: before your edits)' : ''}`;
    drawChart(years, series);
    $('h-legend').innerHTML = series.map((line) =>
      `<span><span class="ratx-swatch" style="background:${line.color}"></span>${esc(factionName(line.faction, to))} (${esc(line.faction.key)}) · rating ${esc(line.rating)}</span>`).join('');
  }

  function drawChart(years, series) {
    const width = 1200, height = 420, left = 64, right = 1150, top = 20, bottom = 370;
    let maxValue = 0;
    for (const line of series) for (const list of [line.points, line.before || []]) for (const value of list) if (value !== null) maxValue = Math.max(maxValue, value);
    maxValue = maxValue > 0 ? maxValue * 1.1 : 1;
    const x = (year) => left + ((year - years[0]) / Math.max(1, years[years.length - 1] - years[0])) * (right - left);
    const y = (value) => bottom - (value / maxValue) * (bottom - top);
    const parts = [];
    for (let i = 0; i <= 5; i++) {
      const value = (maxValue / 5) * i;
      parts.push(`<line x1="${left}" x2="${right}" y1="${y(value)}" y2="${y(value)}" stroke="#333"/><text x="${left - 8}" y="${y(value) + 4}" text-anchor="end" font-size="12" fill="#888">${pct(value)}%</text>`);
    }
    for (const era of eras()) {
      if (era >= years[0] && era <= years[years.length - 1]) {
        parts.push(`<line x1="${x(era)}" x2="${x(era)}" y1="${top}" y2="${bottom}" stroke="#262626"/>`);
      }
    }
    const tickEvery = Math.max(1, Math.ceil(years.length / 9));
    years.forEach((year, index) => {
      if (index % tickEvery === 0 || index === years.length - 1) parts.push(`<text x="${x(year)}" y="${bottom + 24}" text-anchor="middle" font-size="12" fill="#888">${year}</text>`);
    });
    const path = (points) => {
      let d = '';
      let penDown = false;
      points.forEach((value, index) => {
        if (value === null) { penDown = false; return; }
        d += `${penDown ? 'L' : 'M'}${x(years[index]).toFixed(1)} ${y(value).toFixed(1)} `;
        penDown = true;
      });
      return d;
    };
    for (const line of series) {
      if (line.before) parts.push(`<path d="${path(line.before)}" fill="none" stroke="${line.color}" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.7"/>`);
      parts.push(`<path d="${path(line.points)}" fill="none" stroke="${line.color}" stroke-width="2.5" stroke-linejoin="round"/>`);
    }
    const summary = series.map((line) => `${line.faction.key} peaks at ${pct(Math.max(0, ...line.points.filter((v) => v !== null)))}%`).join(', ');
    $('h-chart').innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Line chart of chance per roll by year. ${esc(summary)}. Faint vertical lines mark era files.">${parts.join('')}</svg>`;
  }

  // ---------------------------------------------------------------- view: compare factions
  function renderCompare() {
    const keys = parseFactionList($('c-factions').value || 'FS, LA, DC, CC, FWL', 8);
    const groupBy = $('c-group').value;
    const ratingChoice = $('c-rating').value;
    const columns = keys.map((key) => {
      const faction = factionByKey.get(key);
      const list = ratingsFor(faction);
      const rating = ratingChoice === 'top' ? list[list.length - 1] : (ratingChoice === 'bottom' ? list[0] : middleRating(faction));
      const table = work.findTable(tableParams(key, rating, state.year));
      return { faction, rating, result: chances(table), hasTable: table.units.length > 0 };
    });
    setNote('');
    $('ratx-title').textContent = `${state.year} · ${inputs.unitTypes[state.unitType]} by faction`;
    const groups = new Map();
    columns.forEach((column, index) => {
      for (const [unit, chance] of column.result.units) {
        const label = groupBy === 'chassis' ? work.models[unit].chassis : work.models[unit].key;
        if (!groups.has(label)) groups.set(label, new Array(columns.length).fill(0));
        groups.get(label)[index] += chance;
      }
    });
    const ranked = [...groups.entries()].map(([label, values]) => ({ label, values, mean: values.reduce((a, b) => a + b, 0) / values.length }))
      .sort((a, b) => b.mean - a.mean).slice(0, 20);
    const maxValue = ranked.reduce((max, row) => Math.max(max, ...row.values), 0) || 1;
    $('c-max').textContent = `${pct(maxValue)}%`;
    $('c-heading').textContent = `${ranked.length} most common ${groupBy === 'chassis' ? 'chassis' : 'models'} across ${columns.length} factions`;
    $('c-head').innerHTML = `<tr><th scope="col">${groupBy === 'chassis' ? 'Chassis' : 'Model'}</th>${columns.map((column) =>
      `<th scope="col" style="text-align:center"><abbr title="${esc(factionName(column.faction, state.year))}, rating ${esc(column.rating)}" style="text-decoration:none">${esc(column.faction.key)}</abbr></th>`).join('')}</tr>`;
    $('c-body').innerHTML = ranked.map((row) => `<tr><th scope="row">${esc(row.label)}</th>${row.values.map((value, index) => {
      if (!columns[index].hasTable) return '<td class="ratx-muted">n/a</td>';
      const color = heatColor(value / maxValue);
      return `<td class="ratx-num" style="background:${color.background};color:${color.text}">${pct(value)}%</td>`;
    }).join('')}</tr>`).join('') || '<tr><td class="ratx-muted">No tables for these factions.</td></tr>';
  }

  function heatColor(fraction) {
    const stops = [[38, 38, 38], [104, 84, 15], [234, 174, 63]]; // dark to BT yellow
    const t = Math.min(Math.max(fraction, 0), 1);
    const segment = t < 0.5 ? 0 : 1;
    const local = t < 0.5 ? t / 0.5 : (t - 0.5) / 0.5;
    const rgb = stops[segment].map((channel, i) => Math.round(channel + (stops[segment + 1][i] - channel) * local));
    const linear = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
    const luminance = 0.2126 * linear(rgb[0]) + 0.7152 * linear(rgb[1]) + 0.0722 * linear(rgb[2]);
    return { background: `rgb(${rgb.join(',')})`, text: luminance < 0.183 ? '#ffffff' : '#000000' };
  }

  // ---------------------------------------------------------------- render loop
  function render() {
    const token = ++renderToken;
    try {
      showFieldsForView();
      $('f-year').value = state.year;
      $('f-year-range').value = state.year;
      refreshFactionList();
      refreshRatings();
      refreshUnitTypes();
      refreshRatGenOptions();
      refreshLineage();
      refreshEditsBanner();
      if (token !== renderToken) return;
      writeHash();
      if (state.view === 'table') renderTable();
      if (state.view === 'history') renderHistory();
      if (state.view === 'compare') renderCompare();
      $('ratx-status').textContent = '';
    } catch (error) {
      $('ratx-status').textContent = `Something went wrong: ${error.message}`;
      throw error;
    }
  }

  let queryTimer = null;
  function wireEvents() {
    for (const tab of document.querySelectorAll('.ratx-tab')) tab.addEventListener('click', () => { state.view = tab.dataset.view; render(); });
    const setYear = (value) => { state.year = clampYear(Number(value) || state.year); render(); };
    $('f-year').addEventListener('change', (event) => setYear(event.target.value));
    $('f-year-range').addEventListener('change', (event) => setYear(event.target.value));
    $('f-year-range').addEventListener('input', (event) => { $('f-year').value = event.target.value; });
    wireFactionPicker();
    $('f-type').addEventListener('change', (event) => { state.unitType = Number(event.target.value); resetRatGenOptions(); state.editing = null; render(); });
    $('f-ratings').addEventListener('click', (event) => {
      const button = event.target.closest('[data-rating]');
      if (!button) return;
      const faction = factionByKey.get(state.faction);
      const available = ratingsFor(faction);
      const rating = button.dataset.rating;
      if (rating === '*all*') {
        // All is a toggle: a second click puts back the ratings picked before it
        const allPicked = state.ratings.length === available.length;
        if (!allPicked) {
          ratingsBeforeAll = state.ratings.slice();
          state.ratings = available.slice();
        } else {
          const previous = ratingsBeforeAll.filter((r) => available.includes(r));
          state.ratings = (previous.length && previous.length < available.length) ? previous : [middleRating(faction)];
        }
      }
      else if (state.view !== 'table') state.ratings = [rating];
      else if (state.ratings.includes(rating)) { if (state.ratings.length > 1) state.ratings = state.ratings.filter((r) => r !== rating); }
      else state.ratings = available.filter((r) => r === rating || state.ratings.includes(r));
      render();
    });
    $('f-query').addEventListener('input', (event) => { clearTimeout(queryTimer); queryTimer = setTimeout(() => { state.query = event.target.value; render(); }, 150); });

    // RAT Generator options
    $('f-weights').addEventListener('change', (event) => {
      const value = Number(event.target.dataset.weight);
      state.weights = event.target.checked ? [...state.weights, value].sort((a, b) => a - b) : state.weights.filter((w) => w !== value);
      render();
    });
    $('f-motives').addEventListener('change', (event) => {
      const current = motivesInUse();
      const mode = event.target.dataset.motive;
      const order = options().motives.map((m) => m.mode);
      state.motives = (event.target.checked ? [...current, mode] : current.filter((m) => m !== mode)).sort((a, b) => order.indexOf(a) - order.indexOf(b));
      render();
    });
    $('f-network').addEventListener('change', (event) => { state.network = Number(event.target.dataset.network); render(); });
    $('f-roles').addEventListener('change', (event) => {
      const role = event.target.dataset.role;
      state.roles = event.target.checked ? [...state.roles, role] : state.roles.filter((r) => r !== role);
      render();
    });
    $('f-strictness').addEventListener('change', (event) => { state.strictness = Number(event.target.value); render(); });
    $('f-ratgen-reset').addEventListener('click', () => { resetRatGenOptions(); render(); });
    $('f-lineage').addEventListener('click', (event) => {
      const link = event.target.closest('[data-lineage-goto]');
      if (!link) return;
      event.preventDefault();
      state.faction = link.dataset.lineageGoto;
      render();
    });

    $('t-show-all').addEventListener('change', (event) => { state.showAll = event.target.checked; render(); });
    $('t-body').addEventListener('click', (event) => {
      const link = event.target.closest('[data-goto]');
      if (link) {
        event.preventDefault();
        state.faction = link.dataset.goto;
        state.year = clampYear(state.year - 5);
        render();
        return;
      }
      const editButton = event.target.closest('[data-edit]');
      if (editButton) {
        state.editing = Number(editButton.dataset.edit);
        state.extraRows = { model: [], chassis: [] };
        render();
        $('t-editor').scrollIntoView({ behavior: 'smooth', block: 'start' });
        showTestNoticeOnce();
      }
    });

    // Editor
    $('test-notice').addEventListener('close', () => focusEditorAfterNotice());
    $('e-close').addEventListener('click', () => { state.editing = null; render(); });
    const commitCell = (input) => {
      const { level, era, index, faction } = input.dataset;
      const current = work.getCodes(level, Number(era), Number(index)).find((entry) => entry.faction === faction);
      if ((current ? current.code : '') === input.value.trim()) return;
      try {
        applyEdit(level, Number(era), Number(index), faction, input.value);
        setNote('');
        render();
      } catch (error) {
        setNote(error.message);
        input.focus();
      }
    };
    for (const grid of [$('e-model-grid'), $('e-chassis-grid')]) {
      grid.addEventListener('change', (event) => { if (event.target.matches('input')) commitCell(event.target); });
      grid.addEventListener('keydown', (event) => { if (event.key === 'Enter' && event.target.matches('input')) { event.preventDefault(); commitCell(event.target); } });
      grid.addEventListener('contextmenu', (event) => { if (event.target.matches('input')) { event.preventDefault(); openCodeEditor(event.target); } });
      grid.addEventListener('mouseover', (event) => { if (event.target.matches('input')) showCodeTip(event.target); });
      grid.addEventListener('mouseout', (event) => { if (event.target.matches('input') && document.activeElement !== event.target) hideCodeTip(); });
      grid.addEventListener('focusin', (event) => { if (event.target.matches('input')) showCodeTip(event.target); });
      grid.addEventListener('focusout', () => hideCodeTip());
      grid.addEventListener('input', (event) => { if (event.target.matches('input')) showCodeTip(event.target); });
    }
    window.addEventListener('scroll', () => hideCodeTip(), { passive: true });
    for (const button of document.querySelectorAll('[data-add]')) {
      button.addEventListener('click', () => {
        const level = button.dataset.add;
        const input = $(`e-${level}-add`);
        const key = parseFactionInput(input.value) || (input.value.trim() === 'General' ? 'General' : null);
        if (!key) { setNote(`No faction "${input.value}".`); return; }
        state.extraRows[level].push(key);
        input.value = '';
        render();
      });
    }

    // Edits banner
    $('ratx-edits-show').addEventListener('click', () => {
      const list = $('ratx-edits-list');
      list.hidden = !list.hidden;
      $('ratx-edits-show').textContent = list.hidden ? 'Show changes' : 'Hide changes';
    });
    $('ratx-edits-copy').addEventListener('click', async () => {
      const text = [...edits.values()].map(editLabel).join('\n');
      try { await navigator.clipboard.writeText(text); $('ratx-status').textContent = 'Copied the list of changes.'; }
      catch { $('ratx-status').textContent = text; }
    });
    $('ratx-edits-reset').addEventListener('click', () => { edits.clear(); work.resetEdits(); render(); });
    $('ratx-edits-list').addEventListener('click', (event) => {
      const button = event.target.closest('[data-undo]');
      if (!button) return;
      const edit = edits.get(button.dataset.undo);
      work.setCode(edit.level, edit.era, edit.index, edit.faction, edit.before || null);
      edits.delete(button.dataset.undo);
      render();
    });

    $('h-go').addEventListener('click', render);
    for (const id of ['c-factions', 'c-group', 'c-rating']) $(id).addEventListener('change', render);
    window.addEventListener('hashchange', () => { readHash(); state.year = clampYear(state.year); render(); });
  }

  async function start() {
    inputs = await loadInputs();
    base = RatGen.create(inputs);
    work = RatGen.create(inputs);
    inputs.factions.forEach((faction) => factionByKey.set(faction.key, faction));
    work.models.forEach((model) => unitIndexByName.set(model.key, model.index));

    readHash();
    state.year = clampYear(state.year);
    if (!factionByKey.has(state.faction)) state.faction = 'FS';
    $('f-year').min = $('f-year-range').min = firstYear();
    $('f-year').max = $('f-year-range').max = lastYear();
    $('f-year-range').value = state.year;
    $('h-from').value ||= Math.max(firstYear(), 2750);
    $('h-to').value ||= lastYear();
    $('h-factions').value ||= 'FS, LA, DC, CC, FWL';
    $('h-unit').value ||= 'Atlas AS7-D';
    $('c-factions').value ||= 'FS, LA, DC, CC, FWL';
    $('h-unit-list').innerHTML = work.models.map((model) => `<option value="${esc(model.key)}"></option>`).join('');
    const buildFacts = [['Data built', inputs.generatedAt.slice(0, 10)],
      ['MegaMek', `${inputs.megamekVersion}${inputs.buildId ? ` (${inputs.buildId})` : ''}`],
      ['Years', `${firstYear()}–${lastYear()}`]];
    $('ratx-build').innerHTML = buildFacts.map(([label, value]) => `<div><dt>${esc(label)}</dt><dd>${esc(value)}</dd></div>`).join('');
    $('ratx-filters').hidden = false;
    wireEvents();
    render();
    if (state.editing !== null) $('t-editor').scrollIntoView({ block: 'start' });
  }

  start().catch((error) => { $('ratx-status').textContent = `Could not load the RAT data: ${error.message}`; });
})();
