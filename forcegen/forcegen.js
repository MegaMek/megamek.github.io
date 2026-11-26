/* Force Generator Explorer: reads data/index.json and data/<study>.json written by forcegen/summarize.py. */
(() => {
  'use strict';
  const $ = (id) => document.getElementById(id);
  const esc = (text) => String(text).replace(/[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const pct = (value) => (value === null || value === undefined ? '—' : `${value.toFixed(value >= 10 ? 0 : 1)}%`);
  const roleText = (roles) => (roles === '-' ? 'none' : roles.split(',').map((r) => r.replace(/_/g, ' ')).join(', '));
  const WEIGHT = ['Ultra light', 'Light', 'Medium', 'Heavy', 'Assault', 'Super heavy'];
  const ECHELON = { 3: 'Lance / Star', 4: 'Company / Binary', 5: 'Battalion / Trinary', 6: 'Regiment / Cluster' };
  let index = [];
  let study = null;

  // Every unit name carries data-unit, so right-clicking it opens the unit menu
  const mekbay = (unit) => {
    const id = study && study.mekbay[unit];
    if (!id) return `<span class="fg-unit" data-unit="${esc(unit)}">${esc(unit)}</span>`;
    const url = `https://mekbay.com/?${new URLSearchParams({ gs: 'cbt', shareUnit: id, tab: 'General' })}`;
    return `<a class="fg-unit" data-unit="${esc(unit)}" href="${esc(url)}" target="_blank" rel="noopener">${esc(unit)}</a>`;
  };
  const meter = (value, lowBelow) => (value === null || value === undefined ? '<span class="ratx-muted">—</span>'
    : `<div class="fg-meter"><div class="fg-meter-track"><div class="fg-meter-fill${value < lowBelow ? ' is-low' : ''}" style="width:${value}%"></div></div><span class="ratx-num">${pct(value)}</span></div>`);

  function forceLabel(entry) {
    const echelon = { 'mek-company': 'Mek company', 'mek-regiment': 'Mek regiment', 'tank-company': 'Tank company',
      'asf-squadron': 'Fighter squadron', 'mek-trinary': 'Mek Trinary', 'mek-cluster': 'Mek Cluster' };
    const key = entry.name.split('-').slice(2).join('-');
    return echelon[key] || `${entry.unitType} ${ECHELON[entry.echelon] || entry.echelon}`;
  }

  function fillPickers(selected) {
    const factions = [...new Set(index.map((e) => e.faction))].sort();
    const faction = selected?.faction || factions[0];
    $('fg-faction').innerHTML = factions.map((f) => `<option ${f === faction ? 'selected' : ''}>${esc(f)}</option>`).join('');
    const years = [...new Set(index.filter((e) => e.faction === faction).map((e) => e.year))].sort((a, b) => a - b);
    const year = years.includes(selected?.year) ? selected.year : years[0];
    $('fg-year').innerHTML = years.map((y) => `<option ${y === year ? 'selected' : ''}>${y}</option>`).join('');
    const forces = index.filter((e) => e.faction === faction && e.year === year);
    const name = forces.some((e) => e.name === selected?.name) ? selected.name : forces[0].name;
    $('fg-force').innerHTML = forces.map((e) =>
      `<option value="${esc(e.name)}" ${e.name === name ? 'selected' : ''}>${esc(forceLabel(e))} · ${e.runs} built</option>`).join('');
    return name;
  }

  async function load(name) {
    $('fg-status').textContent = 'Loading study…';
    const response = await fetch(`data/${name}.json`);
    study = await response.json();
    history.replaceState(null, '', `#${new URLSearchParams({ study: name })}`);
    render();
    $('fg-status').textContent = '';
  }

  function render() {
    const s = study;
    $('fg-title').textContent = `${s.faction} · ${s.year} · ${forceLabel(s)}`;
    const empty = (s.status.empty || 0) + (s.status.unresolved || 0);
    $('fg-tiles').innerHTML = [
      ['Forces built', s.runs, `${s.slotsPerForce} slots each`,
        `How many times the study built this force with MegaMek's Force Generator, each time with different fixed dice. Every number on this page comes from these ${s.runs} builds.`],
      ['Different units picked', s.distinctUnits, `across ${s.slots.toLocaleString()} slots`,
        'How many different units came up at least once across all the builds. A low number means the same few units keep filling the force.'],
      ['Role honoured', pct(s.roleAccepted), `the RAT Generator's role rules accept the unit; ${pct(s.roleMet)} carry the tag`,
        'Of the slots that ask for a role, the share whose unit the RAT Generator\'s own role rules accept. Recon, cavalry and anti-aircraft also take untagged units that fit, and omni reads the omni flag, so the tagged share is lower. Roles other than recon, cavalry, anti-aircraft, urban and omni are scored by tag only.'],
      ['Lance weights kept', pct(s.lanceWeightInSet), `every unit in a weight class the lance asked for; ${pct(s.lanceWeightExact)} exact mix`,
        'The share of lances where every unit is in a weight class the lance asked for. The Force Generator picks a lance\'s units from that set of classes, then hands them out to the slots, so the exact mix (shown below the number) is lower.'],
      ['Empty slots', pct(100 * empty / s.slots), `${empty} slots found no unit`,
        'Slots where the Force Generator found no unit at any rating, weight or role step.'],
    ].map(([label, value, caption, tip]) => `<div class="ratx-tile">${tipLabel(label, tip)}<strong>${esc(value)}</strong><span>${esc(caption)}</span></div>`).join('');

    $('fg-slots').innerHTML = s.categories.map((c) => `<tr>
      <td class="ratx-unit-name">${esc(c.formation === '-' ? 'No formation' : c.formation)}</td>
      <td class="ratx-muted">${esc(roleText(c.roles))}</td>
      <td>${meter(c.share, -1)}</td>
      <td>${c.roleAccepted === null || c.roleAccepted === undefined ? '<span class="ratx-muted">no role asked</span>' : `${meter(c.roleAccepted, 80)}<span class="ratx-hint">${pct(c.roleMet)} tagged</span>`}</td>
      <td>${meter(c.weightMet, 50)}</td>
      <td><div class="fg-chips">${c.topUnits.slice(0, 6).map(([unit, , share]) =>
        `<span class="fg-chip">${mekbay(unit)}<span class="ratx-num">${pct(share)}</span></span>`).join('')}${c.empty ? `<span class="fg-chip fg-down">${c.empty} empty</span>` : ''}</div></td>
    </tr>`).join('');

    $('fg-roles').innerHTML = s.roles.length ? `<div class="fg-role-row fg-role-head">${tipLabel('Role', 'A mission role that slots in this force ask for.')}${tipLabel('Accepted by the role rules', 'The share of slots asking for this role whose unit the RAT Generator\'s own role rules accept, including untagged units that fit, such as fast \'Meks for recon.')}${tipLabel('Tagged', 'The share whose unit carries this role\'s tag in the RAT Generator data.')}${tipLabel('Slots', 'How many slots asked for this role, across every force built.')}</div>${s.roles.map((r) => `<div class="fg-role-row"><span>${esc(r.role.replace(/_/g, ' '))}</span>${meter(r.accepted, 80)}<span class="ratx-num">${pct(r.carriesRole)}</span><span class="ratx-num ratx-muted">${r.slots}</span></div>`).join('')}`
      : '<p class="ratx-muted">No slots in this force ask for a role.</p>';

    const weights = [...new Set(s.weightMatrix.flatMap(([req, got]) => [req, got]))].map(Number).sort((a, b) => a - b);
    const cell = new Map(s.weightMatrix.map(([req, got, n]) => [`${req}|${got}`, n]));
    const rowTotal = (req) => weights.reduce((sum, got) => sum + (cell.get(`${req}|${got}`) || 0), 0);
    $('fg-weight').innerHTML = weights.length ? `<table class="fg-matrix"><thead><tr><th>${tipLabel('asked \\ got', 'Rows: the weight class a slot asked for. Columns: the class it got. Each row adds up to 100%. Yellow cells got what they asked for; red cells got another class.')}</th>${weights.map((w) => `<th>${esc(WEIGHT[w] || w)}</th>`).join('')}</tr></thead><tbody>${
      weights.map((req) => `<tr><th>${esc(WEIGHT[req] || req)}</th>${weights.map((got) => {
        const n = cell.get(`${req}|${got}`) || 0;
        const share = rowTotal(req) ? n / rowTotal(req) : 0;
        const bg = req === got ? `rgba(234,174,63,${0.15 + share * 0.85})` : `rgba(255,105,105,${share * 0.8})`;
        return `<td style="background:${n ? bg : '#222'};color:${share > 0.55 && req === got ? '#000' : '#fff'}">${n ? pct(100 * share) : ''}</td>`;
      }).join('')}</tr>`).join('')}</tbody></table>` : '<p class="ratx-muted">No weight classes asked.</p>';

    $('fg-units').innerHTML = s.units.map((u, i) => `<tr>
      <td class="ratx-num ratx-muted">${i + 1}</td><td class="ratx-unit-name">${mekbay(u.unit)}</td>
      <td>${meter(u.share * 4 > 100 ? 100 : u.share, -1).replace(/width:[\d.]+%/, `width:${Math.min(100, u.share * 6)}%`)}</td>
      <td class="ratx-num">${u.perForce}</td>
      <td class="ratx-muted">${esc(roleText(u.roles || '-'))}</td>
      <td><div class="fg-chips">${u.where.map(([where, , share]) => `<span class="fg-chip">${esc(where.replace(' | -', ''))}<span class="ratx-num">${pct(share)}</span></span>`).join('')}</div></td>
    </tr>`).join('');

    const chassisOptions = s.sweep.filter((e) => e.edits.length);
    $('fg-chassis').innerHTML = chassisOptions.map((e, i) =>
      `<option value="${i}">${esc(e.chassis.replace(/\[.*$/, ''))} · ${e.edits[0].base} picks</option>`).join('')
      || '<option>No sensitivity run for this study</option>';
    renderSweep(chassisOptions);

    $('fg-empty-box').hidden = s.emptySlots.length === 0;
    $('fg-empty').innerHTML = `<ul class="fg-empty-list">${s.emptySlots.map(([what, n]) => `<li>${esc(what)}: <strong>${n}</strong> slots</li>`).join('')}</ul>`;
  }

  function renderSweep(options) {
    const entry = options[Number($('fg-chassis').value) || 0];
    if (!entry) { $('fg-sweep').innerHTML = ''; return; }
    $('fg-sweep').innerHTML = `<div class="fg-edits">${entry.edits.map((edit) => {
      const change = edit.edited - edit.base;
      const label = edit.delta === -99 ? 'Removed for this faction' : `Code ${edit.delta > 0 ? 'up' : 'down'} ${Math.abs(edit.delta)}`;
      return `<div class="fg-edit">
        <h3>${esc(label)} <span class="ratx-hint">${esc(edit.from)} → ${esc(edit.to)}</span></h3>
        <div><span class="fg-big">${edit.base} → ${edit.edited}</span> <span class="${change < 0 ? 'fg-down' : 'fg-up'}">${change > 0 ? '+' : ''}${change} picks (${edit.base ? `${change > 0 ? '+' : ''}${Math.round(100 * change / edit.base)}%` : 'new'})</span></div>
        <div class="ratx-hint">Control run, no edit: moved by ${edit.controlNoise ?? '—'} picks</div>
        <table><thead><tr><th>${tipLabel('Lance type · roles', 'The kind of slot: the lance\'s formation type and the roles the slot asks for. ● marks a move bigger than chance and bigger than the no-edit control run.')}</th><th>${tipLabel('Picks', 'How often this chassis filled this kind of slot: before the edit, then after it, with the same dice.')}</th><th>${tipLabel('Who filled the gap', 'The units whose picks in this kind of slot moved the most after the edit. A unit that gained picks took over the slots this chassis gave up.')}</th></tr></thead><tbody>${edit.categories.slice(0, 8).map((c) => `<tr>
          <td>${c.significant ? '<span class="fg-sig" title="Bigger than chance and the control">●</span> ' : ''}${esc(c.category.replace(' | -', ''))}</td>
          <td class="ratx-num">${c.base} → ${c.edited}</td>
          <td>${c.shifts.slice(0, 3).map(([unit, n]) => `${mekbay(unit)} <span class="${n.startsWith('-') ? 'fg-down' : 'fg-up'}">${esc(n)}</span>`).join('<br>') || '—'}</td>
        </tr>`).join('')}</tbody></table>
      </div>`;
    }).join('')}</div>`;
  }

  // ---- Explanations for the tile and column headings: a "?" after the heading, shown on hover or keyboard focus
  // (same look as the RAT Explorer; the styles come from ../rat/rat.css)
  function tipLabel(label, tip) {
    if (!tip) return `<span>${esc(label)}</span>`;
    return `<span class="ratx-tip-target" tabindex="0" data-tip="${esc(tip)}">${esc(label)}`
      + '<span class="ratx-tip-mark" aria-hidden="true">?</span></span>';
  }

  /** Tips for the fixed column headings in index.html, by table body id and heading text. */
  const COLUMN_TIPS = {
    'fg-slots': {
      'Lance type': 'The formation type of the lance the slot sits in, such as Recon or Battle. "No formation" when the force rules gave none.',
      'Roles asked': 'The mission roles the slot asks for, from the formation and the force rules.',
      'Share of slots': 'How much of the force is this kind of slot.',
      'Role honoured': 'Of these slots, the share whose unit the RAT Generator\'s own role rules accept. The line below gives the share that carry the role tag.',
      'Slot weight matched': 'The share of slots that got exactly the weight class asked for that slot. It is often low because a lance\'s units are picked as a set and then handed out to its slots.',
      'Most picked': 'The units picked most often for this kind of slot, with their share of its picks. Names open the unit in MekBay.',
    },
    'fg-units': {
      '#': 'Rank by number of picks, most first.',
      'Unit': 'Chassis and model. The name opens the unit in MekBay.',
      'Share of picks': 'This unit\'s share of every pick in the study.',
      'Per force': 'How many of this unit an average force carries (picks divided by forces built).',
      'Its roles': 'The role tags the unit carries in the RAT Generator data.',
      'Slots it fills': 'The kinds of slot this unit is picked for, with the share of its picks in each.',
    },
  };

  /** Tips for the picker labels, by the id of the control they label. */
  const LABEL_TIPS = {
    'fg-faction': 'The factions the overnight run studied. Only factions with a study are listed.',
    'fg-year': 'The years studied for this faction.',
    'fg-force': 'The kind of force the study built, and how many times it was built.',
    'fg-chassis': 'The most-picked chassis in this study, whose availability code the run changed. The number is its picks before any change.',
  };

  function decorateColumnHeadings() {
    for (const [controlId, tip] of Object.entries(LABEL_TIPS)) {
      const label = document.querySelector(`label[for="${controlId}"]`);
      if (label) label.innerHTML = tipLabel(label.textContent.trim(), tip);
    }
    for (const [bodyId, tips] of Object.entries(COLUMN_TIPS)) {
      const table = $(bodyId).closest('table');
      for (const heading of table.querySelectorAll('thead th')) {
        const text = heading.textContent.trim();
        if (tips[text]) heading.innerHTML = tipLabel(text, tips[text]);
      }
    }
  }

  const helpTip = document.createElement('div');
  helpTip.className = 'ratx-code-tip ratx-help-tip';
  helpTip.id = 'fg-help-tip';
  helpTip.setAttribute('role', 'tooltip');
  helpTip.hidden = true;
  document.body.appendChild(helpTip);

  function showHelpTip(target) {
    helpTip.textContent = target.dataset.tip;
    helpTip.hidden = false;
    target.setAttribute('aria-describedby', 'fg-help-tip');
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

  // ---- Right-click unit menu: what the overnight run measured for the unit's chassis, and a link to edit its
  // codes in the RAT Explorer. The page cannot rebuild forces itself; these numbers come from the Java study.
  const unitMenu = document.createElement('div');
  unitMenu.className = 'ratx-code-editor fg-unit-menu';
  unitMenu.setAttribute('role', 'dialog');
  unitMenu.setAttribute('aria-label', 'Unit');
  unitMenu.hidden = true;
  document.body.appendChild(unitMenu);
  let menuAnchor = null;

  /** The swept chassis this unit belongs to: the longest chassis name the unit name starts with. */
  function sweptChassis(unit) {
    let best = null;
    for (const entry of study.sweep) {
      const name = entry.chassis.replace(/\[.*$/, '');
      const matches = unit === name || unit.startsWith(`${name} `);
      if (matches && (!best || name.length > best.name.length)) best = { name, entry };
    }
    return best;
  }

  function editLabel(edit) {
    if (edit.delta === -99) return 'Removed (code 0)';
    return `Code ${edit.delta > 0 ? '+' : '−'}${Math.abs(edit.delta)}`;
  }

  /**
   * The other units that moved most the opposite way, across every kind of slot: the ones that filled the gap when
   * the chassis lost picks (sign +1), or gave up picks when it gained them (sign -1).
   */
  function otherUnitsMoved(edit, sign) {
    const moves = new Map();
    for (const category of edit.categories) {
      for (const [unit, change] of category.shifts) {
        const amount = Number(change);
        if (Math.sign(amount) === sign) moves.set(unit, (moves.get(unit) || 0) + amount);
      }
    }
    return [...moves].sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])).slice(0, 3);
  }

  function openUnitMenu(anchor) {
    const unit = anchor.dataset.unit;
    const picked = study.units.find((entry) => entry.unit === unit);
    const swept = sweptChassis(unit);
    const lines = [`<div class="ratx-code-tip-head">${esc(unit)} · ${esc(study.faction)} ${study.year}</div>`];
    lines.push(picked
      ? `<p>Picked ${picked.picks.toLocaleString()} times in ${study.runs} forces: ${pct(picked.share)} of all picks, ${picked.perForce} per force.</p>`
      : '<p>Not among the 60 most-picked units in this study.</p>');
    if (swept && swept.entry.edits.length) {
      const rows = swept.entry.edits.map((edit) => {
        const change = edit.edited - edit.base;
        const percent = edit.base ? `${change > 0 ? '+' : ''}${Math.round(100 * change / edit.base)}%` : 'new';
        const others = otherUnitsMoved(edit, change < 0 ? 1 : -1)
          .map(([name, amount]) => `${esc(name)} ${amount > 0 ? '+' : ''}${amount}`).join(', ');
        return `<tr><th>${esc(editLabel(edit))}</th><td>${edit.base} → <strong>${edit.edited}</strong> picks</td>`
          + `<td class="${change < 0 ? 'fg-down' : 'fg-up'}">${percent}</td></tr>`
          + (others ? `<tr class="fg-menu-fill"><td colspan="3">${change < 0 ? 'Gap filled by' : 'Picks taken from'} ${others}</td></tr>` : '');
      }).join('');
      lines.push(`<div class="ratx-ce-preview"><div class="ratx-muted">Measured overnight for the whole ${esc(swept.name)} chassis, published code ${esc(swept.entry.edits[0].from.replace('=', ' '))}, rebuilt with the same dice:</div><table>${rows}</table></div>`);
      lines.push(`<p class="ratx-muted">The no-edit control run moved by ${swept.entry.edits[0].controlNoise ?? '—'} picks.</p>`);
    } else {
      lines.push('<p class="ratx-muted">The overnight run did not test code edits for this chassis. It tested the 12 most-picked chassis in each study.</p>');
    }
    const link = `../rat/index.html#${new URLSearchParams({ view: 'table', year: study.year, f: study.faction, edit: unit })}`;
    lines.push(`<div class="ratx-ce-actions"><a class="fg-menu-link" href="${esc(link)}">Edit its codes in the RAT Explorer →</a><button type="button" data-action="close">Close</button></div>`);
    unitMenu.innerHTML = lines.join('');
    unitMenu.hidden = false;
    menuAnchor = anchor;
    const box = anchor.getBoundingClientRect();
    const menuBox = unitMenu.getBoundingClientRect();
    const fitsBelow = box.bottom + 6 + menuBox.height <= window.innerHeight;
    const top = fitsBelow ? box.bottom + 6 : Math.max(6, box.top - menuBox.height - 6);
    const left = Math.min(Math.max(6, box.left), window.innerWidth - menuBox.width - 6);
    unitMenu.style.top = `${top + window.scrollY}px`;
    unitMenu.style.left = `${left + window.scrollX}px`;
    unitMenu.querySelector('.fg-menu-link').focus();
  }

  function closeUnitMenu(returnFocus) {
    if (unitMenu.hidden) return;
    unitMenu.hidden = true;
    if (returnFocus && menuAnchor && document.body.contains(menuAnchor)) menuAnchor.focus();
    menuAnchor = null;
  }

  document.addEventListener('contextmenu', (event) => {
    const anchor = event.target.closest('[data-unit]');
    if (!anchor || !study) return;
    event.preventDefault();
    hideHelpTip(null);
    openUnitMenu(anchor);
  });
  document.addEventListener('mousedown', (event) => { if (!unitMenu.hidden && !unitMenu.contains(event.target)) closeUnitMenu(false); });
  unitMenu.addEventListener('click', (event) => { if (event.target.closest('[data-action="close"]')) closeUnitMenu(true); });
  unitMenu.addEventListener('keydown', (event) => { if (event.key === 'Escape') { event.preventDefault(); closeUnitMenu(true); } });

  /** The line at the foot of the page saying which MegaMek build ran the study (data/build.json, when present). */
  async function showBuild() {
    try {
      const response = await fetch('data/build.json');
      if (!response.ok) return;
      const build = await response.json();
      $('fg-build').textContent = `Study run ${build.built} with MegaMek ${build.megamek}; ${build.studies} forces.`;
    } catch {
      // No build note: the page works without it
    }
  }

  async function start() {
    decorateColumnHeadings();
    showBuild();
    index = await (await fetch('data/index.json')).json();
    const wanted = new URLSearchParams(location.hash.slice(1)).get('study');
    const initial = index.find((e) => e.name === wanted) || index.find((e) => e.name === 'fs-3039-mek-company') || index[0];
    $('fg-filters').hidden = false;
    const change = (field) => () => {
      const current = { faction: $('fg-faction').value, year: Number($('fg-year').value), name: $('fg-force').value };
      if (field === 'faction') { current.year = null; current.name = null; }
      if (field === 'year') current.name = null;
      load(fillPickers(current));
    };
    $('fg-faction').addEventListener('change', change('faction'));
    $('fg-year').addEventListener('change', change('year'));
    $('fg-force').addEventListener('change', change('force'));
    $('fg-chassis').addEventListener('change', () => renderSweep(study.sweep.filter((e) => e.edits.length)));
    await load(fillPickers(initial));
  }

  start().catch((error) => { $('fg-status').textContent = `Could not load the studies: ${error.message}`; });
})();
