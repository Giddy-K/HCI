/* ============================================
   iTax System Prototype - Shared JavaScript
   ============================================ */

// ============================================
// DUMMY DATA
// ============================================

const USERS = [
  {
    pin: "A012345678X",
    name: "John Doe",
    phone: "+254 700 000 000",
    email: "john.doe@example.com",
    accountType: "personal",
    businesses: [],
  },
  {
    pin: "P051234567A",
    name: "Grace Wanjiru",
    phone: "+254 722 456 789",
    email: "grace.w@example.com",
    accountType: "personal",
    businesses: [
      { name: "Wanjiru Accounting Services", pin: "P051234500C" },
      { name: "Client: Safari Hotel Ltd", pin: "P051234501C" },
      { name: "Client: Nairobi Traders", pin: "P051234502C" },
    ],
  },
];

const TAX_RETURNS = {
  A012345678X: [
    {
      period: "Q3 2025",
      income: 250000,
      tax: 32000,
      status: "Paid",
      date: "2025-12-15",
    },
    {
      period: "Q2 2025",
      income: 220000,
      tax: 28000,
      status: "Paid",
      date: "2025-08-15",
    },
    {
      period: "Q4 2025",
      income: 280000,
      tax: 36000,
      status: "Pending",
      dueDate: "2026-01-20",
    },
  ],
};

const TAX_BRACKETS = [
  { limit: 24000, rate: 0.1 },
  { limit: 32333, rate: 0.25 },
  { limit: Infinity, rate: 0.3 },
];

// ============================================
// SESSION MANAGEMENT
// ============================================

function setSession(user) {
  localStorage.setItem("itax_session", JSON.stringify(user));
}

function getSession() {
  const data = localStorage.getItem("itax_session");
  return data ? JSON.parse(data) : null;
}

function clearSession() {
  localStorage.removeItem("itax_session");
  localStorage.removeItem("taxReturnDraft");
}

function requireAuth() {
  const session = getSession();
  if (!session) {
    window.location.href = "auth.html";
    return null;
  }
  return session;
}

function logout() {
  clearSession();
  window.location.href = "auth.html";
}

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .substring(0, 2)
    .toUpperCase();
}

// ============================================
// LOADING OVERLAY
// ============================================

function showLoading(message, submessage) {
  let overlay = document.getElementById("loadingOverlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = "loadingOverlay";
    overlay.className = "loading-overlay";
    overlay.setAttribute("role", "alert");
    overlay.setAttribute("aria-live", "assertive");
    overlay.innerHTML = `
      <div class="loading-spinner"></div>
      <p class="loading-text">${message || "Loading..."}</p>
      <p class="loading-subtext">${submessage || "This may take a few seconds, please don't close this page."}</p>
    `;
    document.body.appendChild(overlay);
  } else {
    overlay.querySelector(".loading-text").textContent =
      message || "Loading...";
    overlay.querySelector(".loading-subtext").textContent =
      submessage ||
      "This may take a few seconds, please don't close this page.";
  }

  requestAnimationFrame(() => {
    overlay.classList.add("active");
  });
}

function hideLoading() {
  const overlay = document.getElementById("loadingOverlay");
  if (overlay) {
    overlay.classList.remove("active");
  }
}

// ============================================
// FORM DRAFT / AUTO-SAVE
// ============================================

function saveDraft(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadDraft(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function clearDraft(key) {
  localStorage.removeItem(key);
}

function showAutoSave(status) {
  let indicator = document.getElementById("autosaveIndicator");
  if (!indicator) return;

  const dot = indicator.querySelector(".autosave-dot");
  const text = indicator.querySelector(".autosave-text");

  if (status === "saving") {
    dot.classList.add("saving");
    text.textContent = "Saving...";
  } else {
    dot.classList.remove("saving");
    text.textContent = "Auto-saved just now";
  }

  indicator.classList.add("visible");

  clearTimeout(indicator._hideTimer);
  indicator._hideTimer = setTimeout(() => {
    indicator.classList.remove("visible");
  }, 3000);
}

// ============================================
// TAX CALCULATION
// ============================================

function calculateTax(monthlyIncome) {
  let tax = 0;
  let remaining = monthlyIncome;
  let prevLimit = 0;

  for (const bracket of TAX_BRACKETS) {
    const taxable = Math.min(remaining, bracket.limit - prevLimit);
    if (taxable <= 0) break;
    tax += taxable * bracket.rate;
    remaining -= taxable;
    prevLimit = bracket.limit;
  }

  return Math.round(tax);
}

function formatCurrency(amount) {
  return (
    "KES " +
    Number(amount).toLocaleString("en-KE", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
  );
}

// ============================================
// NOTIFICATIONS / TOASTS
// ============================================

function showToast(message, type) {
  type = type || "info";
  const colors = {
    success: "var(--success-green)",
    error: "var(--primary-red)",
    warning: "var(--orange-accent)",
    info: "var(--secondary-blue)",
  };

  const toast = document.createElement("div");
  toast.style.cssText = `
    position: fixed; top: 24px; right: 24px; z-index: 20000;
    background: ${colors[type]}; color: white;
    padding: 14px 24px; border-radius: 8px;
    font-size: 14px; font-weight: 500; font-family: Inter, sans-serif;
    box-shadow: 0 10px 25px rgba(0,0,0,0.15);
    animation: fadeIn 0.3s ease;
    max-width: 360px;
  `;
  toast.textContent = message;
  toast.setAttribute("role", "alert");
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ============================================
// SIDEBAR TOGGLE (Mobile)
// ============================================

function initSidebar() {
  const hamburger = document.getElementById("hamburgerBtn");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (!hamburger || !sidebar) return;

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    if (overlay) overlay.classList.toggle("open");
  });

  if (overlay) {
    overlay.addEventListener("click", () => {
      sidebar.classList.remove("open");
      overlay.classList.remove("open");
    });
  }
}

// ============================================
// PROFILE DROPDOWN
// ============================================

function initProfileDropdown() {
  const profileMenu = document.getElementById("profileMenu");
  const dropdown = document.getElementById("profileDropdown");

  if (!profileMenu || !dropdown) return;

  profileMenu.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdown.classList.toggle("open");
  });

  document.addEventListener("click", () => {
    dropdown.classList.remove("open");
  });
}

