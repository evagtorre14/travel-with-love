# TravelWithLove Itineraries

## 1. Product Vision

To create a visually appealing and fast static web application to display and organize travel itineraries. Navigation will be fluid and intuitive, allowing users to easily switch between different trips and quickly browse the content of a specific itinerary.

## 2. Tech Stack

This project is built with the following technologies:

- **Main Framework:** [Astro](https://astro.build/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Astro Icon](https://github.com/natemoo-re/astro-icon#readme)
- **Deployment:** [GitHub Pages](https://pages.github.com/)

## 3. Project Structure

The project follows the standard structure of an Astro project:

```
/
├── public/                 # Static files (images, fonts, etc.)
├── src/
│   ├── assets/             # Images and other resources
│   ├── components/         # Reusable Astro components
│   ├── data/               # Application data (destinations, etc.)
│   ├── layouts/            # Page layouts
│   ├── pages/              # Application pages and routes
│   └── styles/             # Global styles
└── package.json            # Project dependencies and scripts
```

## 4. Available Scripts

In the project directory, you can run the following commands:

- `npm run dev`: Starts the development server at `localhost:4321`.
- `npm run build`: Compiles the site for production in the `dist/` directory.
- `npm run preview`: Previews the production site locally.

## 5. Deployment

The project is automatically deployed to GitHub Pages every time a `push` is made to the `main` branch. The workflow is defined in `.github/workflows/deploy.yml`.

## 6. Style Guide

The project uses Tailwind CSS for styling. The configuration is located in `tailwind.config.mjs`.

### Color Palette

- `alpine-green`: `#2E4636`
- `terracotta`: `#D97746`
- `linen-white`: `#F7F5F2`
- `slate-gray`: `#2D3748`

### Typography

- **Main Font:** `Poppins`

## 7. Analytics

This project uses Google Analytics to track user traffic. The tracking script is implemented directly in the main layout file: `src/layouts/MainLayout.astro`.

- **Tracking ID:** `G-17DVMY56N1`

## 8. SEO

To improve search engine visibility, several SEO best practices have been implemented:

- **Sitemap:** The `@astrojs/sitemap` integration has been added to automatically generate a `sitemap-index.xml` file during the build process. This helps search engines discover and index all pages of the site.

- **robots.txt:** A `public/robots.txt` file has been created to instruct search engine crawlers on how to crawl the site and to point them to the sitemap.

- **Meta Tags:** A reusable `SEO.astro` component has been created in `src/components/` to manage all important meta tags centrally. This includes the title, description, canonical URL, and Open Graph tags for social media sharing. This component is used in the main layout (`src/layouts/MainLayout.astro`) to ensure all pages have a solid SEO foundation.

- **Image Alt Texts:** All images in the main page components (`Hero.astro`, `Destinations.astro`, `Activities.astro`, `Flavors.astro`) have been updated with descriptive alt texts. This improves accessibility and allows search engines to better understand the content of the images.

## 9. External Services

### OpenWeatherMap

To display weather information, the application uses the [OpenWeatherMap API](https://openweathermap.org/api). The API key is stored as a secret in the GitHub repository (`OPENWEATHERMAP_API_KEY`) and is used during the build process for deployment, as defined in the GitHub Actions workflow.