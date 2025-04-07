// Set current year automatically
document.getElementById('year').textContent = new Date().getFullYear();

// Theme toggle logic
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function updateToggleIcon(theme) {
  if (theme === 'dark') {
    themeIcon.src = "assets/images/icons/Moon.svg";
  } else {
    themeIcon.src = "assets/images/icons/Sun.svg";
  }
  themeIcon.style.filter = "brightness(0) saturate(100%) invert(100%)";
}

const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.setAttribute('data-theme', savedTheme);
updateToggleIcon(savedTheme);

toggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme);
});

const mobileToggleButton = document.getElementById('theme-toggle-mobile');
const mobileThemeIcon = document.getElementById('theme-icon-mobile');

function updateMobileToggleIcon(theme) {
  if (theme === 'dark') {
    mobileThemeIcon.src = "assets/images/icons/Moon.svg";
  } else {
    mobileThemeIcon.src = "assets/images/icons/Sun.svg";
  }
  mobileThemeIcon.style.filter = "brightness(0) saturate(100%) invert(100%)";
}

// Ensure the mobile theme toggle button reflects the saved theme
updateMobileToggleIcon(savedTheme);

mobileToggleButton.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateToggleIcon(newTheme); // Update desktop icon
  updateMobileToggleIcon(newTheme); // Update mobile icon
});

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
    title: "Samus Aran Chibi (No Helmet) Car Decal",
    image: "assets/images/products/samus-chibi-no-helmet.png",
    price: "$24.99",
    description: "Show off your love for the Metroid series with this adorable Samus Aran Chibi car decal! Featuring a helmetless Samus in a charming chibi style, this high-quality vinyl decal is perfect for cars, laptops, water bottles, and more. The vibrant colors and intricate design capture the essence of Samus's iconic look, making it a standout piece for any fan. Durable, weatherproof, and easy to apply, this decal is built to last and withstand the elements. Whether you're a long-time Metroid enthusiast or a newcomer to the series, this decal is a great way to showcase your passion for gaming. It's also a fantastic gift idea for friends or family who share your love for retro games and collectibles. Add a touch of nostalgia to your everyday items with this must-have accessory!",
    link: "https://www.ebay.com/itm/example-tshirt"
  },
  {
    title: "Arcade Mug",
    image: "assets/images/products/arcade-mug.jpg",
    price: "$14.99",
    description: "Enjoy your favorite beverage in this retro arcade-themed mug.",
    link: "https://www.ebay.com/itm/example-mug"
  },
  {
    title: "Retro Poster",
    image: "assets/images/products/retro-poster.jpg",
    price: "$9.99",
    description: "Decorate your space with this vibrant retro gaming poster.",
    link: "https://www.ebay.com/itm/example-poster"
  },
  {
    title: "Custom Decal",
    image: "assets/images/products/custom-decal.jpg",
    price: "$4.99",
    description: "Personalize your gear with this custom retro gaming decal.",
    link: "https://www.ebay.com/itm/example-decal"
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

  // Add event listener for the modal
  tile.querySelector('.view-item-btn').addEventListener('click', () => {
    const modalTitle = modal.querySelector('.modal-details h2');
    const modalPrice = modal.querySelector('.modal-details .price');
    const modalDescription = modal.querySelector('.modal-details p');
    const modalButton = modal.querySelector('.modal-details .cta-button');
    const modalImage = modal.querySelector('.modal-svg-container img');

    modalTitle.innerText = product.title;
    modalPrice.innerText = product.price;
    modalDescription.innerText = product.description;
    modalButton.href = product.link;
    modalImage.src = product.image;

    modal.style.display = 'block';
  });
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
