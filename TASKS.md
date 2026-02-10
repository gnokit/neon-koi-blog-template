# Koi Blog - Development Tasks

A blog site called "Koi" built with Astro, featuring a clean, modern design with light/dark theme support.

## Design Reference

Based on the screenshots in `/references/`:
- **Homepage**: Grid layout of blog posts with featured hero section
- **Article Page**: Full-width hero image, clean typography, author info
- **Theme**: Light and dark mode toggle
- **Footer**: Navigation links, social links, theme selector

---

## Phase 1: Project Setup

### Task 1.1: Initialize Astro Project
- [x] Run `npm create astro@latest koi-blog -- --template basics --add tailwind --yes`
- [x] Navigate to project directory
- [x] Install additional dependencies:
  - [x] `@astrojs/mdx` for MDX support
  - [x] `@astrojs/sitemap` for sitemap generation
  - [x] `@astrojs/rss` for RSS feed
- [x] Configure `astro.config.mjs` with site URL and integrations

### Task 1.2: Configure Tailwind CSS v4
- [x] Set up `src/styles/global.css` with Tailwind v4 directives
- [x] Configure dark mode using `dark` class strategy
- [x] Define custom colors matching Koi design:
  - [x] Primary accent color (purple/violet tones from design)
  - [x] Background colors for light/dark modes
  - [x] Text colors for light/dark modes
- [x] Set up CSS custom properties for theme variables

### Task 1.3: Project Structure
- [x] Create directory structure:
  ```
  src/
  ├── components/      # Reusable UI components
  ├── layouts/         # Page layouts
  ├── pages/           # Routes
  ├── content/         # Content collections
  │   └── blog/        # Blog posts
  ├── styles/          # Global styles
  └── utils/           # Helper functions
  public/              # Static assets
  ```

---

## Phase 2: Core Components

### Task 2.1: Layout Components
- [x] Create `src/layouts/BaseLayout.astro`
  - [x] HTML5 boilerplate with meta tags
  - [x] Theme initialization script (prevents flash)
  - [x] Slot for page content
  - [x] Header and Footer integration with show/hide props
- [x] Create `src/layouts/BlogPostLayout.astro`
  - [x] Extends BaseLayout
  - [x] Article header with title, author, date
  - [x] Hero image support

### Task 2.2: Navigation Components
- [x] Create `src/components/Header.astro`
  - [x] Logo "Koi" with link to home
  - [x] Navigation menu items:
    - [x] Glitch Updates
    - [x] Tips & Tutorials
    - [x] Apps We Love
    - [x] Creator Interviews
    - [x] Industry News
    - [x] Internet Culture
  - [x] Search button
  - [x] Glitch.com link
- [x] Create `src/components/Footer.astro`
  - [x] Tagline: "Celebrating the makers, creators, and coders who shine."
  - [x] Footer links: Search, Glitch.com, About Glitch, RSS, Twitter, Mastodon
  - [x] Theme selector dropdown (Light/Dark)
  - [x] Koi fish logo

### Task 2.3: Theme Toggle
- [x] Create `src/components/ThemeToggle.astro`
  - [x] Dropdown select for Light/Dark modes
  - [x] Store preference in localStorage
  - [x] Sync with `document.documentElement.classList`
- [x] Create `src/utils/theme.ts` for theme utilities

### Task 2.4: Blog Components
- [x] Create `src/components/PostCard.astro`
  - [x] Thumbnail image
  - [x] Date
  - [x] Title
  - [x] Link to full post
- [x] Create `src/components/PostGrid.astro`
  - [x] Grid layout for post cards
  - [x] Responsive columns (1 on mobile, 2 on tablet, 3 on desktop)
- [x] Create `src/components/FeaturedPost.astro`
  - [x] Large hero section for featured article
  - [x] Full-width image
  - [x] Date and title

---

## Phase 3: Content Collections

### Task 3.1: Content Schema
- [ ] Create `src/content/config.ts`
  - [ ] Define `blog` collection schema:
    ```typescript
    {
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: z.string().optional(),
      thumbnail: z.string(),
      author: z.string(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
    }
    ```

