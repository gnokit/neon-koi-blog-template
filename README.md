# Koi Blog

A blog site celebrating the makers, creators, and coders who shine. Built with Astro and Tailwind CSS.

## Features

- Static site generation with Astro
- Light/dark theme toggle
- Content collections for type-safe blog posts
- Centralized TypeScript configuration
- MDX support for rich content
- RSS feed generation
- SEO-friendly with sitemap

## Getting Started

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

## Project Structure

```
src/
├── components/      # Reusable UI components
├── config/          # Site configuration
├── content/         # Content collections
│   └── blog/        # Blog posts (Markdown/MDX)
├── layouts/         # Page layouts
├── pages/           # Routes
├── styles/          # Global styles
└── utils/           # Helper functions
```

## Content

Blog posts are written in Markdown or MDX and stored in `src/content/blog/`. Each post includes frontmatter with title, description, publication date, author, and optional metadata.

## License

MIT
