/* ============================================================
   GFD — components/load.js
   Injects shared header, nav, and sidebar into every page.

   ── DEPLOYMENT SETUP ──────────────────────────────────────
   If your site lives at the root of your domain:
     e.g. https://gfd.com/
     → Set BASE_PATH = ''

   If your site lives in a subfolder:
     e.g. https://yourname.github.io/gfd-guide/
     → Set BASE_PATH = '/gfd-guide'   (no trailing slash)

   This is the ONLY line you need to change before deploying.
   ============================================================ */

const BASE_PATH = '';  /* ← change this for deployment if needed */

(function () {
  'use strict';

  const b = BASE_PATH;

  const HEADER_HTML = `
    <header class="main-header">
      <div class="header-left">
        <div class="logo"><a href="${b}/index.html">GDC for Dummies</a></div>
      </div>
      <div class="header-right">
        <input type="text" placeholder="Search..." class="search-bar" aria-label="Search">
        <button class="menu-btn" aria-label="Open menu" aria-expanded="false">☰</button>
      </div>
    </header>`;

  const NAV_HTML = `
    <nav class="contents-bar" aria-label="Main navigation">
      <ul>
        <li class="dropdown sec-how">
          <a href="${b}/0-how-to-use/index.html" class="dropdown-title">How to use the GDC</a>
          <ul class="dropdown-menu">
            <li><a href="${b}/0-how-to-use/index.html">Introduction</a></li>
            <li><a href="${b}/0-how-to-use/hardware-tools.html">Hardware tools</a></li>
            <li><a href="${b}/0-how-to-use/pages-and-problems.html">Pages &amp; Problems</a></li>
          </ul>
        </li>
        <li class="dropdown sec-calc">
          <a href="${b}/1-calculator/index.html" class="dropdown-title">1. Calculator</a>
          <ul class="dropdown-menu">
            <li><a href="${b}/1-calculator/index.html">Overview</a></li>
            <li><a href="${b}/1-calculator/define.html">Define</a></li>
            <li><a href="${b}/1-calculator/numbers.html">Numbers</a></li>
            <li><a href="${b}/1-calculator/equations.html">Solving Equations</a></li>
            <li><a href="${b}/1-calculator/calculus.html">Calculus</a></li>
            <li><a href="${b}/1-calculator/probability.html">Probability</a></li>
            <li><a href="${b}/1-calculator/finance.html">Finance</a></li>
            <li><a href="${b}/1-calculator/matrices.html">Matrix &amp; Vector (Linear Algebra)</a></li>
            <li><a href="${b}/1-calculator/misc.html">Others</a></li>
          </ul>
        </li>
        <li class="dropdown sec-graph">
          <a href="${b}/2-graphing/index.html" class="dropdown-title">2. Graphing</a>
          <ul class="dropdown-menu">
            <li><a href="${b}/2-graphing/index.html">Overview</a></li>
            <li><a href="${b}/2-graphing/plotting.html">Plotting Graphs</a></li>
            <li><a href="${b}/2-graphing/navigation.html">Navigating the Plane</a></li>
            <li><a href="${b}/2-graphing/zoom.html">Zoom (advanced)</a></li>
            <li><a href="${b}/2-graphing/trace.html">Graph Trace</a></li>
            <li><a href="${b}/2-graphing/analyze.html">Analyze Graph</a></li>
            <li><a href="${b}/2-graphing/table.html">Split-Screen Table</a></li>
            <li><a href="${b}/2-graphing/misc.html">Others</a></li>
          </ul>
        </li>
        <li class="dropdown sec-stats">
          <a href="${b}/3-statistics/index.html" class="dropdown-title">3. Lists &amp; Statistics</a>
          <ul class="dropdown-menu">
            <li><a href="${b}/3-statistics/index.html">Overview</a></li>
            <li><a href="${b}/3-statistics/basics.html">Basic actions and operations</a></li>
            <li><a href="${b}/3-statistics/formulas.html">Cell Propagation and formulas</a></li>
            <li><a href="${b}/3-statistics/univariate.html">Univariate Statistics</a></li>
            <li><a href="${b}/3-statistics/bivariate-regression.html">Bivariate Statistics &amp; Regression</a></li>
            <li><a href="${b}/3-statistics/euler.html">Euler's Method &amp; iterative methods</a></li>
          </ul>
        </li>
        <li class="sec-other"><a href="${b}/4-cheatsheet/index.html">Cheat Sheet</a></li>
        <li class="dropdown sec-other">
          <a href="${b}/5-others/index.html" class="dropdown-title">Others</a>
          <ul class="dropdown-menu">
            <li><a href="${b}/5-others/index.html">Tips</a></li>
            <li><a href="${b}/5-others/abouttheauthor.html">About the Author</a></li>
          </ul>
        </li>
      </ul>
    </nav>`;

  const SIDEBAR_HTML = `
    <aside class="sidebar" id="sidebar" aria-label="Mobile navigation">
      <ul>
        <li><a href="${b}/index.html">Home</a></li>
        <li class="collapse sec-how">
          <span>How to use the GDC</span>
          <ul>
            <li><a href="${b}/0-how-to-use/index.html">Introduction</a></li>
            <li><a href="${b}/0-how-to-use/hardware-tools.html">Hardware tools</a></li>
            <li><a href="${b}/0-how-to-use/pages-and-problems.html">Pages &amp; Problems</a></li>
          </ul>
        </li>
        <li class="collapse sec-calc">
          <span>1. Calculator</span>
          <ul>
            <li><a href="${b}/1-calculator/index.html">Overview</a></li>
            <li><a href="${b}/1-calculator/define.html">Define</a></li>
            <li><a href="${b}/1-calculator/numbers.html">Numbers</a></li>
            <li><a href="${b}/1-calculator/equations.html">Solving Equations</a></li>
            <li><a href="${b}/1-calculator/calculus.html">Calculus</a></li>
            <li><a href="${b}/1-calculator/probability.html">Probability</a></li>
            <li><a href="${b}/1-calculator/finance.html">Finance</a></li>
            <li><a href="${b}/1-calculator/matrices.html">Matrix &amp; Vector (Linear Algebra)</a></li>
            <li><a href="${b}/1-calculator/misc.html">Others</a></li>
          </ul>
        </li>
        <li class="collapse sec-graph">
          <span>2. Graphing</span>
          <ul>
            <li><a href="${b}/2-graphing/index.html">Overview</a></li>
            <li><a href="${b}/2-graphing/plotting.html">Plotting Graphs</a></li>
            <li><a href="${b}/2-graphing/navigation.html">Navigating the Plane</a></li>
            <li><a href="${b}/2-graphing/zoom.html">Zoom (advanced)</a></li>
            <li><a href="${b}/2-graphing/trace.html">Graph Trace</a></li>
            <li><a href="${b}/2-graphing/analyze.html">Analyze Graph</a></li>
            <li><a href="${b}/2-graphing/table.html">Split-Screen Table</a></li>
            <li><a href="${b}/2-graphing/misc.html">Others</a></li>
          </ul>
        </li>
        <li class="collapse sec-stats">
          <span>3. Lists &amp; Statistics</span>
          <ul>
            <li><a href="${b}/3-statistics/index.html">Overview</a></li>
            <li><a href="${b}/3-statistics/basics.html">Basic actions and operations</a></li>
            <li><a href="${b}/3-statistics/formulas.html">Cell Propagation and formulas</a></li>
            <li><a href="${b}/3-statistics/univariate.html">Univariate Statistics</a></li>
            <li><a href="${b}/3-statistics/bivariate-regression.html">Bivariate Statistics &amp; Regression</a></li>
            <li><a href="${b}/3-statistics/euler.html">Euler's Method &amp; iterative methods</a></li>
          </ul>
        </li>
        <li class="sec-other"><a href="${b}/4-cheatsheet/index.html"><span>Cheat Sheet</span></a></li>
        <li class="collapse sec-other">
          <span>Others</span>
          <ul>
            <li><a href="${b}/5-others/index.html">Tips</a></li>
            <li><a href="${b}/5-others/abouttheauthor.html">About the Author</a></li>
          </ul>
        </li>
      </ul>
    </aside>`;

  function inject(id, html) {
    const placeholder = document.getElementById(id);
    if (!placeholder) return;
    placeholder.outerHTML = html;
  }

  inject('header-placeholder',  HEADER_HTML);
  inject('nav-placeholder',     NAV_HTML);
  inject('sidebar-placeholder', SIDEBAR_HTML);

  /* ── MathJax (LaTeX rendering) ───────────────────────────
     Loads MathJax 3 once per page so any content using
     \( ... \) for inline or \[ ... \] for display math
     will be rendered automatically.
  ─────────────────────────────────────────────────────── */
  if (!window.MathJax) {
    window.MathJax = {
      tex: {
        inlineMath:  [['\\(', '\\)']],
        displayMath: [['\\[', '\\]']],
        tags: 'ams',
      },
      options: {
        skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
      },
    };
    const mjScript = document.createElement('script');
    mjScript.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    mjScript.async = true;
    document.head.appendChild(mjScript);
  }

  /* ── Desktop nav dropdown — click toggle ─────────────────
     On touch devices (and for keyboard users) hovering doesn't
     work reliably. This makes a first click/tap open the
     dropdown; a second click on the same item navigates to it.
     Clicking anywhere else closes all dropdowns.
  ─────────────────────────────────────────────────────── */
  const dropdownItems = document.querySelectorAll('.contents-bar .dropdown');

  dropdownItems.forEach((item) => {
    const topLink = item.querySelector(':scope > a, :scope > .dropdown-title');
    if (!topLink) return;

    topLink.addEventListener('click', (e) => {
      const isOpen = item.classList.contains('open');

      // Close all other dropdowns
      dropdownItems.forEach((d) => d.classList.remove('open'));

      if (isOpen) {
        // Second click — let the link navigate normally
        return;
      }

      // On touch OR if the dropdown has sub-items, intercept first click
      // to show the menu instead of navigating
      const hasMenu = item.querySelector('.dropdown-menu');
      if (hasMenu) {
        e.preventDefault();
        item.classList.add('open');
      }
    });
  });

  // Close dropdowns when clicking outside the nav
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.contents-bar')) {
      dropdownItems.forEach((d) => d.classList.remove('open'));
    }
  });

  /* ── Re-initialise sidebar (now that DOM exists) ─────────── */
  const menuBtn       = document.querySelector('.menu-btn');
  const sidebar       = document.getElementById('sidebar');
  const overlay       = document.getElementById('sidebar-overlay');
  const collapseItems = document.querySelectorAll('.sidebar .collapse');

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.textContent = '✕';
    document.body.style.overflow = 'hidden';
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
    document.body.style.overflow = '';
  }

  if (menuBtn && sidebar && overlay) {
    menuBtn.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });
    overlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
    });
  }

  collapseItems.forEach((item) => {
    const trigger = item.querySelector('span');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      collapseItems.forEach((other) => other.classList.remove('open'));
      item.classList.toggle('open', !isOpen);
    });
  });

  /* ── Active nav highlighting ──────────────────────────────
     Runs here (not script.js) so it fires AFTER the nav is
     injected into the DOM. Marks the current section link
     as active and adds the sec-* class to <body> so the
     tinted background and accent colours apply automatically.
  ─────────────────────────────────────────────────────── */
  const currentPath = window.location.pathname;

  document.querySelectorAll('.contents-bar a').forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname;
    // Exact match OR current path starts with this section's folder
    // Guard against the root '/' matching everything
    const isRoot    = linkPath === '/' || linkPath === `${b}/` || linkPath.endsWith('/index.html') && linkPath.split('/').length <= 3;
    const isCurrent = currentPath === linkPath ||
      (!isRoot && currentPath.startsWith(linkPath.replace(/index\.html$/, '')));
    link.classList.toggle('active', isCurrent);
  });

  // Add sec-* class to <body> for tinted backgrounds on content pages
  const sectionMap = {
    '/0-how-to-use': 'sec-how',
    '/1-calculator':  'sec-calc',
    '/2-graphing':    'sec-graph',
    '/3-statistics':  'sec-stats',
    '/4-cheatsheet':  'sec-other',
    '/5-others':      'sec-other',
  };
  for (const [prefix, cls] of Object.entries(sectionMap)) {
    if (currentPath.includes(prefix)) {
      document.body.classList.add(cls);
      break;
    }
  }

  /* ── Search bar shortcuts (re-bind after header injection) ── */
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    document.addEventListener('keydown', (e) => {
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === '/') { e.preventDefault(); searchBar.focus(); }
    });
    searchBar.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') { searchBar.value = ''; searchBar.blur(); }
    });
  }

})();
