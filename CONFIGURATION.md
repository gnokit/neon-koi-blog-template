# Configuration Guide

This guide explains how to customize your Neon Koi blog.

## Quick Start: Change the Blog Name

The blog name and all site-wide settings are centralized in a single configuration file:

**File:** `src/config/site.ts`

```typescript
import type { SiteConfig } from './site.ts';

export const siteConfig: SiteConfig = {
  // Change this to your blog name
  name: 'My Blog',

  // Change this to your tagline
  tagline: 'My awesome blog about things I love.',

  // Your website URL
  url: 'https://myblog.example.com',

  // Author name shown on posts
  author: 'My Name',

  // ... rest of config
};
```

Simply edit the values in this file and the changes will appear throughout your site automatically.

## Configuration Options

### Branding

| Option | Description | Example |
|--------|-------------|---------|
| `name` | Your blog name | `'Neon Koi'` |
| `tagline` | Short description/tagline | `'Celebrating the makers...'` |
| `author` | Default author name | `'Neon Koi Team'` |

### Display Options

| Option | Description | Default |
|--------|-------------|---------|
| `showSocialInFooter` | Show social icons in footer | `true` |
| `headerAction` | Right-side header button (or `null` to hide) | See below |

### URLs

| Option | Description | Example |
|--------|-------------|---------|
| `url` | Your production URL | `'https://neonkoi.example.com'` |

### Social Links

Update the `social` object with your profiles:

```typescript
social: {
  twitter: 'https://twitter.com/yourhandle',
  mastodon: 'https://mastodon.social/@yourhandle',
  github: 'https://github.com/yourusername',
}
```

#### Header Action Button

Add a call-to-action button on the right side of the header:

```typescript
headerAction: {
  label: 'Subscribe',
  href: '/subscribe',
  external: false,  // Set to true for external links
}
```

Set to `null` to hide the header action entirely:

```typescript
headerAction: null,
```

### Navigation

#### Main Navigation (Header)

The `navigation.main` array controls the header navigation links:

```typescript
navigation: {
  main: [
    { label: 'Updates', href: '/category/updates' },
    { label: 'Tips & Tutorials', href: '/category/tutorials' },
    // Add or remove items as needed
  ],
}
```

#### Footer Navigation

The `navigation.footer` array controls the footer links:

```typescript
footer: [
  { label: 'Search', href: '/search' },
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]
```

#### External Links

Any navigation item can link to external sites by adding `external: true`:

```typescript
{ label: 'GitHub', href: 'https://github.com/yourname', external: true }
```

External links automatically open in a new tab and show an external link indicator.

## Customizing Colors

Colors are defined in `src/styles/global.css` using Tailwind CSS v4's `@theme` directive.

To change the color scheme, look for the CSS custom properties in the `:root` section:

```css
:root {
  /* Primary brand colors */
  --color-primary: #c084fc;
  --color-secondary: #60a5fa;

  /* Dark mode colors */
  &.dark {
    --color-primary: #a855f7;
    --color-secondary: #3b82f6;
  }
}
```

The default theme uses a pink-purple-blue gradient scheme. You can replace these with any valid CSS color values.

## Adding Blog Posts

Blog posts are stored in `src/content/blog/` as Markdown files with YAML frontmatter:

```markdown
---
title: My Post Title
description: A brief description of the post
pubDate: 2024-01-15
thumbnail: https://placehold.co/640x360/8b5cf6/ffffff?text=My+Post
heroImage: https://placehold.co/1200x600/7c3aed/ffffff?text=My+Post
author: My Name
tags: [tag1, tag2, tag3]
draft: false
featured: true
---

Your post content here in Markdown format.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Post title |
| `description` | Yes | Short description for previews |
| `pubDate` | Yes | Publication date (YYYY-MM-DD) |
| `thumbnail` | Yes | Image for post cards (640x360 recommended) |
| `heroImage` | No | Large header image (1200x600 recommended) |
| `author` | Yes | Author name |
| `tags` | Yes | Array of tag strings |
| `draft` | Yes | Set to `true` to hide from site |
| `featured` | No | Set to `true` to feature on homepage |
| `updatedDate` | No | Last updated date |

## Verification Checklist

After making changes, verify:

- [ ] Header shows your blog name
- [ ] Footer shows your tagline
- [ ] Homepage title shows "Your Blog Name - Your Tagline"
- [ ] Social links in footer point to your profiles (if `showSocialInFooter: true`)
- [ ] Header action button appears (if configured)
- [ ] Navigation links work correctly
- [ ] External links open in new tab
- [ ] No hardcoded "Neon Koi" remains in the UI

## Need Help?

- Check the [Astro documentation](https://docs.astro.build)
- Review [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
- Look at existing blog posts in `src/content/blog/` for examples
