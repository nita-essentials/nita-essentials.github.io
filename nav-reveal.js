/* ============================================================
   NAV REVEAL: hide / show the nav based on cursor proximity,
   scroll direction, and inactivity.

   DESKTOP-ONLY by design. "Cursor proximity" only means something
   if there's an actual mouse cursor, so this whole behavior is
   gated behind isDesktop() below. On phones, tablets, or a narrow
   browser window, the nav just stays normally visible — fixed at
   the top, no hiding, no tricks.
   ============================================================

   Behavior (desktop only):
   - The nav reveals when the cursor comes within REVEAL_ZONE px
     of the top of the viewport ("gets near").
   - The nav hides when:
       a) the cursor moves away from that zone ("gets away"),
       b) the page is scrolled down,
       c) nothing happens at all (no mouse movement or scrolling)
          for IDLE_TIMEOUT ms ("remains inactive").
   - If prefers-reduced-motion is set, this whole behavior is
     skipped — the nav just stays visible, no motion at all.
   - If this script fails to load for any reason, the nav simply
     stays visible — it degrades to a normal fixed header rather
     than breaking.

   Tuning: adjust the constants below to change how close the
   cursor needs to get, how quickly it hides, the idle delay, or
   the desktop cutoff width.
   ============================================================ */
(function () {
  const nav = document.querySelector('nav');
  if (!nav) return;

  // Respect reduced-motion users entirely — don't attach any of this.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const navLinks = nav.querySelector('.nav-links');

  const REVEAL_ZONE       = 80;   // px from top of viewport that triggers a reveal
  const HIDE_DELAY        = 300;  // ms grace period before hiding after the cursor leaves the zone
  const IDLE_TIMEOUT      = 4500; // ms of zero activity (no mousemove/scroll) before auto-hiding
  const TOP_THRESHOLD     = 10;   // px — nav always stays visible right at the top of the page
  const DESKTOP_BREAKPOINT = 768; // matches this site's own CSS mobile breakpoint

  let hideTimer = null;
  let idleTimer = null;
  let lastScrollY = window.scrollY;

  // True only for an actual desktop: a mouse (fine pointer) AND a wide enough
  // viewport. A touchscreen, or a narrow/mobile-emulated browser window, fails
  // this check — and every hide action below short-circuits because of it.
  function isDesktop() {
    return window.matchMedia('(pointer: fine)').matches && window.innerWidth > DESKTOP_BREAKPOINT;
  }

  function isMobileMenuOpen() {
    return navLinks && navLinks.classList.contains('open');
  }

  function showNav() {
    clearTimeout(hideTimer);
    nav.classList.remove('nav-hidden');
  }

  function hideNav() {
    if (!isDesktop()) return;       // never hide on phones/tablets/narrow windows
    if (isMobileMenuOpen()) return; // never hide out from under an open mobile menu
    nav.classList.add('nav-hidden');
  }

  function scheduleHide(delay) {
    clearTimeout(hideTimer);
    hideTimer = setTimeout(hideNav, delay);
  }

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(hideNav, IDLE_TIMEOUT);
  }

  // Reveal on proximity to the top edge, hide shortly after the cursor leaves it.
  document.addEventListener('mousemove', (e) => {
    if (!isDesktop()) return;
    resetIdleTimer();
    if (e.clientY <= REVEAL_ZONE) {
      showNav();
    } else if (!isMobileMenuOpen()) {
      scheduleHide(HIDE_DELAY);
    }
  });

  // Hide on scroll-down, reveal on scroll-up, always show at the very top.
  window.addEventListener('scroll', () => {
    if (!isDesktop()) return;
    const y = window.scrollY;
    if (y <= TOP_THRESHOLD) {
      showNav();
    } else if (y > lastScrollY) {
      hideNav();
    } else if (y < lastScrollY) {
      showNav();
    }
    lastScrollY = y;
    resetIdleTimer();
  }, { passive: true });

  // If the browser window is resized down past the desktop breakpoint while
  // the nav happens to be hidden, bring it back immediately rather than
  // leaving it stuck off-screen on what is now a "mobile" layout.
  window.addEventListener('resize', () => {
    if (!isDesktop()) showNav();
  });

  resetIdleTimer();
})();