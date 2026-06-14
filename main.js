/* ============================================
   ATRIUM CLUB — MAIN LOGIC
   Rendert Events, öffnet Detail-Modal & Poster-Lightbox.
   Eventdaten kommen aus events.js
   ============================================ */

(function(){
  "use strict";

  // ---------- Helpers ----------
  function sortByDate(events, ascending){
    return [...events].sort((a,b)=>{
      return ascending
        ? a.dateSort.localeCompare(b.dateSort)
        : b.dateSort.localeCompare(a.dateSort);
    });
  }

  function escapeHtml(str){
    const div = document.createElement("div");
    div.textContent = str ?? "";
    return div.innerHTML;
  }

  // ---------- Render: Next Event ----------
  function renderNextEvent(){
    const container = document.getElementById("nextEventCard");
    const upcoming = sortByDate(UPCOMING_EVENTS, true);
    const next = upcoming[0];

    if(!next){
      container.innerHTML = `<div class="empty-state">Aktuell ist kein neues Event geplant — schau bald wieder vorbei oder folge uns auf Social Media.</div>`;
      return;
    }

    container.innerHTML = `
      <div class="next-card-poster">
        <img src="${escapeHtml(next.poster)}" alt="Poster ${escapeHtml(next.title)}">
      </div>
      <div class="next-card-info">
        <p class="next-card-tag">${escapeHtml(next.tag)}</p>
        <h3 class="next-card-title">${escapeHtml(next.title)}</h3>
        <div class="next-card-meta">
          <span><strong>${escapeHtml(next.date)}</strong></span>
          <span>${escapeHtml(next.time)}</span>
          <span>${escapeHtml(next.dj)}</span>
        </div>
        <p class="next-card-desc">${escapeHtml(next.description)}</p>
        <span class="next-card-link">Alle Infos ansehen →</span>
      </div>
    `;
    container.setAttribute("role","button");
    container.setAttribute("tabindex","0");
    container.addEventListener("click", ()=> openEventModal(next, false));
    container.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openEventModal(next, false); }
    });
  }

  // ---------- Render: Upcoming Events Grid ----------
  function renderEventsGrid(){
    const grid = document.getElementById("eventsGrid");
    const upcoming = sortByDate(UPCOMING_EVENTS, true);

    if(upcoming.length === 0){
      grid.innerHTML = `<div class="empty-state">Aktuell stehen keine weiteren Events fest.</div>`;
      return;
    }

    grid.innerHTML = upcoming.map(ev => `
      <article class="event-card" data-id="${escapeHtml(ev.id)}" role="button" tabindex="0" aria-label="${escapeHtml(ev.title)} – Details anzeigen">
        <div class="event-card-poster">
          <img src="${escapeHtml(ev.poster)}" alt="Poster ${escapeHtml(ev.title)}">
          <button class="event-card-zoom" data-zoom-id="${escapeHtml(ev.id)}" aria-label="Poster von ${escapeHtml(ev.title)} vergrößern">⤢</button>
        </div>
        <div class="event-card-body">
          <p class="event-card-tag">${escapeHtml(ev.tag)}</p>
          <h3 class="event-card-title">${escapeHtml(ev.title)}</h3>
          <p class="event-card-meta">${escapeHtml(ev.date)} · ${escapeHtml(ev.time)}</p>
        </div>
      </article>
    `).join("");

    bindCardEvents(grid, upcoming, false);
  }

  // ---------- Render: History — compact tile grid ----------
  const HISTORY_INITIAL = 4; // how many to show before "show all"

  function renderHistory(){
    const grid = document.getElementById("historyGrid");
    const footer = document.getElementById("historyFooter");
    const toggleBtn = document.getElementById("historyToggle");
    const countEl = document.getElementById("historyCount");
    const past = sortByDate(PAST_EVENTS, false);

    if(past.length === 0){
      grid.innerHTML = `<div class="empty-state">Noch keine vergangenen Events erfasst.</div>`;
      return;
    }

    grid.innerHTML = past.map((ev, i) => `
      <article
        class="history-tile${i >= HISTORY_INITIAL ? " hidden" : ""}"
        data-id="${escapeHtml(ev.id)}"
        role="button"
        tabindex="0"
        aria-label="${escapeHtml(ev.title)} – Details anzeigen"
      >
        <div class="history-tile-poster">
          <img src="${escapeHtml(ev.poster)}" alt="Poster ${escapeHtml(ev.title)}" loading="lazy">
        </div>
        <div class="history-tile-info">
          <h3 class="history-tile-title">${escapeHtml(ev.title)}</h3>
          <p class="history-tile-meta">${escapeHtml(ev.date)} · ${escapeHtml(ev.dj)}</p>
        </div>
      </article>
    `).join("");

    // Show/hide toggle only if there are more than the initial count
    if(past.length > HISTORY_INITIAL){
      const hidden = past.length - HISTORY_INITIAL;
      countEl.textContent = `+ ${hidden} weitere`;
      footer.style.display = "flex";
      let expanded = false;
      toggleBtn.addEventListener("click", ()=>{
        expanded = !expanded;
        grid.querySelectorAll(".history-tile.hidden").forEach(el => {
          if(expanded) el.classList.remove("hidden");
          // Don't re-hide on collapse — leave expanded (UX: show once, stay visible)
        });
        toggleBtn.textContent = "Alle angezeigt ✓";
        toggleBtn.disabled = true;
        toggleBtn.style.opacity = "0.5";
        countEl.textContent = `${past.length} Events`;
      });
    }

    bindTileEvents(grid, past);
  }

  function bindTileEvents(grid, events){
    grid.querySelectorAll(".history-tile[data-id]").forEach(tile => {
      const ev = events.find(e => e.id === tile.dataset.id);
      if(!ev) return;
      tile.addEventListener("click", ()=> openEventModal(ev, true));
      tile.addEventListener("keydown", (e)=>{
        if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openEventModal(ev, true); }
      });
    });
  }

  // ---------- Bind click/keyboard events to cards ----------
  function bindCardEvents(container, events, isPast){
    container.querySelectorAll("[data-id]").forEach(card => {
      const ev = events.find(e => e.id === card.dataset.id);
      if(!ev) return;

      card.addEventListener("click", (e)=>{
        // ignore if zoom button was clicked
        if(e.target.closest("[data-zoom-id]")) return;
        openEventModal(ev, isPast);
      });
      card.addEventListener("keydown", (e)=>{
        if(e.target.closest("[data-zoom-id]")) return;
        if(e.key === "Enter" || e.key === " "){
          e.preventDefault();
          openEventModal(ev, isPast);
        }
      });
    });

    container.querySelectorAll("[data-zoom-id]").forEach(btn=>{
      const ev = events.find(e => e.id === btn.dataset.zoomId);
      if(!ev) return;
      btn.addEventListener("click", (e)=>{
        e.stopPropagation();
        openLightbox(ev.poster, ev.title);
      });
    });
  }

  // ---------- Event Detail Modal ----------
  const eventModal = document.getElementById("eventModal");
  const modalBody = document.getElementById("modalBody");

  function openEventModal(ev, isPast){
    modalBody.innerHTML = `
      <img class="modal-poster" src="${escapeHtml(ev.poster)}" alt="Poster ${escapeHtml(ev.title)}" data-modal-poster>
      <div class="modal-info">
        <p class="modal-tag">${escapeHtml(ev.tag)}</p>
        <h2 class="modal-title">${escapeHtml(ev.title)}</h2>
        <div class="modal-meta">
          <div><strong>Datum</strong><span>${escapeHtml(ev.date)}</span></div>
          <div><strong>Uhrzeit</strong><span>${escapeHtml(ev.time)}</span></div>
          <div><strong>Line-up</strong><span>${escapeHtml(ev.dj)}</span></div>
        </div>
        <p class="modal-desc">${escapeHtml(ev.description)}</p>
        ${
          isPast
            ? `<span class="modal-past-badge">Vergangenes Event</span>`
            : (ev.ticketLink
                ? `<a href="${escapeHtml(ev.ticketLink)}" target="_blank" rel="noopener" class="btn btn-primary">Tickets / Facebook-Event</a>`
                : `<a href="mailto:mail@AtriumClub.at?subject=${encodeURIComponent("Frage zu " + ev.title)}" class="btn btn-ghost">Frage zum Event stellen</a>`)
        }
      </div>
    `;

    modalBody.querySelector("[data-modal-poster]").addEventListener("click", ()=>{
      openLightbox(ev.poster, ev.title);
    });

    eventModal.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    eventModal.querySelector(".modal-close").focus();
  }

  function closeEventModal(){
    eventModal.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  // ---------- Lightbox ----------
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");

  function openLightbox(src, alt){
    lightboxImg.src = src;
    lightboxImg.alt = "Poster " + (alt || "");
    lightbox.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  }

  function closeLightbox(){
    lightbox.setAttribute("aria-hidden","true");
    // keep event modal scroll-lock if it's open
    if(eventModal.getAttribute("aria-hidden") === "false"){
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    lightboxImg.src = "";
  }

  // ---------- Close handlers (backdrop, button, Escape) ----------
  document.querySelectorAll("[data-close]").forEach(el=>{
    el.addEventListener("click", (e)=>{
      const modal = e.target.closest(".modal, .lightbox");
      if(modal === lightbox) closeLightbox();
      else closeEventModal();
    });
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key !== "Escape") return;
    if(lightbox.getAttribute("aria-hidden") === "false") closeLightbox();
    else if(eventModal.getAttribute("aria-hidden") === "false") closeEventModal();
  });

  // ---------- Init ----------
  renderNextEvent();
  renderEventsGrid();
  renderHistory();

})();
