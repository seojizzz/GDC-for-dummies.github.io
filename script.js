/* ============================================================
   GFD — script.js
   Handles: mobile sidebar, sidebar collapse, smooth scroll,
            search bar shortcuts, scroll-spy.

   NOTE: Nav active-state and header/nav/sidebar injection
   are handled by components/load.js, which runs after this
   file and has access to the fully-injected DOM.
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile sidebar open / close ────────────────────────── */
  /* These are initialised here for index.html (which has the
     sidebar inline). load.js re-runs them for all other pages
     after injecting the sidebar HTML.                         */

  function initSidebar() {
    const menuBtn       = document.querySelector('.menu-btn');
    const sidebar       = document.getElementById('sidebar');
    const overlay       = document.getElementById('sidebar-overlay');
    const collapseItems = document.querySelectorAll('.sidebar .collapse');

    if (!menuBtn || !sidebar || !overlay) return;

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

    menuBtn.addEventListener('click', () => {
      sidebar.classList.contains('open') ? closeSidebar() : openSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && sidebar.classList.contains('open')) closeSidebar();
    });

    collapseItems.forEach((item) => {
      const trigger = item.querySelector('span');
      if (!trigger) return;
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        collapseItems.forEach((other) => other.classList.remove('open'));
        item.classList.toggle('open', !isOpen);
      });
    });
  }

  initSidebar();

  /* ── Smooth scroll for in-page anchor links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* ── Search bar: focus shortcut (press "/") ─────────────── */
  const searchBar = document.querySelector('.search-bar');
  if (searchBar) {
    document.addEventListener('keydown', (e) => {
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA') return;
      if (e.key === '/') {
        e.preventDefault();
        searchBar.focus();
      }
    });

    searchBar.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchBar.value = '';
        searchBar.blur();
      }
    });
  }

  /* ── Scroll-spy: highlight in-page sidebar on scroll ────── */
  const pageSidebarLinks = document.querySelectorAll('.page-sidebar a[href^="#"]');

  if (pageSidebarLinks.length > 0) {
    const headings = Array.from(pageSidebarLinks)
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute('id');
          pageSidebarLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    headings.forEach((h) => observer.observe(h));
  }

})();