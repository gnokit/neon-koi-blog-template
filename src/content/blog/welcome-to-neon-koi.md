---
title: "Welcome to Neon Koi"
description: "An introduction to the Neon Koi blog template and its features"
pubDate: 2025-02-10
thumbnail: /images/hero-image-v1.webp
heroImage: /images/hero-image-v1.webp
author: Neon Koi Team
tags: ["introduction", "getting-started"]
draft: false
featured: true
---

Welcome to Neon Koi, a modern, fast, and beautiful blog template built with Astro 5.x. Whether you're starting a personal blog, a company publication, or a documentation site, Neon Koi provides everything you need to get started quickly.

## What is Neon Koi?

Neon Koi is a static blog template designed for developers, writers, and creators who value performance, design, and ease of use. Named after the vibrant colors of neon lights and the grace of koi fish, this template combines striking visuals with smooth functionality.

The template is built on Astro's Islands Architecture, which means your site ships minimal JavaScript to the browser while still supporting interactive components where needed. The result? Blazing fast page loads and excellent Lighthouse scores out of the box.

## Key Features

### Astro 5.x Foundation
Built on the latest Astro framework, Neon Koi leverages content collections for type-safe blog posts, automatic RSS feeds, and optimized static site generation. The build process creates highly optimized HTML files that load instantly.

### TypeScript Throughout
Every configuration file, component, and content schema uses TypeScript. This means you'll catch errors at build time rather than runtime, and your IDE will provide helpful autocomplete suggestions as you customize the template.

### Tailwind CSS v4 Styling
The template uses Tailwind CSS v4 with the new `@theme` directive for defining custom design tokens. Colors, spacing, and typography are all centralized in `src/styles/global.css`, making it easy to adapt the template to your brand.

### Dark Mode Support
Neon Koi includes a complete dark mode implementation using Tailwind's class-based strategy. The theme toggle persists user preferences to localStorage, and an inline script prevents flash-of-unstyled-content on page load. Your content looks great in both light and dark modes.

### Content Collections
Blog posts use Astro's content collections with Zod schema validation. This provides type safety for frontmatter fields and automatic TypeScript types for your content. The schema includes support for:

- Title and description
- Publication and update dates
- Hero images and thumbnails
- Author attribution
- Tags for categorization
- Draft status for unpublished work
- Featured post highlighting

### SEO Ready
The template includes comprehensive SEO meta tags, Open Graph support, and structured data for articles. RSS feeds and sitemaps are automatically generated during the build process.

## Who is This For?

Neon Koi is perfect for:

- **Developers** who want a fast, modern blog with minimal client-side JavaScript
- **Writers** who prefer writing in Markdown with frontmatter metadata
- **Teams** who need a documentation site with consistent styling
- **Creators** who want beautiful typography and dark mode support
- **Agencies** who need a solid foundation for client blog projects

## Quick Start

Getting started with Neon Koi takes just a few steps:

1. Clone or fork this repository
2. Run `npm install` to install dependencies
3. Update `src/config/site.ts` with your site details
4. Add your blog posts to `src/content/blog/`
5. Run `npm run dev` to start the development server
6. Deploy to your favorite static host (Vercel, Netlify, Cloudflare Pages, etc.)

For detailed customization instructions, check out our [Customization Guide](/blog/customizing-your-neon-koi-blog/). To learn about writing content with Markdown formatting, see our guide on [Creating Great Content](/blog/creating-great-content/).

We're excited to see what you build with Neon Koi. Happy blogging!
