/* Get correct download button by OS */
let ready = ( callback ) => {
  if ( document.readyState != "loading" ) callback();
  else document.addEventListener( "DOMContentLoaded", callback );
}

ready( () => {
  let downloader = document.getElementsByClassName( 'downloader' );

  for ( let element of downloader ) {
    let version = element.dataset.version;

    if ( version == '0.49.19.1' ) {
      let url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/MekHQ-" + version + ".tar.gz";
      let platform = "<i class='fab fa-linux'></i> Linux/Unix";

      if ( navigator.userAgent.indexOf( "Win" ) != -1 ) {
        url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/mekhq-windows-" + version + ".zip";
        platform = "<i class='fab fa-windows'></i> Windows";
      } else if ( navigator.userAgent.indexOf( "Mac OS X" ) != -1 ) {
        platform = "<i class='fab fa-apple'></i> Mac OSX";
      }

      updateDownloadLinks( element, version, url, platform );
    } else {
      let url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/MekHQ-" + version + ".tar.gz";
      updateDownloadLinks( element, version, url, null );
    }

  }

  loadReleaseTable();

  loadDownloadChart();
  loadVersionCharts();

  setInterval( function () { loadXMLDoc(); }, 1000 );
} );

function updateDownloadLinks( element, version, url, platform ) {
  let downloadLink = element.getElementsByClassName( 'download_link' )[ 0 ];
  let versionText = element.getElementsByClassName( 'version_display' )[ 0 ];
  let platformText = element.getElementsByClassName( 'version_platform' )[ 0 ];

  downloadLink.href = url;
  versionText.innerHTML = version;

  if ( platformText ) {
    platformText.innerHTML = platform;
  }
}

function isDarkModeEnabled() {
  return window.matchMedia && window.matchMedia( '(prefers-color-scheme: dark)' ).matches
}

const toggleSwitch = document.querySelector( '.theme-switch input[type="checkbox"]' );
toggleSwitch.addEventListener( 'change', switchTheme, false );

function switchTheme( e ) {
  if ( e.target.checked ) {
    document.documentElement.setAttribute( 'data-theme', 'dark' );
    localStorage.setItem( 'theme', 'dark' ); //add this
  }
  else {
    document.documentElement.setAttribute( 'data-theme', 'light' );
    localStorage.setItem( 'theme', 'light' ); //add this
  }
}

const currentTheme = localStorage.getItem( 'theme' ) ? localStorage.getItem( 'theme' ) : null;

if ( currentTheme ) {
  document.documentElement.setAttribute( 'data-theme', currentTheme );

  if ( currentTheme === 'dark' ) {
    toggleSwitch.checked = true;
  }
} else if ( isDarkModeEnabled() ) {
  toggleSwitch.checked = true
  document.documentElement.setAttribute( 'data-theme', 'dark' );
}

/*
 * Download Stats table. One row per release line (51.01, 51.00, ...) with a
 * column per program. A line's total adds up its Core release, patches and
 * Experimental builds; opening a row lists each build. The data comes from
 * assets/data/releases.json, which the daily snapshot workflow rewrites.
 */

const STATS_REPOS = [ "megamek", "megameklab", "mekhq" ];

// Release lines shown before the "Show older" button.
const STATS_VISIBLE_LINES = 6;

function loadReleaseTable() {
  let table = document.getElementById( "download-stats-table" );

  if ( !table ) {
    return;
  }

  fetch( "/assets/data/releases.json" )
    .then( ( response ) => response.json() )
    .then( ( data ) => renderReleaseTable( table, data ) )
    .catch( ( error ) => {
      console.log( error );
      table.tBodies[ 0 ].innerHTML = "<tr><td colspan='5'>Download stats are not available right now.</td></tr>";
    } );
}

// Splits a tag into a release line and a build number, or returns null for a
// tag with no version in it (old packaging tests). "v0.51.0" and "v0.51.00.1"
// are both line 0.51.00; "v0.51.01.5" is line 0.51.01, build 5.
function parseReleaseTag( tag ) {
  let match = tag.match( /^v?\.?(\d+(?:\.\d+)*)/ );

  if ( !match ) {
    return null;
  }

  let parts = match[ 1 ].split( "." ).map( ( part ) => parseInt( part, 10 ) );

  // Early tags such as "v42.2" and "v.45.1" dropped the leading zero.
  if ( parts.length == 2 && parts[ 0 ] != 0 ) {
    parts.unshift( 0 );
  }

  while ( parts.length < 3 ) {
    parts.push( 0 );
  }

  return {
    line: parts.slice( 0, 3 ),
    build: parts.length > 3 ? parts[ 3 ] : 0
  };
}

