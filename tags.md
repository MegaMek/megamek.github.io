---
layout: page
title: Tags 

---

<div class="container">
	<div class="post">
		<h3>Tags</h3>
		<ul>
			{% for tag in site.tags %}
			<li><a href="{{ '/tag/' | append:tag[0] | relative_url }}">{{ tag[0] }}</a></li>
			{% endfor %}
		</ul>
	</div>
</div>
