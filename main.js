/**
 * Job Notification App — Design System
 * Minimal JS: clipboard copy + demo state toggles only.
 * No animations, no transitions controlled from JS.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     COPY-TO-CLIPBOARD
     Works on any element with [data-copy-target]
     whose value is the ID of an element to copy text from.
  ---------------------------------------------------------- */
  document.querySelectorAll('[data-copy-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-copy-target');
      const source = document.getElementById(targetId);
      if (!source) return;

      const text = source.innerText || source.value || '';
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied';
        btn.setAttribute('aria-label', 'Copied to clipboard');
        setTimeout(() => {
          btn.textContent = original;
          btn.setAttribute('aria-label', 'Copy to clipboard');
        }, 2000);
      }).catch(() => {
        // Fallback for environments without clipboard API
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = 'Copied';
        setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
      });
    });
  });

  /* ----------------------------------------------------------
     STATUS BADGE CYCLE
     Clicking the badge in the top bar cycles through states.
  ---------------------------------------------------------- */
  const badge = document.getElementById('status-badge');
  if (badge) {
    const states = [
      { label: 'Not Started', mod: 'badge--neutral' },
      { label: 'In Progress', mod: 'badge--warning' },
      { label: 'Shipped', mod: 'badge--success' },
    ];
    let current = 0;

    badge.addEventListener('click', () => {
      // Remove all state modifiers
      states.forEach(s => badge.classList.remove(s.mod));
      // Advance
      current = (current + 1) % states.length;
      badge.classList.add(states[current].mod);
      badge.textContent = states[current].label;
    });
  }

  /* ----------------------------------------------------------
     DEMO STATE TOGGLES (Error / Empty showcase in gallery)
  ---------------------------------------------------------- */
  document.querySelectorAll('[data-demo-toggle]').forEach(btn => {
    const targetId = btn.getAttribute('data-demo-toggle');
    const target = document.getElementById(targetId);
    if (!target) return;

    btn.addEventListener('click', () => {
      const isHidden = target.hidden;
      target.hidden = !isHidden;
      btn.textContent = isHidden ? 'Hide State' : 'Show State';
    });
  });

  /* ----------------------------------------------------------
     PROOF FOOTER — CHECKBOX TOGGLE (for live demo only)
  ---------------------------------------------------------- */
  document.querySelectorAll('.proof-item__checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const item = cb.closest('.proof-item');
      if (!item) return;
      item.classList.toggle('proof-item--checked', cb.checked);
    });
  });

  /* ----------------------------------------------------------
     JOB BOARD ACTIONS (Phase 4 & 5)
  ---------------------------------------------------------- */
  document.body.addEventListener("click", e => {
    // 1. SAVE BUTTON LOGIC
    if (e.target.matches('.js-save-btn')) {
      const btn = e.target;
      const jobId = btn.getAttribute('data-id');
      if (!jobId) return;

      let saved = [];
      try {
        saved = JSON.parse(localStorage.getItem('saved_jobs')) || [];
      } catch (err) { }

      if (saved.includes(jobId)) {
        saved = saved.filter(id => id !== jobId);
        btn.textContent = "Save Role";
      } else {
        saved.push(jobId);
        btn.textContent = "Saved";
      }
      localStorage.setItem('saved_jobs', JSON.stringify(saved));

      if (location.pathname.endsWith('/saved')) {
        if (window.router) window.router();
      }
    }

    // 2. VIEW DETAILS LOGIC (MODAL)
    if (e.target.matches('.js-view-btn')) {
      const jobId = e.target.getAttribute('data-id');
      const job = window.JOBS_DATA.find(j => j.id === jobId);
      if (job) openJobModal(job);
    }

    // 3. CLOSE MODAL
    if (e.target.matches('.js-close-modal') || e.target.matches('.modal-overlay')) {
      if (e.target.closest('.modal-content') && !e.target.matches('.js-close-modal')) return;
      closeModal();
    }

    // 4. RESET TESTS
    if (e.target.matches('#reset-tests-btn')) {
      localStorage.removeItem('jobTrackerTestStatus');
      if (window.router) window.router();
      showToast("Test status has been reset.");
    }
  });

  // STATUS & TEST CHECKLIST CHANGE EVENTS
  document.body.addEventListener("change", e => {
    // Job Status Select Change
    if (e.target.matches('.js-status-select')) {
      const jobId = e.target.getAttribute('data-id');
      const newStatus = e.target.value;
      e.target.setAttribute('data-status', newStatus); // update color styling hook

      let statuses = {};
      try { statuses = JSON.parse(localStorage.getItem('jobTrackerStatus')) || {}; } catch (err) { }
      statuses[jobId] = newStatus;
      localStorage.setItem('jobTrackerStatus', JSON.stringify(statuses));

      if (newStatus !== "Not Applied") {
        showToast(`Status updated: ${newStatus}`);
      }

      if (window.runFilters && document.getElementById('filter-keyword')) {
        window.runFilters();
      }
    }

    // Test Checklist Toggle
    if (e.target.matches('.js-test-check')) {
      const testId = e.target.getAttribute('data-id');
      const isChecked = e.target.checked;

      let testState = {};
      try { testState = JSON.parse(localStorage.getItem('jobTrackerTestStatus')) || {}; } catch (err) { }
      testState[testId] = isChecked;
      localStorage.setItem('jobTrackerTestStatus', JSON.stringify(testState));

      // Live count update
      const countEl = document.getElementById('test-passed-count');
      if (countEl) {
        const passed = Object.values(testState).filter(val => val === true).length;
        countEl.textContent = passed;
      }
    }
  });

  // 4. SETTINGS FORM SUBMIT
  document.body.addEventListener("submit", e => {
    if (e.target.matches('#settings-form')) {
      e.preventDefault();
      const roleKeywords = document.getElementById('pref-role').value;

      const locSelect = document.getElementById('pref-locations');
      const preferredLocations = Array.from(locSelect.selectedOptions).map(opt => opt.value);

      const modeCheckboxes = document.querySelectorAll('.pref-mode:checked');
      const preferredMode = Array.from(modeCheckboxes).map(cb => cb.value);

      const experienceLevel = document.getElementById('pref-exp').value;
      const skills = document.getElementById('pref-skills').value;

      const minScoreInput = document.getElementById('pref-min-score');
      const minMatchScore = minScoreInput ? parseInt(minScoreInput.value, 10) : 40;

      const prefs = { roleKeywords, preferredLocations, preferredMode, experienceLevel, skills, minMatchScore };

      if (window.savePreferences) {
        window.savePreferences(prefs);
        const alertEl = document.getElementById('prefs-alert');
        if (alertEl) {
          alertEl.style.display = "block";
          setTimeout(() => alertEl.style.display = "none", 3000);
        }
      }
    }
  });

  // 5. SLIDER UPDATE LISTENER
  document.body.addEventListener("input", e => {
    if (e.target.matches('#pref-min-score')) {
      const valEl = document.getElementById('pref-min-val');
      if (valEl) valEl.textContent = e.target.value;
    }
  });

});