function compareVersionParts( first, second ) {
  for ( let i = 0; i < Math.max( first.length, second.length ); i++ ) {
    let difference = ( second[ i ] || 0 ) - ( first[ i ] || 0 );

    if ( difference != 0 ) {
      return difference;
    }
  }

  return 0;
}

// Shown without the leading "0.", to match how releases are named now (51.01).
function formatReleaseLine( line ) {
  let minor = String( line[ 2 ] ).padStart( 2, "0" );

  return line[ 0 ] == 0 ? line[ 1 ] + "." + minor : line.join( "." );
}

function releaseType( release ) {
  let label = release.name + " " + release.tag;

  if ( release.prerelease || /experimental/i.test( label ) ) {
    return "Experimental";
  } else if ( /core rules/i.test( label ) ) {
    return "Core Rules";
  } else if ( /\bcore\b/i.test( label ) ) {
    return "Core";
  } else if ( /milestone/i.test( label ) ) {
    return "Milestone";
  } else if ( /stable/i.test( label ) ) {
    return "Stable";
  } else if ( /release candidate|\brc[\d.]*\b/i.test( label ) ) {
    return "Release Candidate";
  } else if ( /development|snapshot/i.test( label ) ) {
    return "Development";
  }

  return "Release";
}

// Builds the release lines from every program's releases, newest first.
function groupReleaseLines( data, milestoneReleases ) {
  let lines = {};

  STATS_REPOS.forEach( ( repo ) => {
    ( data.repos[ repo ] || [] ).forEach( ( release ) => {
      let parsed = parseReleaseTag( release.tag );

      if ( !parsed ) {
        return;
      }

      let lineKey = parsed.line.join( "." );
      let line = lines[ lineKey ];

      if ( !line ) {
        line = { parts: parsed.line, totals: {}, builds: {}, latest: "" };
        lines[ lineKey ] = line;
      }

      line.totals[ repo ] = ( line.totals[ repo ] || 0 ) + release.downloads;
      line.latest = release.date > line.latest ? release.date : line.latest;

      let build = line.builds[ release.tag ];

      if ( !build ) {
        build = {
          tag: release.tag,
          number: parsed.build,
          date: release.date,
          type: releaseType( release ),
          milestone: milestoneReleases.indexOf( release.tag ) != -1,
          downloads: {}
        };
        line.builds[ release.tag ] = build;
      }

      build.downloads[ repo ] = release.downloads;
    } );
  } );

  let sorted = Object.values( lines );
  sorted.sort( ( first, second ) => compareVersionParts( first.parts, second.parts ) );

  sorted.forEach( ( line ) => {
    line.builds = Object.values( line.builds );
    line.builds.sort( ( first, second ) => second.number - first.number || ( second.date > first.date ? 1 : -1 ) );
  } );

  return sorted;
}

function makeBadge( text, className ) {
  let badge = document.createElement( "span" );
  badge.className = "badge " + className;
  badge.textContent = text;
  return badge;
}

function typeBadgeClass( type ) {
  switch ( type ) {
    case "Core":
    case "Core Rules":
      return "dl-stats-badge-core";
    case "Experimental":
      return "dl-stats-badge-experimental";
    default:
      return "text-bg-secondary";
  }
}

function addNumberCells( row, downloads ) {
  STATS_REPOS.forEach( ( repo ) => {
    let cell = row.insertCell();
    cell.className = "dl-stats-num";
    cell.textContent = downloads[ repo ] != null ? downloads[ repo ].toLocaleString() : "-";
  } );
}

// Summary for a line: each non-Experimental build type once, plus a count of
// Experimental builds, plus a Milestone badge if any build was one.
function fillLineSummary( cell, line ) {
  let types = [];
  let experimentalCount = 0;

  line.builds.forEach( ( build ) => {
    if ( build.type == "Experimental" ) {
      experimentalCount++;
    } else if ( types.indexOf( build.type ) == -1 ) {
      types.push( build.type );
    }
  } );

  types.forEach( ( type ) => cell.appendChild( makeBadge( type, typeBadgeClass( type ) ) ) );

  if ( experimentalCount > 0 ) {
    let label = experimentalCount == 1 ? "1 Experimental build" : experimentalCount + " Experimental builds";
    cell.appendChild( makeBadge( label, "dl-stats-badge-experimental" ) );
  }

  if ( line.builds.some( ( build ) => build.milestone ) ) {
    cell.appendChild( makeBadge( "Milestone", "dl-stats-badge-milestone" ) );
  }
}

