/* Get correct download button by OS */
var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
  var downloader = document.getElementsByClassName('downloader');

  for (var element of downloader) {
    var version = element.dataset.version;
    var url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/mekhq-" + version + ".tar.gz";
    var platform = "<i class='fab fa-linux'></i> Linux/Unix";

    if (navigator.userAgent.indexOf("Win") != -1) {
      url = "https://github.com/MegaMek/mekhq/releases/download/v" + version + "/mekhq-windows-" + version + ".zip";
      platform = "<i class='fab fa-windows'></i> Windows";
    } else if (navigator.userAgent.indexOf("Mac OS X") != -1) {
      platform = "<i class='fab fa-apple'></i> Mac OSX";
    }

    updateDownloadLinks(element, version, url, platform);
  }

  loadDownloadStats("megamek-download-stats", "megamek");
  loadDownloadStats("megameklab-download-stats", "megameklab");
  loadDownloadStats("mekhq-download-stats", "mekhq");

  setInterval(function () { loadXMLDoc(); }, 1000);
});

function updateDownloadLinks(element, version, url, platform) {
  var downloadLink = element.getElementsByClassName('download_link')[0];
  var versionText = element.getElementsByClassName('version_display')[0];
  var platformText = element.getElementsByClassName('version_platform')[0];

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

function loadXMLDoc() {
  var servers = document.getElementById("servers")
  if (servers) {
    fetch('https://api.megamek.org/servers.js')
      .then((response) => response.text())
      .then((response) => {
        servers.innerHTML = response;
      })
  }
}
