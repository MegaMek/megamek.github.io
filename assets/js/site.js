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

  loadDownloadStats( "megamek-download-stats", "megamek" );
  loadDownloadStats( "megameklab-download-stats", "megameklab" );
  loadDownloadStats( "mekhq-download-stats", "mekhq" );

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

function loadDownloadStats( elementId, repoName ) {
  let element = document.getElementById( elementId );

  if ( element ) {
    fetch( "https://api.github.com/repos/megamek/" + repoName + "/releases" )
      .then( ( response ) => response.json() )
      .then( ( response ) => addStatsToElement( element, response ) )
      .catch( ( error ) => console.log( error ) );
  }
}

function addStatsToElement( element, releases ) {
  while ( element.lastChild ) { element.removeChild( element.lastChild ) };

  releases.forEach( ( release ) => {
    let child = document.createElement( "li" );
    let text = "<strong>" + release.tag_name + "</strong>";
    let totalDownloads = 0;

    release.assets.forEach( ( asset ) => {
      totalDownloads += asset.download_count;
    } )

    text += ": <span class='float-right'>" + totalDownloads + "</span>";

    child.className = "list-group-item";
    child.innerHTML = text;
    element.appendChild( child );
  } );
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

  let datasets = versions.map( ( version, index ) => {
    let data = labels.map( ( label, labelIndex ) => {
      let seriesIndex = firstLabelIndex + labelIndex; // labels[labelIndex] is series[seriesIndex + 1]
      let current = ( series[ seriesIndex + 1 ].versions || {} )[ version ];
      let previous = ( series[ seriesIndex ].versions || {} )[ version ];

      if ( current == null || previous == null ) {
        return null;
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
