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

// Placeholder Template Generator
const createPlaceholder = (pageName) => `
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
        appRoot.innerHTML = createPlaceholder(route.name);
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