### Task 3.2: Sample Content
- [ ] Create sample blog posts in `src/content/blog/`:
  - [ ] "Important Changes are Coming to Glitch"
  - [ ] "Until we meet again"
  - [ ] "Do you remember why we named this thing Glitch?"
  - [ ] "Fall 2024 on Glitch, Part 1"
  - [ ] "Fall 2024 on Glitch, Part 2"
  - [ ] "Winter 2025 on Glitch: Little of this, little of that"
- [ ] Add placeholder images for posts

---

## Phase 4: Pages

### Task 4.1: Homepage
- [ ] Create `src/pages/index.astro`
  - [ ] Use BaseLayout
  - [ ] Include Header component
  - [ ] Featured post section (if any post has `featured: true`)
  - [ ] PostGrid with all published posts sorted by date
  - [ ] Include Footer component

### Task 4.2: Blog Post Pages
- [ ] Create `src/pages/blog/[slug].astro`
  - [ ] Implement `getStaticPaths()` to generate routes from content collection
  - [ ] Use BlogPostLayout
  - [ ] Render Markdown/MDX content
  - [ ] Display author and publication date
  - [ ] Show hero image if available

### Task 4.3: RSS Feed
- [ ] Create `src/pages/rss.xml.js`
  - [ ] Generate RSS feed from blog collection
  - [ ] Include title, description, pubDate, and link for each post

### Task 4.4: Category/Tag Pages (Optional)
- [ ] Create `src/pages/tags/[tag].astro` for filtering by tag
- [ ] Create `src/pages/categories/[category].astro` for category filtering

---

## Phase 5: Styling & Polish

### Task 5.1: Global Styles
- [ ] Create `src/styles/global.css`
  - [ ] Tailwind v4 base imports
  - [ ] Custom font stack
  - [ ] Typography styles for blog content
  - [ ] Link hover effects
  - [ ] Selection colors

### Task 5.2: Responsive Design
- [ ] Mobile-first responsive breakpoints
- [ ] Header navigation collapse on mobile
- [ ] Post grid responsive columns
- [ ] Article typography scaling

### Task 5.3: Dark Mode Styles
- [ ] Dark mode background colors
- [ ] Dark mode text colors
- [ ] Dark mode link colors
- [ ] Image brightness adjustments for dark mode

### Task 5.4: Animations & Transitions
- [ ] Smooth theme transition
- [ ] Hover effects on post cards
- [ ] Page transition animations

---

## Phase 6: Assets & SEO

### Task 6.1: Static Assets
- [ ] Add Koi logo SVG to `public/`
- [ ] Create favicon set
- [ ] Add placeholder images for blog posts

### Task 6.2: SEO
- [ ] Add meta tags to BaseLayout:
  - [ ] Description
  - [ ] Open Graph tags
  - [ ] Twitter Card tags
- [ ] Create `src/pages/robots.txt.ts`
- [ ] Verify sitemap generation

---

## Phase 7: Testing & Deployment

### Task 7.1: Testing
- [ ] Test all pages render correctly
- [ ] Test theme toggle functionality
- [ ] Test responsive breakpoints
- [ ] Verify RSS feed works
- [ ] Check all links work

### Task 7.2: Build & Deploy
- [ ] Run `npm run build`
- [ ] Verify static output in `dist/`
- [ ] Deploy to hosting platform (Vercel, Netlify, etc.)

---

## File Structure Summary

```
koi-blog/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ThemeToggle.astro
│   │   ├── PostCard.astro
│   │   ├── PostGrid.astro
│   │   └── FeaturedPost.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── blog/
│   │   │   └── [slug].astro
│   │   └── rss.xml.js
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── post-1.md
│   │       ├── post-2.md
│   │       └── ...
│   ├── styles/
│   │   └── global.css
│   └── utils/
│       └── theme.ts
├── public/
│   ├── logo.svg
│   ├── favicon.ico
│   └── images/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Notes

- Use Astro content collections for type-safe blog posts
- Implement dark mode using Tailwind's `dark` class strategy
- Keep JavaScript minimal - use Astro's islands architecture for interactivity
- Use `client:load` directive only for theme toggle (if needed)
- Follow Astro best practices for static site generation
