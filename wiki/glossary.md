---
layout: guide
title: "MekHQ Glossary"
description: "Definitions for key MekHQ terms and concepts"
guide_section: glossary
progress: 100
---

<div class="alert alert-info d-flex align-items-center mb-4" role="alert" style="background: rgba(0, 123, 255, 0.1); border: 1px solid rgba(0, 123, 255, 0.3);">
  <i class="fas fa-book fa-2x me-3" style="color: #007bff;"></i>
  <div style="color: var(--text-color);">
    <strong>In-Game Glossary:</strong> MekHQ includes a comprehensive glossary accessible via <strong>Help &gt; Glossary</strong> in the application.
  </div>
</div>

<section id="categories">
  <h2><i class="fas fa-tags"></i> Quick Links by Category</h2>

  <div class="row g-4">
    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 250, 205, 0.2);">
        <div class="card-header" style="background: rgba(255, 250, 205, 0.1); color: #fffacd;">
          <i class="fas fa-chess"></i> StratCon
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="list-unstyled mb-0">
            <li><a href="#stratcon" class="glossary-link">StratCon</a></li>
            <li><a href="#area_of_operations" class="glossary-link">Area of Operations</a></li>
            <li><a href="#combat_roles" class="glossary-link">Combat Roles</a></li>
            <li><a href="#combat_teams" class="glossary-link">Combat Teams</a></li>
            <li><a href="#strategic_objectives" class="glossary-link">Strategic Objectives</a></li>
            <li><a href="#support_points" class="glossary-link">Support Points</a></li>
            <li><a href="#contract_victory_points" class="glossary-link">Contract Victory Points</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 250, 205, 0.2);">
        <div class="card-header" style="background: rgba(255, 250, 205, 0.1); color: #fffacd;">
          <i class="fas fa-users"></i> Personnel
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="list-unstyled mb-0">
            <li><a href="#fatigue" class="glossary-link">Fatigue</a></li>
            <li><a href="#morale" class="glossary-link">Morale</a></li>
            <li><a href="#turnover" class="glossary-link">Turnover</a></li>
            <li><a href="#edge" class="glossary-link">Edge</a></li>
            <li><a href="#experience_rating" class="glossary-link">Experience Rating</a></li>
            <li><a href="#hr_strain" class="glossary-link">HR Strain</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 250, 205, 0.2);">
        <div class="card-header" style="background: rgba(255, 250, 205, 0.1); color: #fffacd;">
          <i class="fas fa-cogs"></i> Logistics
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="list-unstyled mb-0">
            <li><a href="#maintenance" class="glossary-link">Maintenance</a></li>
            <li><a href="#parts_availability" class="glossary-link">Parts Availability</a></li>
            <li><a href="#delivery_times" class="glossary-link">Delivery Times</a></li>
            <li><a href="#tech_time" class="glossary-link">Technician Time</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="col-md-6">
      <div class="card h-100" style="background: var(--card-color); border: 1px solid rgba(255, 250, 205, 0.2);">
        <div class="card-header" style="background: rgba(255, 250, 205, 0.1); color: #fffacd;">
          <i class="fas fa-file-contract"></i> Contracts
        </div>
        <div class="card-body" style="color: var(--text-color);">
          <ul class="list-unstyled mb-0">
            <li><a href="#force_reputation" class="glossary-link">Force Reputation</a></li>
            <li><a href="#challenge_skulls" class="glossary-link">Challenge Skulls</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="search">
  <h2><i class="fas fa-search"></i> Search</h2>
  <div class="mb-4">
    <div class="input-group">
      <span class="input-group-text" style="background: var(--card-color); border-color: rgba(255, 250, 205, 0.3); color: var(--text-color);">
        <i class="fas fa-search"></i>
      </span>
      <input type="text" id="glossary-search" class="form-control" placeholder="Search terms..."
             style="background: var(--card-color); border-color: rgba(255, 250, 205, 0.3); color: var(--text-color);">
    </div>
  </div>
</section>

<section id="terms">
  <h2><i class="fas fa-list-alt"></i> Terms</h2>

  <div id="glossary-list">
    {% for term in site.data.glossary %}
    <div class="glossary-entry" id="{{ term.id }}" data-title="{{ term.title | downcase }}" data-definition="{{ term.short | downcase }} {{ term.definition | strip_html | downcase | escape }}">
      <div class="glossary-term">
        <h3>{{ term.title }}</h3>
        <a href="#{{ term.id }}" class="glossary-anchor" title="Link to this term"><i class="fas fa-link"></i></a>
      </div>
      <div class="glossary-definition">
        {{ term.definition }}
      </div>
    </div>
    {% endfor %}
  </div>

  <div id="no-results" class="guide-callout guide-callout-warning" style="display: none;">
    <div class="callout-title"><i class="fas fa-search"></i> No Results</div>
    <p class="mb-0">No terms match your search. Try a different keyword.</p>
  </div>
</section>

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('glossary-search');
  const entries = document.querySelectorAll('.glossary-entry');
  const noResults = document.getElementById('no-results');

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    let visibleCount = 0;

    entries.forEach(function(entry) {
      const title = entry.dataset.title;
      const definition = entry.dataset.definition;
      const matches = title.includes(query) || definition.includes(query);

      entry.style.display = matches ? 'block' : 'none';
      if (matches) visibleCount++;
    });

    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  });

  // Smooth scroll to anchor
  document.querySelectorAll('.glossary-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.classList.add('glossary-highlight');
        setTimeout(() => target.classList.remove('glossary-highlight'), 2000);
      }
    });
  });
});
</script>
