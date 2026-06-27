// 1. The Global Data Array (Update this as you add products to the site)
const searchDatabase = [
  {
    title: "Engineering Mathematics Volume 1",
    category: "Academics",
    desc: "Recommended textbook for first-year math syllabus.",
    url: "academics.html#math-vol-1"
  },
  {
    title: "Drafting Table / Mini Drafter",
    category: "Essential Purchases",
    desc: "Crucial for engineering drawing classes. Buy locally if possible.",
    url: "essentials.html#drafter"
  },
  {
    title: "Nivia Basketball",
    category: "Sports & Activities",
    desc: "Durable indoor/outdoor basketball perfect for campus courts.",
    url: "sports.html#basketball"
  },
  {
    title: "Hostel Packing List",
    category: "College Tips",
    desc: "Everything you need to survive your first semester in the hostel.",
    url: "tips.html#hostel-packing"
  }
  // Add all other products here...
];

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('searchModal');
  const triggers = document.querySelectorAll('.search-trigger');
  const closeBtn = document.getElementById('closeSearch');
  const backdrop = document.getElementById('searchBackdrop');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');

  // Open Modal
  const openSearch = () => {
    modal.classList.add('active');
    setTimeout(() => input.focus(), 100);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close Modal
  const closeSearch = () => {
    modal.classList.remove('active');
    input.value = '';
    resultsContainer.innerHTML = '<div class="search-placeholder">Start typing to search across NITA Essentials</div>';
    document.body.style.overflow = '';
  };

  // Event Listeners for Open/Close
  triggers.forEach(btn => btn.addEventListener('click', openSearch));
  closeBtn.addEventListener('click', closeSearch);
  backdrop.addEventListener('click', closeSearch);

  // Keyboard Shortcuts (Cmd+K to open, Esc to close)
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeSearch();
    }
  });

  // Search Logic
  input.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    if (query.length === 0) {
      resultsContainer.innerHTML = '<div class="search-placeholder">Start typing to search across NITA Essentials</div>';
      return;
    }

    // Filter the database
    const results = searchDatabase.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.desc.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );

    // Render Logic
    if (results.length > 0) {
      resultsContainer.innerHTML = results.map(item => `
        <a href="${item.url}" class="search-result-item">
          <div class="search-result-header">
            <span class="search-result-title">${item.title}</span>
            <span class="search-result-cat">${item.category}</span>
          </div>
          <div class="search-result-desc">${item.desc}</div>
        </a>
      `).join('');
    } else {
      // The "Not Found / Contribute" State
      resultsContainer.innerHTML = `
        <div class="no-results">
          <h3>No results found for "${e.target.value}"</h3>
          <p>We couldn't find this item in our current directory across any category.</p>
          <a href="contribute.html" class="btn btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            Contribute this Product
          </a>
        </div>
      `;
    }
  });
});