function makeBuildTable( line ) {
  let table = document.createElement( "table" );
  table.className = "table table-sm dl-stats-builds";

  let head = table.createTHead().insertRow();
  [ "Build", "Type", "Released", "MegaMek", "MegaMekLab", "MekHQ" ].forEach( ( title, index ) => {
    let header = document.createElement( "th" );
    header.scope = "col";
    header.textContent = title;
    header.className = index > 2 ? "dl-stats-num" : "";
    head.appendChild( header );
  } );

  let body = table.createTBody();

  line.builds.forEach( ( build ) => {
    let row = body.insertRow();

    if ( build.milestone ) {
      row.className = "dl-stats-milestone";
    }

    row.insertCell().textContent = build.tag;

    let typeCell = row.insertCell();
    typeCell.appendChild( makeBadge( build.type, typeBadgeClass( build.type ) ) );

    if ( build.milestone && build.type != "Milestone" ) {
      typeCell.appendChild( makeBadge( "Milestone", "dl-stats-badge-milestone" ) );
    }

    row.insertCell().textContent = build.date;
    addNumberCells( row, build.downloads );
  } );

  return table;
}

function renderReleaseTable( table, data ) {
  let body = table.tBodies[ 0 ];
  let lines = groupReleaseLines( data, window.milestoneReleases || [] );
  let olderRows = [];

  body.innerHTML = "";

  lines.forEach( ( line, index ) => {
    let detailId = "release-line-" + line.parts.join( "-" );
    let row = body.insertRow();
    row.className = "dl-stats-line";

    let releaseCell = row.insertCell();
    let toggle = document.createElement( "button" );
    toggle.type = "button";
    toggle.className = "dl-stats-toggle";
    toggle.setAttribute( "aria-expanded", "false" );
    toggle.setAttribute( "aria-controls", detailId );
    toggle.innerHTML = "<i class='fas fa-chevron-right' aria-hidden='true'></i> ";
    toggle.appendChild( document.createTextNode( formatReleaseLine( line.parts ) ) );
    releaseCell.appendChild( toggle );

    fillLineSummary( row.insertCell(), line );
    addNumberCells( row, line.totals );

    let detailRow = body.insertRow();
    detailRow.className = "dl-stats-detail";
    detailRow.id = detailId;
    detailRow.hidden = true;

    let detailCell = detailRow.insertCell();
    detailCell.colSpan = 5;
    detailCell.appendChild( makeBuildTable( line ) );

    toggle.addEventListener( "click", () => {
      let isOpen = toggle.getAttribute( "aria-expanded" ) == "true";
      toggle.setAttribute( "aria-expanded", isOpen ? "false" : "true" );
      detailRow.hidden = isOpen;
    } );

    if ( index >= STATS_VISIBLE_LINES ) {
      row.hidden = true;
      olderRows.push( row );
    }
  } );

  let more = document.getElementById( "download-stats-more" );

  if ( more && olderRows.length > 0 ) {
    let button = more.querySelector( "button" );
    button.textContent = "Show " + olderRows.length + " older release lines";
    more.hidden = false;

    button.addEventListener( "click", () => {
      olderRows.forEach( ( row ) => { row.hidden = false; } );
      more.hidden = true;
    } );
  }

  let updated = document.getElementById( "download-stats-updated" );

  if ( updated && data.updated ) {
    updated.textContent = "Updated " + data.updated + ".";
  }
}

// Most recent days of daily deltas to plot, so the x-axis does not grow without bound.
const DOWNLOAD_CHART_DAYS = 14;

function loadDownloadChart() {
  let canvas = document.getElementById( "download-chart" );

  if ( !canvas || typeof Chart === "undefined" ) {
    return;
  }

  fetch( "/assets/data/download_history.json" )
    .then( ( response ) => response.json() )
    .then( ( history ) => renderDownloadChart( canvas, history ) )
    .catch( ( error ) => console.log( error ) );
}

function renderDownloadChart( canvas, history ) {
  let repos = history.repos || {};
  let colors = {
    megamek: "#d9534f",
    megameklab: "#5bc0de",
    mekhq: "#5cb85c"
  };

  // Build the sorted union of every snapshot date across all repos.
  let dateSet = {};
  Object.keys( repos ).forEach( ( repo ) => {
    ( repos[ repo ] || [] ).forEach( ( point ) => { dateSet[ point.date ] = true; } );
  } );
  let dates = Object.keys( dateSet ).sort();

  // A daily delta needs a previous snapshot, so the chart starts on day two.
  let allLabels = dates.slice( 1 );

  // Keep only the most recent days so the axis stays a fixed-width rolling window.
  let firstLabelIndex = Math.max( 0, allLabels.length - DOWNLOAD_CHART_DAYS );
  let labels = allLabels.slice( firstLabelIndex );

  let datasets = Object.keys( repos ).map( ( repo ) => {
    let totalsByDate = {};
    ( repos[ repo ] || [] ).forEach( ( point ) => { totalsByDate[ point.date ] = point.total; } );

    let data = labels.map( ( label, index ) => {
      let previousDate = dates[ firstLabelIndex + index ]; // the snapshot before labels[index]
      let current = totalsByDate[ label ];
      let previous = totalsByDate[ previousDate ];

      if ( current == null || previous == null ) {
        return null;
      }

      // Clamp at zero so a re-tagged release can never show a negative day.
      return Math.max( 0, current - previous );
    } );

    return {
      label: repo,
      data: data,
      borderColor: colors[ repo ] || "#888888",
      backgroundColor: colors[ repo ] || "#888888",
      tension: 0.2,
      spanGaps: true
    };
  } );

  new Chart( canvas, {
    type: "line",
    data: { labels: labels, datasets: datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Downloads per day" } }
      }
    }
  } );
}

