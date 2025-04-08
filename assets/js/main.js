// Set current year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle logic
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const mobileToggleButton = document.getElementById('theme-toggle-mobile');
const mobileThemeIcon = document.getElementById('theme-icon-mobile');

function updateToggleIcon(theme) {
  if (theme === 'dark') {
    themeIcon.src = "assets/images/icons/Moon.svg";
  } else {
    themeIcon.src = "assets/images/icons/Sun.svg";
  }
  themeIcon.style.filter = "brightness(0) saturate(100%) invert(100%)";
}

function updateMobileToggleIcon(theme) {
  if (theme === 'dark') {
    mobileThemeIcon.src = "assets/images/icons/Moon.svg";
  } else {
    mobileThemeIcon.src = "assets/images/icons/Sun.svg";
  }
  mobileThemeIcon.style.filter = "brightness(0) saturate(100%) invert(100%)";
}

const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);
updateMobileToggleIcon(savedTheme);

// Reusable function to toggle theme
function toggleTheme() {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
  updateMobileToggleIcon(newTheme);
}

// Update both desktop and mobile theme toggle buttons
toggleButton.addEventListener('click', toggleTheme);
mobileToggleButton.addEventListener('click', toggleTheme);

// Hamburger menu toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

// Hide spinner after page loads
window.addEventListener('load', () => {
  const spinner = document.getElementById('loading-spinner');
  if (spinner) {
    spinner.style.display = 'none';
  }
});

// Modal functionality
const modal = document.getElementById('item-modal');
const modalCloseDesktop = document.getElementById('modal-close-desktop');
const modalCloseFixed = document.getElementById('modal-close-fixed');

// Product data
const products = [
  {
    title: "Samus Aran Chibi (No Helmet)",
    image: "assets/images/products/samus-chibi-no-helmet.png",
    price: "$24.99",
    description: "Show off your love for the Metroid series with this adorable Samus Aran Chibi car decal!",
    link: "https://www.ebay.com/itm/example-tshirt",
    category: "Car Decal",
    colors: ["white", "black", "red", "green", "blue", "yellow"]
  },
  {
    title: "Gengar",
    image: "assets/images/products/gengar.png",
    price: "$14.99",
    description: "Enjoy your favorite beverage in this retro arcade-themed mug.",
    link: "https://www.ebay.com/itm/example-mug",
    category: "Accessories",
    colors: ["#000000", "#FFFFFF"]
  },
  {
    title: "Retro Poster",
    image: "assets/images/products/retro-poster.jpg",
    price: "$9.99",
    description: "Decorate your space with this vibrant retro gaming poster.",
    link: "https://www.ebay.com/itm/example-poster",
    category: "Decor",
    colors: ["#FFD700", "#FF4500"]
  },
  {
    title: "Custom Decal",
    image: "assets/images/products/custom-decal.jpg",
    price: "$4.99",
    description: "Personalize your gear with this custom retro gaming decal.",
    link: "https://www.ebay.com/itm/example-decal",
    category: "Custom",
    colors: ["#8A2BE2", "#7FFF00"]
  }
];

// Dynamically generate product tiles
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
  const tile = document.createElement('div');
  tile.className = 'tile-card merchandise-tile';
  tile.style.backgroundImage = `url(${product.image})`; // Set thumbnail as background
  tile.style.backgroundSize = 'cover';
  tile.style.backgroundPosition = 'center';
  tile.innerHTML = `
    <div class="news-overlay"></div>
    <div class="news-shine"></div>
    <h3>${product.title}</h3>
    <button class="view-item-btn">View Item</button>
  `;
  productGrid.appendChild(tile);
});

// Use event delegation for product tiles
productGrid.addEventListener('click', (event) => {
  if (event.target.classList.contains('view-item-btn')) {
    const tile = event.target.closest('.tile-card');
    const product = products.find(p => p.title === tile.querySelector('h3').innerText);

    if (product) {
      const modalCategory = modal.querySelector('.modal-details .category');
      const modalTitle = modal.querySelector('.modal-details h3');
      const modalSwatches = modal.querySelector('.modal-details .color-swatches');
      const modalDescription = modal.querySelector('.modal-details p');
      const modalButton = modal.querySelector('.modal-details .cta-button');
      const modalImage = modal.querySelector('.modal-svg-container img');

      modalCategory.innerText = product.category || "Uncategorized"; // Set category
      modalTitle.innerText = product.title;
      modalDescription.innerText = product.description;
      modalButton.innerText = `${product.price} on eBay`; // Update button text
      modalButton.href = product.link;
      modalImage.src = product.image;

      // Populate color swatches
      modalSwatches.innerHTML = ""; // Clear existing swatches
      (product.colors || []).forEach(color => {
        const swatch = document.createElement('span');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color;
        modalSwatches.appendChild(swatch);
      });

      modal.style.display = 'block';
    }
  }
});

// Close modal functionality
const closeModal = () => {
  modal.style.display = 'none';
};

modalCloseDesktop.addEventListener('click', closeModal);
modalCloseFixed.addEventListener('click', closeModal);

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});
