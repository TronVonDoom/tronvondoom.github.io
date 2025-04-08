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
    category: "Car Decal",
    title: "Samus Aran Chibi (No Helmet)",
    colors: ["white", "black", "red", "green", "blue", "yellow", "purple"],
    description: "Show off your love for the Metroid series with this adorable Samus Aran Chibi car decal!",
    image: "assets/images/products/decal_rear_window.png",
    overlayImage: "assets/images/products/decal_samus-chibi-no-helmet.png", // Overlay image
    price: "$24.99",
    link: "https://www.ebay.com/itm/example-tshirt"
  },
  {
    category: "Car Decal",
    title: "Menacing Gengar",
    colors: ["white", "black", "red", "green", "blue", "yellow", "purple"],
    description: "Show off your love for the Metroid series with this adorable Samus Aran Chibi car decal!",
    image: "assets/images/products/decal_rear_window.png",
    overlayImage: "assets/images/products/decal_gengar.png", // Overlay image
    price: "$24.99",
    link: "https://www.ebay.com/itm/example-tshirt"
  },
  {
    category: "Car Decal",
    title: "#",
    colors: ["white", "black", "red", "green", "blue", "yellow", "purple"],
    description: "#",
    image: "assets/images/products/#.png",
    overlayImage: "assets/images/overlays/default-overlay.png", // Overlay image
    price: "$24.99",
    link: "https://www.ebay.com/itm/example-tshirt"
  },
  {
    category: "Car Decal",
    title: "#",
    colors: ["white", "black", "red", "green", "blue", "yellow", "purple"],
    description: "#",
    image: "assets/images/products/#.png",
    overlayImage: "assets/images/overlays/default-overlay.png", // Overlay image
    price: "$24.99",
    link: "https://www.ebay.com/itm/example-tshirt"
  }
];

// Dynamically generate product tiles
const productGrid = document.querySelector('.product-grid');
products.forEach(product => {
  const tile = document.createElement('div');
  tile.className = 'tile-card merchandise-tile';
  tile.style.backgroundImage = `url(${product.image})`; // Set background image
  tile.style.backgroundSize = 'cover';
  tile.style.backgroundPosition = 'center';
  tile.innerHTML = `
    <div class="tile-overlay" style="background-image: url(${product.overlayImage}); filter: brightness(0) saturate(100%) invert(100%);"></div> <!-- Default white overlay -->
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
      const modalOverlay = modal.querySelector('.modal-overlay'); // Overlay element

      modalCategory.innerText = product.category || "Uncategorized"; // Set category
      modalTitle.innerText = product.title;
      modalDescription.innerText = product.description;
      modalButton.innerText = `${product.price} on eBay`; // Update button text
      modalButton.href = product.link;
      modalImage.src = product.image;
      modalOverlay.style.backgroundImage = `url(${product.overlayImage})`; // Set overlay image
      modalOverlay.style.filter = "brightness(0) saturate(100%) invert(100%)"; // Default white overlay

      // Populate color swatches
      modalSwatches.innerHTML = ""; // Clear existing swatches
      (product.colors || []).forEach(color => {
        const swatch = document.createElement('span');
        swatch.className = 'color-swatch';
        swatch.style.backgroundColor = color;

        // Add click event to change overlay color
        swatch.addEventListener('click', () => {
          modalOverlay.style.filter = getFilterForColor(color);
        });

        modalSwatches.appendChild(swatch);
      });

      modal.style.display = 'block';
    }
  }
});

// Helper function to calculate filter for a given color
function getFilterForColor(color) {
  const colorMap = {
    red: "brightness(0) saturate(100%) invert(21%) sepia(92%) saturate(7481%) hue-rotate(1deg) brightness(96%) contrast(105%)",
    green: "brightness(0) saturate(100%) invert(48%) sepia(91%) saturate(748%) hue-rotate(89deg) brightness(90%) contrast(85%)",
    blue: "brightness(0) saturate(100%) invert(32%) sepia(100%) saturate(7500%) hue-rotate(190deg) brightness(90%) contrast(85%)",
    yellow: "brightness(0) saturate(100%) invert(84%) sepia(100%) saturate(7500%) hue-rotate(1deg) brightness(90%) contrast(85%)",
    black: "brightness(0) saturate(100%) invert(0%)",
    white: "brightness(0) saturate(100%) invert(100%)",
    purple: "brightness(0) saturate(100%) invert(25%) sepia(100%) saturate(7500%) hue-rotate(270deg) brightness(90%) contrast(85%)" // Added purple
  };
  return colorMap[color] || "brightness(0) saturate(100%) invert(100%)"; // Default to white
}

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
