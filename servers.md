---
layout: page
title: Servers
---

The table below shows currently running servers that have registered their game. You may be able to use this information to find or identify a game. 

<div id='servers'>
</div>

<script type='text/javascript'>
$(document).ready(function() {
setInterval(function() {
  $("#servers").load('https://api.megamek.org/servers.js');
}, 1000);
});
</script>
