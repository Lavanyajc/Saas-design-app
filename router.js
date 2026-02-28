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

// Helper: Get Saved Jobs from LocalStorage
const getSavedJobs = () => {
    try {
        return JSON.parse(localStorage.getItem('saved_jobs')) || [];
    } catch {
        return [];
    }
};

// 4. Job Card Template Generator
const createJobCard = (job, isSaved) => `
    <article class="job-card" data-job-id="${job.id}">
        <div class="job-card__header">
            <div>
                <h3 class="job-card__title">${job.title}</h3>
                <div style="font-family: var(--font-sans); color: var(--color-text); margin-top: 4px; font-weight: var(--weight-medium);">${job.company}</div>
            </div>
            <div class="job-card__salary">${job.salaryRange}</div>
        </div>
        
        <div class="job-card__meta-group">
            <span class="job-card__meta-item">
                <svg class="job-card__meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                ${job.location} • ${job.mode}
            </span>
            <span class="job-card__meta-item">
                <svg class="job-card__meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                ${job.experience === "Fresher" ? "Fresher" : job.experience + " Yrs"}
            </span>
            <span class="job-card__meta-item badge-source" style="padding: 2px 6px; border-radius: 4px; font-size: 12px; margin-left: auto;">
                ${job.source}
            </span>
            <span class="job-card__meta-item" style="font-size: 12px;">
                ${job.postedDaysAgo === 0 ? "Today" : job.postedDaysAgo + " days ago"}
            </span>
        </div>

        <p class="job-card__desc">${job.description}</p>
        
        <div class="job-card__actions">
            <button class="btn btn-outline js-view-btn" data-id="${job.id}">View Details</button>
            <button class="btn btn-outline js-save-btn" data-id="${job.id}">${isSaved ? "Saved" : "Save Role"}</button>
            <a href="${job.applyUrl}" target="_blank" class="btn btn-primary" style="margin-left: auto;">Apply Now</a>
        </div>
    </article>
`;

// 5. Dashboard View (Filter + Jobs List)
const createDashboardView = () => {
    let jobsHtml = "";
    const savedIds = getSavedJobs();

    // Sort jobs-data by latest randomly or by default (since we mocked it, we can just render front to back)
    const sortedJobs = [...window.JOBS_DATA].sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);

    if (sortedJobs.length > 0) {
        jobsHtml = sortedJobs.map(job => createJobCard(job, savedIds.includes(job.id))).join('');
    } else {
        jobsHtml = `<div class="empty-state"><p class="empty-state__body">No realistic jobs found in dataset.</p></div>`;
    }

    return `
      <section class="dashboard-page" style="max-width: 800px; margin: 0 auto; width: 100%;">
        <div class="context-header">
            <h1 class="context-header__headline">Matched Opportunities</h1>
            <p class="context-header__subtext">Explore roles curated to your profile.</p>
        </div>
        
        <div class="filter-bar">
            <div class="filter-bar__search">
                <label class="filter-bar__label">Keyword</label>
                <input type="text" class="input js-filter-input" id="filter-keyword" placeholder="Search title or company...">
            </div>
            <div class="filter-bar__group">
                <label class="filter-bar__label">Location</label>
                <select class="select js-filter-input" id="filter-location">
                    <option value="">All Locations</option>
                    <option>Bengaluru</option><option>Hyderabad</option><option>Pune</option><option>Chennai</option><option>Gurugram</option><option>Noida</option><option>Mumbai</option>
                </select>
            </div>
            <div class="filter-bar__group">
                <label class="filter-bar__label">Mode</label>
                <select class="select js-filter-input" id="filter-mode">
                    <option value="">Any</option>
                    <option>Remote</option><option>Hybrid</option><option>Onsite</option>
                </select>
            </div>
            <div class="filter-bar__group">
                <label class="filter-bar__label">Experience</label>
                <select class="select js-filter-input" id="filter-exp">
                    <option value="">Any</option>
                    <option>Fresher</option><option>0-1</option><option>1-3</option><option>3-5</option>
                </select>
            </div>
             <div class="filter-bar__group">
                <label class="filter-bar__label">Sort</label>
                <select class="select js-filter-input" id="filter-sort">
                    <option value="latest">Latest</option>
                </select>
            </div>
        </div>

        <div id="jobs-container">
            ${jobsHtml}
        </div>
      </section>
    `;
};

// 6. Saved View
const createSavedView = () => {
    const savedIds = getSavedJobs();
    if (savedIds.length === 0) {
        return createEmptyStateView("Saved Jobs", "Jobs you bookmark will appear here for easy review. No data yet.");
    }

    const savedJobs = window.JOBS_DATA.filter(j => savedIds.includes(j.id));
    const jobsHtml = savedJobs.map(job => createJobCard(job, true)).join('');

    return `
      <section class="dashboard-page" style="max-width: 800px; margin: 0 auto; width: 100%;">
        <div class="context-header">
            <h1 class="context-header__headline">Saved Jobs</h1>
            <p class="context-header__subtext">Review and track your shortlisted roles.</p>
        </div>
        <div id="jobs-container">
            ${jobsHtml}
        </div>
      </section>
    `;
};

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
            appRoot.innerHTML = createDashboardView();
            initFilters();
        } else if (path === "/saved") {
            appRoot.innerHTML = createSavedView();
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

// Filtering Logic inside router.js
window.initFilters = () => {
    const inputs = document.querySelectorAll('.js-filter-input');
    inputs.forEach(input => input.addEventListener('input', runFilters));
};

window.runFilters = () => {
    const keyword = document.getElementById('filter-keyword').value.toLowerCase();
    const locationStr = document.getElementById('filter-location').value;
    const mode = document.getElementById('filter-mode').value;
    const exp = document.getElementById('filter-exp').value;

    let filtered = window.JOBS_DATA.filter(job => {
        const matchKey = job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword);
        const matchLoc = locationStr ? job.location === locationStr : true;
        const matchMode = mode ? job.mode === mode : true;
        const matchExp = exp ? job.experience === exp : true;
        return matchKey && matchLoc && matchMode && matchExp;
    });

    const container = document.getElementById('jobs-container');
    if (!container) return;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state" style="margin-top: 2rem;"><p class="empty-state__body">No jobs match your search.</p></div>`;
        return;
    }

    const savedIds = getSavedJobs();
    filtered.sort((a, b) => a.postedDaysAgo - b.postedDaysAgo);
    container.innerHTML = filtered.map(job => createJobCard(job, savedIds.includes(job.id))).join('');
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
