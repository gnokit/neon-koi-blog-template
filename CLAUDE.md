# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Koi is a blog site built with Astro 5.x, featuring a clean, modern design with light/dark theme support. The site uses content collections for type-safe blog posts and Tailwind CSS v4 for styling.

## Development Commands

All commands are run from the project root:

```bash
# Development server (runs on localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro -- <command>

# Type-check the project
npm run astro check

# Sync content collections (generates types)
npm run astro sync
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.17.1 (static site generation)
- **Styling**: Tailwind CSS v4 with custom theme variables
- **Content**: Astro Content Collections with Zod schema validation
- **Integrations**: MDX, Sitemap, RSS

### Content Collections

Blog posts are defined in `src/content/config.ts` with the following schema:

```typescript
{
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  heroImage?: string;
  thumbnail: string;
  author: string;
  tags: string[];
  draft: boolean;
  featured: boolean;
}
```

Content is stored in `src/content/blog/` as Markdown/MDX files with YAML frontmatter.

### Theme System

Dark mode is implemented using Tailwind's `dark` class strategy:
- Theme preference is stored in `localStorage` with key `'theme'`
- The `html` element gets the `dark` class when dark mode is active
- Theme initialization happens in an inline script in `BaseLayout.astro` to prevent flash
- Theme utilities are in `src/utils/theme.ts`

### Layout Hierarchy

- `BaseLayout.astro`: Root layout with SEO meta tags, theme initialization, and global styles
- `BlogPostLayout.astro`: Extends BaseLayout for blog posts with article header, author info, and hero image support

### Styling

Tailwind v4 configuration is in `src/styles/global.css` using the `@theme` directive:
- Custom colors defined as CSS custom properties
- Dark mode colors use `dark:` prefix
- Typography styles for `.prose` class handle blog content rendering

### Key Files

- `astro.config.mjs`: Site configuration, integrations, and Vite plugins
- `src/content/config.ts`: Content collection schemas
- `src/styles/global.css`: Tailwind v4 theme and global styles
- `src/utils/theme.ts`: Theme management utilities
