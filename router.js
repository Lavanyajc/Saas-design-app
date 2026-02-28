/**
 * Job Notification App — Simple SPA Router
 * Handles client-side routing without full page reloads.
 */

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// Route Definitions
const routes = {
    "/": { title: "Home", name: "Job Notification App" },
    "/dashboard": { title: "Dashboard", name: "Dashboard" },
    "/saved": { title: "Saved Roles", name: "Saved Roles" },
    "/digest": { title: "Digest", name: "Digest" },
    "/settings": { title: "Settings", name: "Settings" },
    "/proof": { title: "Proof", name: "Design System Proof" }
};

// --- Route UI Templates ---

// 1. Landing Page (Home)
const createHomeView = () => `
  <section class="placeholder-page" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; text-align: center;">
    <h1 class="context-header__headline" style="font-size: var(--text-4xl); margin-bottom: var(--space-3);">Stop Missing The Right Jobs.</h1>
    <p class="context-header__subtext" style="font-size: var(--text-xl); margin-bottom: var(--space-5);">Precision-matched job discovery delivered daily at 9AM.</p>
    <a href="/settings" class="btn btn-primary btn-lg" data-link>Start Tracking</a>
  </section>
`;

// 2. Settings (Placeholder Form)
const createSettingsView = () => `
  <section class="placeholder-page" style="max-width: 600px;">
    <h1 class="context-header__headline">Settings</h1>
    <p class="context-header__subtext" style="margin-bottom: var(--space-5);">Configure your tracking preferences.</p>
    
    <div class="card">
        <div class="card__body" style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="form-group">
                <label class="form-label form-label--required">Role keywords</label>
                <input type="text" class="input" placeholder="e.g. Frontend Engineer, React, UI" />
                <span class="form-hint">Comma separated list of titles or skills.</span>
            </div>
            
            <div class="form-group">
                <label class="form-label">Preferred locations</label>
                <input type="text" class="input" placeholder="e.g. New York, London" />
            </div>

            <div class="form-group">
                <label class="form-label form-label--required">Mode</label>
                <select class="select">
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Onsite</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Experience level</label>
                <select class="select">
                    <option>Junior</option>
                    <option>Mid-level</option>
                    <option>Senior</option>
                    <option>Lead / Staff</option>
                </select>
            </div>

            <div style="margin-top: var(--space-2);">
                <button class="btn btn-primary" type="button">Save Preferences</button>
            </div>
        </div>
    </div>
  </section>
`;

// 3. Reusable Empty State for Dashboard/Saved/Digest
const createEmptyStateView = (title, subtext) => `
  <section class="placeholder-page" style="display: flex; align-items: center; justify-content: center; min-height: 50vh;">
    <div class="empty-state">
        <svg class="empty-state__icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
        </svg>
        <h2 class="empty-state__title">${title}</h2>
        <p class="empty-state__body">${subtext}</p>
    </div>
  </section>
`;

const createGenericPlaceholder = (pageName) => `
  <section class="placeholder-page" aria-labelledby="page-title">
    <h1 id="page-title" class="placeholder-page__title">${pageName}</h1>
    <p class="placeholder-page__subtext">This section will be built in the next step.</p>
  </section>
`;

const create404 = () => `
  <section class="placeholder-page" aria-labelledby="page-title">
    <h1 id="page-title" class="placeholder-page__title">Page Not Found</h1>
    <p class="placeholder-page__subtext">The page you are looking for does not exist.</p>
  </section>
`;

const router = async () => {
    // Use pathname + handle GH Pages subfolder (e.g. /Saas-design-app/dashboard)
    // For local development it will just be /dashboard
    let path = location.pathname;

    // If hosted on GH pages under /Saas-design-app/, strip the prefix for route matching
    const repoPrefix = '/Saas-design-app';
    if (path.startsWith(repoPrefix)) {
        path = path.replace(repoPrefix, '') || '/';
    }

    let route = routes[path];
    const appRoot = document.getElementById("app-root");

    if (route) {
        document.title = `${route.title} — Job Notify`;

        // Render specific UI based on route
        if (path === "/") {
            appRoot.innerHTML = createHomeView();
        } else if (path === "/settings") {
            appRoot.innerHTML = createSettingsView();
        } else if (path === "/dashboard") {
            appRoot.innerHTML = createEmptyStateView("No jobs yet", "In the next step, you will load a realistic dataset.");
        } else if (path === "/saved") {
            appRoot.innerHTML = createEmptyStateView("Saved Jobs", "Jobs you bookmark will appear here for easy review. No data yet.");
        } else if (path === "/digest") {
            appRoot.innerHTML = createEmptyStateView("Daily Digest", "Your highly curated daily summary of matching roles will appear here.");
        } else {
            appRoot.innerHTML = createGenericPlaceholder(route.name);
        }

    } else {
        document.title = `Not Found — Job Notify`;
        appRoot.innerHTML = create404();
    }

    updateActiveLinks(path);
};

// Update active states on navigation links
const updateActiveLinks = (currentPath) => {
    document.querySelectorAll('[data-link]').forEach(link => {
        let href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('nav-link--active');
            link.setAttribute('aria-current', 'page');
        } else {
            link.classList.remove('nav-link--active');
            link.removeAttribute('aria-current');
        }
    });

    // Close mobile menu if open
    const mobilePanel = document.getElementById('mobile-menu');
    if (mobilePanel && !mobilePanel.hidden) {
        mobilePanel.hidden = true;
        document.getElementById('mobile-menu-btn').setAttribute('aria-expanded', 'false');
    }
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    // Intercept all clicks on elements with data-link
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            // Ensure we don't navigate to same exact URL or cause flicker
            const href = e.target.getAttribute("href");

            // Compute expected full path resolving GH Pages prefix if active
            const repoPrefix = '/Saas-design-app';
            let currentLocalPath = location.pathname;
            if (currentLocalPath.startsWith(repoPrefix)) {
                currentLocalPath = currentLocalPath.replace(repoPrefix, '') || '/';
            }

            if (href !== currentLocalPath) {
                // Build the correct URL for history.pushState taking into account the GH prefix
                const base = location.pathname.startsWith(repoPrefix) ? repoPrefix : '';
                const fullUrl = base + (href === '/' ? '' : href);
                navigateTo(fullUrl || '/');
            }
        }
    });

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
            mobileBtn.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.hidden = isExpanded;
        });
    }

    // Initial render
    router();
});
