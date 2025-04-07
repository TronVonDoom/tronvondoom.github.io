# VonDoom's Retro Oasis

## Changes

- Removed SVG elements for merchandise tiles.
- Replaced SVGs with product images in `assets/images/products/`.

## Project Structure

```
c:\Users\MJTHIBOD\Documents\GitHub\tronvondoom.github.io\
│
├── assets\
│   ├── css\                # Stylesheets
│   │   └── style.css       # Ensure this file exists
│   ├── images\             # Images and icons
│   │   ├── favicon.ico
│   │   ├── logo.png
│   │   ├── hero-handmade.jpg
│   │   ├── icons\
│   │   │   ├── Sun.svg
│   │   │   ├── Moon.svg
│   │   │   └── hamburger.svg
│   │   └── products\
│   │       ├── vinyl-decal.jpg
│   │       ├── sticker-pack.jpg
│   │       ├── keychain.jpg
│   │       ├── gaming-mug.jpg
│   │       └── retro-tshirt.png # Ensure this file exists
│   └── js\                 # JavaScript files
│       └── main.js
│
├── .vscode\                # VS Code configurations
│   └── launch.json
│
├── index.html              # Main HTML file
├── CNAME                   # Custom domain configuration
└── README.md               # Project documentation
```

## Editing Instructions

1. **HTML**: Edit `index.html` for content updates.
2. **CSS**: Modify `assets/css/style.css` for styling changes.
3. **JavaScript**: Update `assets/js/main.js` for interactive features.
4. **Images**: Add or replace images in `assets/images/`.
5. **Launch Config**: Use `.vscode/launch.json` for debugging in VS Code.

## Troubleshooting

1. **CSS Not Loading**: Ensure `assets/css/style.css` exists and is correctly referenced in `index.html`.
2. **Browser Cache**: Clear your browser cache or perform a hard refresh (`Ctrl+F5` or `Cmd+Shift+R`).
3. **File Placement**: Verify that the `assets/css/` folder is in the correct location relative to `index.html`.

## Test Product

The first tile in the merchandise section has been updated with a test product:

- **Title**: Retro Gaming T-Shirt
- **Image**: `assets/images/products/retro-tshirt.png`
- **Price**: $24.99
- **Description**: "This Retro Gaming T-Shirt is perfect for any gaming enthusiast. Made from high-quality cotton, it features a vibrant retro design."
- **eBay Link**: [View on eBay](https://www.ebay.com/itm/example-tshirt)
