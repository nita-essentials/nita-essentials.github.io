/**
 * notices.js — NITA Essentials
 * ─────────────────────────────────────────────────────────────────
 * To add a new notice, add an object to the NOTICES array below.
 * Each notice needs:
 *   id          — unique string; change it to re-show to all users
 *   condition   — function returning true = show, false = skip
 *   title       — heading text
 *   message     — body text
 *   buttonText  — dismiss button label
 *
 * Contributors: only edit the NOTICES array. Do not touch the
 * rendering logic below unless you know what you're doing.
 * ─────────────────────────────────────────────────────────────────
 */

const NOTICES = [
  {
    id: "mobile-notice-v1",
    condition: () => window.innerWidth <= 768,
    title: "Better on Desktop",
    message:
      "This site is optimized for larger screens. For the best experience, open NITA Essentials on a laptop or desktop.",
    buttonText: "Continue Anyway",
  },

  // ── Add future announcements below ──────────────────────────────
  // Example:
  // {
  //   id: "new-sports-section-v1",
  //   condition: () => true,           // show to everyone
  //   title: "Sports section updated!",
  //   message: "New badminton and gym gear recommendations have been added.",
  //   buttonText: "Check it out",
  // },
  // ────────────────────────────────────────────────────────────────
];

/* ─── Styles ──────────────────────────────────────────────────── */
const NOTICE_CSS = `
  #nita-notice-overlay {
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    padding: 1.25rem;
    backdrop-filter: blur(2px);
    animation: noticeOverlayIn 0.2s ease;
  }

  @keyframes noticeOverlayIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  #nita-notice-box {
    background: #ffffff;
    border-radius: 14px;
    padding: 2rem 1.75rem;
    max-width: 380px;
    width: 100%;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
    animation: noticeBoxIn 0.25s ease;
    border-top: 4px solid #0ea5e9;
  }

  @keyframes noticeBoxIn {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0);    }
  }

  #nita-notice-icon {
    font-size: 2.25rem;
    margin-bottom: 0.875rem;
    display: block;
  }

  #nita-notice-title {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.1875rem;
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.02em;
    margin-bottom: 0.625rem;
  }

  #nita-notice-message {
    font-size: 0.9rem;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 1.5rem;
  }

  #nita-notice-btn {
    display: inline-block;
    background: #0ea5e9;
    color: #ffffff;
    border: none;
    padding: 0.6rem 1.5rem;
    border-radius: 8px;
    font-size: 0.9375rem;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    transition: background 0.15s, transform 0.15s;
  }

  #nita-notice-btn:hover {
    background: #0284c7;
    transform: translateY(-1px);
  }
`;

/* ─── Renderer ────────────────────────────────────────────────── */
function renderNotice(notice) {
  // Inject styles
  const style = document.createElement("style");
  style.textContent = NOTICE_CSS;
  document.head.appendChild(style);

  // Build markup
  const overlay = document.createElement("div");
  overlay.id = "nita-notice-overlay";
  overlay.innerHTML = `
    <div id="nita-notice-box">
      <span id="nita-notice-icon">🖥️</span>
      <h3 id="nita-notice-title">${notice.title}</h3>
      <p id="nita-notice-message">${notice.message}</p>
      <button id="nita-notice-btn">${notice.buttonText}</button>
    </div>
  `;
  document.body.appendChild(overlay);

  document.getElementById("nita-notice-btn").addEventListener("click", () => {
    localStorage.setItem(notice.id, "dismissed");
    overlay.remove();
  });
}

/* ─── Init: run through all notices on page load ─────────────── */
document.addEventListener("DOMContentLoaded", () => {
  for (const notice of NOTICES) {
    const alreadySeen = localStorage.getItem(notice.id) === "dismissed";
    if (!alreadySeen && notice.condition()) {
      renderNotice(notice);
      break; // show only one notice at a time
    }
  }
});
