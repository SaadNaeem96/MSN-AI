# MSN AI - Virtual AI Host for Toronto Restaurants

A modern, high-converting static website built with Astro and deployable to Netlify.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment to Netlify

### Option 1: Connect GitHub Repository

1. Go to [Netlify](https://app.netlify.com)
2. Click "Add new site" > "Import an existing project"
3. Connect to GitHub and select this repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Manual Deploy

```bash
# Build the project
npm run build

# Deploy using Netlify CLI
npx netlify deploy --prod --dir=dist
```

## Project Structure

```
MSN_AI/
├── src/
│   ├── components/     # Astro components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Solutions.astro
│   │   ├── SmartAdvertising.astro
│   │   ├── LocalBusiness.astro
│   │   ├── WhyMSN.astro
│   │   ├── Testimonials.astro
│   │   ├── Pricing.astro
│   │   ├── FinalCTA.astro
│   │   └── Footer.astro
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes
│   └── styles/         # Global styles
├── public/             # Static assets
├── astro.config.mjs    # Astro configuration
├── netlify.toml        # Netlify configuration
└── package.json
```

## Customization

### Adding Real Images

Replace placeholder visuals by adding images to `public/images/` and updating component references.

### Updating Content

- **Hero section**: `src/components/Hero.astro`
- **Pricing**: `src/components/Pricing.astro`
- **Testimonials**: `src/components/Testimonials.astro`
- **Contact info**: `src/components/FinalCTA.astro`

### Styling

Global styles are in `src/styles/global.css`. CSS variables control colors, fonts, and spacing.

## SEO

The site includes:
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Skip links for accessibility

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Netlify](https://netlify.com) - Hosting and deployment
- CSS - Custom styles, no framework