function openJobModal(job) {
  const root = document.getElementById('modal-root');
  if (!root) return;

  const skillsHtml = job.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');

  let isSaved = false;
  try {
    const saved = JSON.parse(localStorage.getItem('saved_jobs')) || [];
    isSaved = saved.includes(job.id);
  } catch { }

  const html = `
        <div class="modal-overlay">
            <div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <button class="modal-close js-close-modal" aria-label="Close modal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div class="modal-body">
                    <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                        <div>
                            <h2 id="modal-title" class="job-card__title" style="margin-bottom: 8px;">${job.title}</h2>
                            <p style="font-family: var(--font-sans); color: var(--color-text-muted); font-weight: var(--weight-medium);">${job.company} • ${job.location}</p>
                        </div>
                        <div class="job-card__salary">${job.salaryRange}</div>
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <span style="font-family: var(--font-sans); color: var(--color-text-muted); font-size: var(--text-sm); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Job Description</span>
                        <p style="font-family: var(--font-sans); color: var(--color-text); line-height: var(--leading-relaxed); margin-top: 12px; white-space: pre-wrap;">${job.description}</p>
                    </div>

                     <div style="margin-bottom: 32px;">
                        <span style="font-family: var(--font-sans); color: var(--color-text-muted); font-size: var(--text-sm); text-transform: uppercase; letter-spacing: var(--tracking-wide);">Required Skills</span>
                        <div class="skills-list">
                            ${skillsHtml}
                        </div>
                    </div>

                    <div style="display: flex; gap: var(--space-3); border-top: 1px solid var(--color-border); padding-top: var(--space-4);">
                         <a href="${job.applyUrl}" target="_blank" class="btn btn-primary">Apply on ${job.source}</a>
                         <button class="btn btn-outline js-save-btn" data-id="${job.id}">${isSaved ? "Saved" : "Save Role"}</button>
                    </div>
                </div>
            </div>
        </div>
    `;

  root.innerHTML = html;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const root = document.getElementById('modal-root');
  if (root) root.innerHTML = "";
  document.body.style.overflow = "";
}

function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');

  if (window.toastTimeout) clearTimeout(window.toastTimeout);
  window.toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
