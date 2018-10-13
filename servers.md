---
layout: page
title: Servers
---

The table below shows currently running servers that have registered their game. You may be able to use this information to find or identify a game.

<div id='servers'>
</div>

<script type='text/javascript'>
var xmlhttp;

function loadXMLDoc()
{
  if (xmlhttp == null) { xmlhttp = new XMLHttpRequest(); }

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      document.getElementById("servers").innerHTML = xmlhttp.responseText;
    }
  }

  xmlhttp.open("GET" ,"https://api.megamek.org/servers.js", true);
  xmlhttp.send();
}

setInterval(function() { loadXMLDoc(); }, 1000);
</script>