function loadVersionCharts() {
  let charts = [
    { canvasId: "megamek-version-chart", repo: "megamek" },
    { canvasId: "megameklab-version-chart", repo: "megameklab" },
    { canvasId: "mekhq-version-chart", repo: "mekhq" }
  ];

  let hasCanvas = charts.some( ( chart ) => document.getElementById( chart.canvasId ) );
  if ( !hasCanvas || typeof Chart === "undefined" ) {
    return;
  }

  fetch( "/assets/data/download_history.json" )
    .then( ( response ) => response.json() )
    .then( ( history ) => {
      charts.forEach( ( chart ) => {
        let canvas = document.getElementById( chart.canvasId );
        if ( canvas ) {
          renderVersionChart( canvas, history, chart.repo );
        }
      } );
    } )
    .catch( ( error ) => console.log( error ) );
}

function renderVersionChart( canvas, history, repo ) {
  let series = ( history.repos || {} )[ repo ] || [];

  // A daily delta needs a previous snapshot, so two snapshots are required.
  if ( series.length < 2 ) {
    return;
  }

  let palette = [ "#d9534f", "#5bc0de", "#5cb85c", "#f0ad4e", "#9b59b6", "#34495e" ];

  let dates = series.map( ( point ) => point.date );
  let allLabels = dates.slice( 1 );

  // Keep only the most recent days so the axis stays a fixed-width rolling window.
  let firstLabelIndex = Math.max( 0, allLabels.length - DOWNLOAD_CHART_DAYS );
  let labels = allLabels.slice( firstLabelIndex );

  // Collect every version that appears across this repo's snapshots.
  let versionSet = {};
  series.forEach( ( point ) => {
    Object.keys( point.versions || {} ).forEach( ( version ) => { versionSet[ version ] = true; } );
  } );
  let versions = Object.keys( versionSet ).sort();

  // The snapshot follows the milestone plus the three newest releases, so a
  // version can appear late (a new release) or drop out and come back later.
  // Only the first of those two is safe to treat as starting from zero, so
  // record where each version is first seen.
  let firstSeenIndex = {};
  series.forEach( ( point, index ) => {
    Object.keys( point.versions || {} ).forEach( ( version ) => {
      if ( firstSeenIndex[ version ] == null ) {
        firstSeenIndex[ version ] = index;
      }
    } );
  } );

  let datasets = versions.map( ( version, index ) => {
    let data = labels.map( ( label, labelIndex ) => {
      let seriesIndex = firstLabelIndex + labelIndex; // labels[labelIndex] is series[seriesIndex + 1]
      let current = ( series[ seriesIndex + 1 ].versions || {} )[ version ];
      let previous = ( series[ seriesIndex ].versions || {} )[ version ];

      if ( current == null ) {
        return null;
      }

      if ( previous == null ) {
        // A brand new release has no day before it, so its first snapshot is
        // the whole first-day count. Without this it plots nothing at all on
        // launch day, which is when people most want to see it. A version that
        // merely dropped out of tracking and returned is left as a gap - its
        // stored figure is cumulative, so assuming zero would draw a spike of
        // the entire download history.
        let isFirstSnapshotForVersion = firstSeenIndex[ version ] === seriesIndex + 1;

        if ( !isFirstSnapshotForVersion ) {
          return null;
        }

        previous = 0;
      }

      // Clamp at zero so a re-tagged release can never show a negative day.
      return Math.max( 0, current - previous );
    } );

    return {
      label: version,
      data: data,
      borderColor: palette[ index % palette.length ],
      backgroundColor: palette[ index % palette.length ],
      tension: 0.2,
      spanGaps: true
    };
  } );

  new Chart( canvas, {
    type: "line",
    data: { labels: labels, datasets: datasets },
    options: {
      responsive: true,
      plugins: { legend: { position: "bottom" } },
      scales: {
        y: { beginAtZero: true, title: { display: true, text: "Downloads per day" } }
      }
    }
  } );
}

function loadXMLDoc() {
  let servers = document.getElementById( "servers" )

  if ( servers ) {
    fetch( 'https://api.megamek.org/servers.js' )
      .then( ( response ) => response.text() )
      .then( ( response ) => {
        servers.innerHTML = response;
      } )
  }
}
