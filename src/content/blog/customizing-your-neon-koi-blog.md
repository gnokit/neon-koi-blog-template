---
title: "Customizing Your Neon Koi Blog"
description: "A step-by-step guide to personalizing your Neon Koi template"
pubDate: 2025-02-09
thumbnail: /images/custom-neon-koi-blog.png
heroImage: /images/custom-neon-koi-blog.png
author: Neon Koi Team
tags: ["tutorial", "customization", "configuration"]
draft: false
featured: false
---

Neon Koi is designed to be easily customizable. This guide walks you through the key files and settings you'll want to modify to make the template your own.

## Editing Site Configuration

The main configuration file is located at `src/config/site.ts`. This TypeScript file contains a `siteConfig` object with all your site's core settings. The file is fully typed, so your editor will provide helpful suggestions as you work.

### Changing Brand Identity

Start by updating the basic branding information:

```typescript
export const siteConfig: SiteConfig = {
  // Branding
  name: 'Your Site Name',
  tagline: 'Your compelling tagline here',

  // URLs
  url: 'https://yoursite.com',

  // Author/Publisher
  author: 'Your Name',
  // ...
};
```

The `name` appears in the header, footer, browser tab, and SEO meta tags. The `tagline` displays in the footer below your site name. The `url` should be your production domain (without trailing slash), and `author` is used as the default author for blog posts.

### Customizing Navigation

The navigation configuration is divided into `main` (header) and `footer` sections:

```typescript
navigation: {
  main: [
    { label: 'Blog', href: '/blog' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  footer: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
},
```

Each navigation item accepts:
- `label`: The display text
- `href`: The URL (can be internal or external)
- `external`: Set to `true` for external links (opens in new tab)

### Social Links Setup

Configure your social media profiles in the `social` object:

```typescript
social: {
  twitter: 'https://twitter.com/yourhandle',
  mastodon: 'https://mastodon.social/@yourhandle',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourprofile',
},
```

The social interface supports additional platforms via the index signature. To hide social links in the footer, set `showSocialInFooter: false`.

### Header Action Button

The header can display a call-to-action button on the right side:

```typescript
headerAction: {
  label: 'Subscribe',
  href: '/subscribe',
  external: false,
},
```

Set `headerAction: null` to hide the button entirely.

## Color Customization

Colors are defined in `src/styles/global.css` using Tailwind v4's `@theme` directive:

```css
@theme {
  --color-primary: #5B4EE6;
  --color-primary-dark: #4a3fd1;

  --color-glitch-pink: #E83E8C;
  --color-glitch-purple: #5B4EE6;
  --color-glitch-blue: #60a5fa;

  /* Background colors */
  --color-bg-light: #ffffff;
  --color-bg-dark: #0f0f0f;

  /* Text colors */
  --color-text-light: #333333;
  --color-text-dark: #e5e5e5;
}
```

Modify these CSS custom properties to match your brand. The template uses these variables throughout, so changing them here updates the entire site. The `dark` variant is applied when the `html` element has the `.dark` class.

## Next Steps

Once you've customized your site configuration, you're ready to start creating content. Check out our guide on [Creating Great Content](/blog/creating-great-content/) to learn about writing blog posts with Markdown formatting.
