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
    "/proof": { title: "Proof", name: "Design System Proof" },
    "/jt/07-test": { title: "Built-In Testing", name: "Self-Verification" },
    "/jt/08-ship": { title: "Ship", name: "Ship Application" }
};

// --- Preference & Match Engine ---
window.getPreferences = () => {
    try {
        const p = JSON.parse(localStorage.getItem('jobTrackerPreferences'));
        if (p) return p;
    } catch { }
    return {
        roleKeywords: "",
        preferredLocations: [],
        preferredMode: [],
        experienceLevel: "",
        skills: "",
        minMatchScore: 40
    };
};

window.savePreferences = (prefs) => {
    localStorage.setItem('jobTrackerPreferences', JSON.stringify(prefs));
};

window.getJobStatus = () => {
    try {
        return JSON.parse(localStorage.getItem('jobTrackerStatus')) || {};
    } catch {
        return {};
    }
};

window.getTestStatus = () => {
    try {
        return JSON.parse(localStorage.getItem('jobTrackerTestStatus')) || {};
    } catch {
        return {};
    }
};

window.calculateMatchScore = (job, prefs) => {
    let score = 0;

    // 1. Title Keywords (+25)
    if (prefs.roleKeywords) {
        const keywords = prefs.roleKeywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
        const titleLower = job.title.toLowerCase();
        if (keywords.some(k => titleLower.includes(k))) score += 25;
    }

    // 2. Description Keywords (+15)
    if (prefs.roleKeywords) {
        const keywords = prefs.roleKeywords.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
        const descLower = job.description.toLowerCase();
        if (keywords.some(k => descLower.includes(k))) score += 15;
    }

    // 3. Location (+15)
    if (prefs.preferredLocations && prefs.preferredLocations.length > 0) {
        if (prefs.preferredLocations.includes(job.location)) score += 15;
    }

    // 4. Mode (+10)
    if (prefs.preferredMode && prefs.preferredMode.length > 0) {
        if (prefs.preferredMode.includes(job.mode)) score += 10;
    }

    // 5. Experience (+10)
    if (prefs.experienceLevel && prefs.experienceLevel === job.experience) {
        score += 10;
    }

    // 6. Skills (+15)
    if (prefs.skills) {
        const userSkills = prefs.skills.split(',').map(k => k.trim().toLowerCase()).filter(k => k);
        const jobSkills = job.skills.map(s => s.toLowerCase());
        if (userSkills.some(s => jobSkills.includes(s))) score += 15;
    }

    // 7. Recency (+5)
    if (job.postedDaysAgo <= 2) score += 5;

    // 8. Source (+5)
    if (job.source === 'LinkedIn') score += 5;

    return Math.min(score, 100);
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

// 2. Settings (Placeholder Form) -> Now Functional
const createSettingsView = () => {
    const p = getPreferences();
    return `
  <section class="placeholder-page" style="max-width: 600px;">
    <h1 class="context-header__headline">Settings</h1>
    <p class="context-header__subtext" style="margin-bottom: var(--space-5);">Configure your tracking preferences.</p>
    
    <div class="card">
        <form id="settings-form" class="card__body" style="display: flex; flex-direction: column; gap: var(--space-4);">
            <div class="form-group">
                <label class="form-label form-label--required">Role keywords</label>
                <input type="text" id="pref-role" class="input" placeholder="e.g. Frontend Engineer, React, UI" value="${p.roleKeywords || ''}" />
                <span class="form-hint">Comma separated list of titles or skills.</span>
            </div>
            
            <div class="form-group">
                <label class="form-label">Preferred locations</label>
                <select id="pref-locations" class="select" multiple size="4">
                    <option value="Bengaluru" ${p.preferredLocations.includes('Bengaluru') ? 'selected' : ''}>Bengaluru</option>
                    <option value="Hyderabad" ${p.preferredLocations.includes('Hyderabad') ? 'selected' : ''}>Hyderabad</option>
                    <option value="Pune" ${p.preferredLocations.includes('Pune') ? 'selected' : ''}>Pune</option>
                    <option value="Chennai" ${p.preferredLocations.includes('Chennai') ? 'selected' : ''}>Chennai</option>
                    <option value="Gurugram" ${p.preferredLocations.includes('Gurugram') ? 'selected' : ''}>Gurugram</option>
                    <option value="Noida" ${p.preferredLocations.includes('Noida') ? 'selected' : ''}>Noida</option>
                    <option value="Mumbai" ${p.preferredLocations.includes('Mumbai') ? 'selected' : ''}>Mumbai</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label form-label--required">Mode</label>
                <div style="display:flex; gap:12px; margin-top:4px;">
                    <label><input type="checkbox" class="pref-mode" value="Remote" ${p.preferredMode.includes('Remote') ? 'checked' : ''}> Remote</label>
                    <label><input type="checkbox" class="pref-mode" value="Hybrid" ${p.preferredMode.includes('Hybrid') ? 'checked' : ''}> Hybrid</label>
                    <label><input type="checkbox" class="pref-mode" value="Onsite" ${p.preferredMode.includes('Onsite') ? 'checked' : ''}> Onsite</label>
                </div>
            </div>

            <div class="form-group">
                <label class="form-label">Experience level</label>
                <select id="pref-exp" class="select">
                    <option value="">Any</option>
                    <option value="Fresher" ${p.experienceLevel === 'Fresher' ? 'selected' : ''}>Fresher</option>
                    <option value="0-1" ${p.experienceLevel === '0-1' ? 'selected' : ''}>0-1 Years</option>
                    <option value="1-3" ${p.experienceLevel === '1-3' ? 'selected' : ''}>1-3 Years</option>
                    <option value="3-5" ${p.experienceLevel === '3-5' ? 'selected' : ''}>3-5 Years</option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label">Skills</label>
                <input type="text" id="pref-skills" class="input" placeholder="e.g. React, Node, Python" value="${p.skills || ''}" />
                <span class="form-hint">Comma separated technologies.</span>
            </div>

             <div class="form-group">
                <label class="form-label">Minimum Match Score Threshold</label>
                <div style="display:flex; align-items:center; gap:16px;">
                    <input type="range" id="pref-min-score" min="0" max="100" value="${p.minMatchScore || 40}" style="flex:1;">
                    <span id="pref-min-val" style="font-family:var(--font-sans); font-weight:var(--weight-bold);">${p.minMatchScore || 40}</span>
                </div>
            </div>

            <div style="margin-top: var(--space-2);">
                <button class="btn btn-primary" type="submit" id="save-prefs-btn">Save Preferences</button>
            </div>
            <div id="prefs-alert" style="display:none; color:var(--color-success); font-family:var(--font-sans); font-size:var(--text-sm); margin-top:8px;">Preferences saved successfully!</div>
        </form>
    </div>
  </section>
`;
};

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
const createJobCard = (job, isSaved, scoreObj = null) => {
    let scoreBadge = '';
    if (scoreObj !== null) {
        let colorClass = 'badge-score--grey';
        if (scoreObj >= 80) colorClass = 'badge-score--green';
        else if (scoreObj >= 60) colorClass = 'badge-score--amber';
        else if (scoreObj >= 40) colorClass = 'badge-score--neutral';
        scoreBadge = `<span class="badge-score ${colorClass}">${scoreObj}% Match</span>`;
    }

    const statuses = getJobStatus();
    const currentStatus = statuses[job.id] || "Not Applied";

    return `
    <article class="job-card" data-job-id="${job.id}">
        <div class="job-card__header">
            <div>
                <h3 class="job-card__title">${job.title}</h3>
                <div style="font-family: var(--font-sans); color: var(--color-text); margin-top: 4px; font-weight: var(--weight-medium);">${job.company}</div>
            </div>
            <div style="display:flex; flex-direction:column; align-items:flex-end; gap:8px;">
                ${scoreBadge}
                <div class="job-card__salary">${job.salaryRange}</div>
            </div>
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
            <select class="status-select js-status-select" data-id="${job.id}" data-status="${currentStatus}">
                <option value="Not Applied" ${currentStatus === "Not Applied" ? "selected" : ""}>Not Applied</option>
                <option value="Applied" ${currentStatus === "Applied" ? "selected" : ""}>Applied</option>
                <option value="Rejected" ${currentStatus === "Rejected" ? "selected" : ""}>Rejected</option>
                <option value="Selected" ${currentStatus === "Selected" ? "selected" : ""}>Selected</option>
            </select>
            <button class="btn btn-outline js-view-btn" data-id="${job.id}" style="margin-left:auto;">View Details</button>
            <button class="btn btn-outline js-save-btn" data-id="${job.id}">${isSaved ? "Saved" : "Save Role"}</button>
            <a href="${job.applyUrl}" target="_blank" class="btn btn-primary">Apply Now</a>
        </div>
    </article>
`;
};

// 5. Dashboard View (Filter + Jobs List)
const createDashboardView = () => {
    let jobsHtml = "";
    const savedIds = getSavedJobs();
    const prefs = getPreferences();

    // Check if preferences exist (if any keyword/skill or mode is selected)
    const hasPrefs = prefs.roleKeywords || Math.max(prefs.preferredLocations.length, prefs.preferredMode.length) > 0 || prefs.skills;

    let bannerHtml = "";
    if (!hasPrefs) {
        bannerHtml = `
            <div class="dashboard-banner">
                <span><strong>No preferences detected.</strong> Set your preferences to activate intelligent matching.</span>
                <a href="/settings" data-link class="btn btn-outline" style="background:#fff; color:#991B1B; border-color:#F87171;">Set Preferences</a>
            </div>
        `;
    }

    // Map all jobs to inject score
    const scoredJobs = window.JOBS_DATA.map(job => {
        return { ...job, matchScore: hasPrefs ? calculateMatchScore(job, prefs) : null };
    });

    // Sort scoredJobs by latest randomly or by score if prefs exist
    const sortedJobs = scoredJobs.sort((a, b) => {
        if (hasPrefs && b.matchScore !== a.matchScore) {
            return b.matchScore - a.matchScore;
        }
        return a.postedDaysAgo - b.postedDaysAgo;
    });

    if (sortedJobs.length > 0) {
        jobsHtml = sortedJobs.map(job => createJobCard(job, savedIds.includes(job.id), job.matchScore)).join('');
    } else {
        jobsHtml = `<div class="empty-state"><p class="empty-state__body">No realistic jobs found in dataset.</p></div>`;
    }

    return `
      <section class="dashboard-page" style="max-width: 800px; margin: 0 auto; width: 100%;">
        ${bannerHtml}
        <div class="context-header" style="display:flex; justify-content:space-between; align-items:flex-end;">
            <div>
                <h1 class="context-header__headline">Matched Opportunities</h1>
                <p class="context-header__subtext">Explore roles curated to your profile.</p>
            </div>
            ${hasPrefs ? `
                <div class="toggle-container">
                    <label style="cursor:pointer; display:flex; align-items:center; gap:8px;">
                        <input type="checkbox" id="filter-threshold-toggle" class="js-filter-input">
                        Show only jobs above my threshold (${prefs.minMatchScore}%)
                    </label>
                </div>
            ` : ''}
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
                <label class="filter-bar__label">Status</label>
                <select class="select js-filter-input" id="filter-status">
                    <option value="">All</option>
                    <option>Not Applied</option>
                    <option>Applied</option>
                    <option>Rejected</option>
                    <option>Selected</option>
                </select>
            </div>
             <div class="filter-bar__group">
                <label class="filter-bar__label">Sort</label>
                <select class="select js-filter-input" id="filter-sort">
                    <option value="score">Match Score</option>
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

// 7. Digest View (Simulated Notification List)
const createDigestView = () => {
    const statuses = getJobStatus();
    const activeIds = Object.keys(statuses).filter(id => statuses[id] !== "Not Applied");

    if (activeIds.length === 0) {
        return createEmptyStateView("Daily Digest", "Your highly curated daily summary of matching roles will appear here.");
    }

    const updates = activeIds.map(id => {
        const job = window.JOBS_DATA.find(j => j.id === id);
        if (!job) return '';
        const stat = statuses[id];
        let c = '#4B5563';
        if (stat === 'Applied') c = '#1D4ED8';
        if (stat === 'Rejected') c = '#B91C1C';
        if (stat === 'Selected') c = '#15803D';

        return `
        <div style="border:1px solid #E0DED9; border-radius:4px; padding:16px; margin-bottom:12px; display:flex; justify-content:space-between; align-items:center; background:#fff;">
            <div>
                <h4 style="font-family:var(--font-sans); font-size:16px; margin:0 0 4px 0;">${job.title}</h4>
                <div style="font-family:var(--font-sans); color:var(--color-text-muted); font-size:14px;">${job.company}</div>
            </div>
            <div style="text-align:right;">
                <span class="badge-score" style="color:${c}; border:1px solid ${c}; background:transparent;">${stat}</span>
                <div style="font-family:var(--font-sans); font-size:12px; color:var(--color-text-muted); margin-top:8px;">Today</div>
            </div>
        </div>`;
    }).join('');

    return `
      <section class="dashboard-page" style="max-width: 600px; margin: 0 auto; width: 100%;">
        <h1 class="context-header__headline" style="margin-bottom:24px;">Recent Status Updates</h1>
        <div>${updates}</div>
      </section>
    `;
};

// 8. Test Checklist View
const createTestChecklistView = () => {
    const tests = [
        { id: "t1", label: "Preferences persist after refresh", tip: "Set prefs directly in settings page and refresh" },
        { id: "t2", label: "Match score calculates correctly", tip: "Review dashboard badges against prefs logic" },
        { id: "t3", label: "\"Show only matches\" toggle works", tip: "Ensure threshold switch hides non-matches" },
        { id: "t4", label: "Save job persists after refresh", tip: "Mark saved and reload /saved" },
        { id: "t5", label: "Apply opens in new tab", tip: "Check target='_blank' on Apply button" },
        { id: "t6", label: "Status update persists after refresh", tip: "Select 'Applied', refresh dashboard" },
        { id: "t7", label: "Status filter works correctly", tip: "Filter by 'Applied' and verify AND logic" },
        { id: "t8", label: "Digest generates top 10 by score", tip: "Status updates reflect in Digest accurately" },
        { id: "t9", label: "Digest persists for the day", tip: "Reload Digest page" },
        { id: "t10", label: "No console errors on main pages", tip: "View inspector globally" }
    ];

    const state = getTestStatus();
    let passedCount = 0;

    const checklistHtml = tests.map(t => {
        const isChecked = state[t.id] === true;
        if (isChecked) passedCount++;
        return `
        <label class="test-item">
            <input type="checkbox" class="test-item__checkbox js-test-check" data-id="${t.id}" ${isChecked ? 'checked' : ''}>
            <div class="test-item__label">
                <div>${t.label}</div>
                <span class="test-item__tooltip">${t.tip}</span>
            </div>
        </label>
        `;
    }).join('');

    return `
      <section class="placeholder-page" style="max-width: 600px;">
        <h1 class="context-header__headline">Self-Verification</h1>
        <p class="context-header__subtext" style="color:var(--color-text); font-weight:var(--weight-bold); font-size:var(--text-lg); margin-top:12px;">Tests Passed: <span id="test-passed-count">${passedCount}</span> / 10</p>
        ${passedCount < 10 ? `<p style="color:var(--color-warning); font-family:var(--font-sans); font-size:var(--text-sm); margin-bottom:24px;">Resolve all issues before shipping.</p>` : ``}
        
        <div class="test-checklist">
            ${checklistHtml}
        </div>
        
        <div style="margin-top:32px;">
            <button class="btn btn-outline" id="reset-tests-btn">Reset Test Status</button>
        </div>
      </section>
    `;
};

// 9. Ship View
const createShipView = () => `
  <section class="placeholder-page" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:50vh; text-align:center;">
    <div style="background:#E2F2E9; color:#1E6B3F; padding:24px; border-radius:60px; margin-bottom:24px;">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="48" height="48"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <h1 class="context-header__headline" style="font-size:32px;">Ready to Ship</h1>
    <p class="context-header__subtext" style="font-size:18px;">All deterministic checks passed. You are ready to deploy.</p>
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
            appRoot.innerHTML = createDashboardView();
            initFilters();
        } else if (path === "/saved") {
            appRoot.innerHTML = createSavedView();
        } else if (path === "/digest") {
            appRoot.innerHTML = createDigestView();
        } else if (path === "/jt/07-test") {
            appRoot.innerHTML = createTestChecklistView();
        } else if (path === "/jt/08-ship") {
            const state = getTestStatus();
            if (Object.keys(state).filter(k => state[k]).length < 10) {
                appRoot.innerHTML = createEmptyStateView("Ship Locked", "Complete all 10 tests on /jt/07-test before shipping.");
            } else {
                appRoot.innerHTML = createShipView();
            }
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
    const sort = document.getElementById('filter-sort').value;
    const filterStatusNode = document.getElementById('filter-status');
    const filterStatus = filterStatusNode ? filterStatusNode.value : '';

    // Parse toggle if it exists
    const toggleEl = document.getElementById('filter-threshold-toggle');
    const thresholdOn = toggleEl ? toggleEl.checked : false;

    const prefs = getPreferences();
    const hasPrefs = prefs.roleKeywords || Math.max(prefs.preferredLocations.length, prefs.preferredMode.length) > 0 || prefs.skills;
    const jobStatuses = getJobStatus();

    let filtered = window.JOBS_DATA.map(job => {
        return { ...job, matchScore: hasPrefs ? calculateMatchScore(job, prefs) : null };
    }).filter(job => {
        const matchKey = job.title.toLowerCase().includes(keyword) || job.company.toLowerCase().includes(keyword);
        const matchLoc = locationStr ? job.location === locationStr : true;
        const matchMode = mode ? job.mode === mode : true;
        const matchExp = exp ? job.experience === exp : true;

        let matchThreshold = true;
        if (thresholdOn && hasPrefs) {
            matchThreshold = job.matchScore >= prefs.minMatchScore;
        }

        let mStatus = true;
        if (filterStatus && filterStatus !== "All") {
            const actualStatus = jobStatuses[job.id] || "Not Applied";
            mStatus = (actualStatus === filterStatus);
        }

        return matchKey && matchLoc && matchMode && matchExp && matchThreshold && mStatus;
    });

    const container = document.getElementById('jobs-container');
    if (!container) return;

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-state" style="margin-top: 2rem;">
            <p class="empty-state__body" style="color:var(--color-text);">No roles match your criteria.</p>
            <p class="empty-state__body" style="font-size:var(--text-sm);">Adjust filters or lower threshold.</p>
        </div>`;
        return;
    }

    const savedIds = getSavedJobs();
    filtered.sort((a, b) => {
        if (sort === 'score' && hasPrefs) {
            return b.matchScore - a.matchScore;
        }
        return a.postedDaysAgo - b.postedDaysAgo;
    });
    container.innerHTML = filtered.map(job => createJobCard(job, savedIds.includes(job.id), job.matchScore)).join('');
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
