/* Get correct download button by OS */
jQuery(document).ready(function () {
  var downloader = document.getElementById('downloader');

  if (downloader) {
    var version = downloader.dataset.version;
    var url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/mekhq-" + version + ".tar.gz";
    var platform = "<i class='fab fa-linux'></i> Linux/Unix";

    if (navigator.appVersion.indexOf("Win") != -1) {
      url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/mekhq-windows-" + version + ".zip";
      platform = "<i class='fab fa-windows'></i> Windows";
    } else if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      platform = "<i class='fab fa-apple'></i> Mac OSX";
    }

    updateDownloadLinks(version, url, platform);
  }

  loadDownloadStats("megamek-download-stats", "megamek");
  loadDownloadStats("megameklab-download-stats", "megameklab");
  loadDownloadStats("mekhq-download-stats", "mekhq");
});

function updateDownloadLinks(version, url, platform) {
  var downloadLink = document.getElementById('download_link');
  var versionText = document.getElementById('version_display');
  var platformText = document.getElementById('version_platform');

  downloadLink.href = url;
  versionText.innerHTML = version;
  platformText.innerHTML = platform;
}

function isDarkModeEnabled() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark'); //add this
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light'); //add this
  }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
} else {
  if (isDarkModeEnabled()) {
    toggleSwitch.checked = true
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function loadDownloadStats(elementId, repoName) {
  var element = document.getElementById(elementId);

  if (element) {
    fetch("https://api.github.com/repos/megamek/" + repoName + "/releases")
      .then((response) => response.json())
      .then((response) => addStatsToElement(element, response))
      .catch((error) => console.log(error));
  }
}

function addStatsToElement(element, releases) {
  while (element.lastChild) { element.removeChild(element.lastChild) };

  releases.forEach((release) => {
    var child = document.createElement("li");
    var text = "<strong>" + release.tag_name + "</strong>";
    var totalDownloads = 0;

    release.assets.forEach((asset) => {
      totalDownloads += asset.download_count;
    })

    text += ": <span class='float-right'>" + totalDownloads + "</span>";

    child.className = "list-group-item";
    child.innerHTML = text;
    element.appendChild(child);
  });
}