// ============================================
// GREETING BASED ON TIME
// ============================================

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener("keydown", (e) => {
  // Escape to close modals/dropdowns
  if (e.key === "Escape") {
    // Close loading overlay (if any)
    const loading = document.getElementById("loadingOverlay");
    if (loading && loading.classList.contains("active")) {
      // Don't close loading overlay on escape
    }

    // Close modals
    document.querySelectorAll(".modal-overlay.active").forEach((modal) => {
      modal.classList.remove("active");
    });

    // Close dropdowns
    document.querySelectorAll(".profile-dropdown.open").forEach((dd) => {
      dd.classList.remove("open");
    });

    // Close sidebar on mobile
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if (sidebar) sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
  }
});

// ============================================
// SVG ICONS (inline for no-dependency setup)
// ============================================

const ICONS = {
  kra: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="22" fill="#DC2626" opacity="0.1"/>
    <path d="M24 8C15.2 8 8 15.2 8 24s7.2 16 16 16 16-7.2 16-16S32.8 8 24 8zm0 28c-6.6 0-12-5.4-12-12S17.4 12 24 12s12 5.4 12 12-5.4 12-12 12z" fill="#DC2626"/>
    <path d="M24 16c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#DC2626"/>
  </svg>`,

  eye: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,

  eyeOff: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`,

  back: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>`,

  search: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,

  bell: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>`,

  chevronDown: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`,

  menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,

  close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
};

// ============================================
// KRA LOGO SVG
// ============================================

function getKRALogoSVG(size) {
  size = size || 48;
  return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#DC2626"/>
        <stop offset="100%" style="stop-color:#991B1B"/>
      </linearGradient>
    </defs>
    <circle cx="60" cy="60" r="56" fill="url(#kraGrad)"/>
    <circle cx="60" cy="60" r="44" fill="none" stroke="white" stroke-width="2" opacity="0.3"/>
    <text x="60" y="50" text-anchor="middle" fill="white" font-family="Inter,Arial,sans-serif" font-size="18" font-weight="700">KENYA</text>
    <text x="60" y="65" text-anchor="middle" fill="white" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="500">REVENUE</text>
    <text x="60" y="78" text-anchor="middle" fill="white" font-family="Inter,Arial,sans-serif" font-size="12" font-weight="500">AUTHORITY</text>
  </svg>`;
}

function getKRALogoHeaderSVG() {
  return `<svg width="140" height="44" viewBox="0 0 280 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="kraGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#DC2626"/>
        <stop offset="100%" style="stop-color:#991B1B"/>
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="36" fill="url(#kraGrad2)"/>
    <circle cx="40" cy="40" r="28" fill="none" stroke="white" stroke-width="1.5" opacity="0.3"/>
    <path d="M32 28 C32 28, 40 24, 48 28 C48 28, 52 32, 48 40 C48 40, 44 48, 40 52 C40 52, 36 48, 32 40 C32 40, 28 32, 32 28Z" fill="white" opacity="0.9"/>
    <text x="90" y="36" fill="#1F2937" font-family="Inter,Arial,sans-serif" font-size="22" font-weight="800" letter-spacing="0.5">KENYA REVENUE</text>
    <text x="90" y="58" fill="#1F2937" font-family="Inter,Arial,sans-serif" font-size="22" font-weight="800" letter-spacing="0.5">AUTHORITY</text>
  </svg>`;
}
