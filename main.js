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

});
