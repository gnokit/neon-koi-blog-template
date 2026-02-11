/**
 * Navigation item used in header and footer menus
 */
export interface NavItem {
  /** Display label for the link */
  label: string;
  /** URL href for the link */
  href: string;
  /** Whether this link opens in a new tab (external) */
  external?: boolean;
}

/**
 * Social media links
 */
export interface SocialLinks {
  twitter?: string;
  mastodon?: string;
  github?: string;
  /** Add additional social platforms as needed */
  [key: string]: string | undefined;
}

/**
 * Header action button/link (right side of header)
 */
export interface HeaderAction {
  /** Display text for the action */
  label: string;
  /** URL href for the action */
  href: string;
  /** Whether this link opens in a new tab */
  external?: boolean;
}

/**
 * Site configuration interface for Neon Koi template
 * Customize these values to match your brand and content
 */
export interface SiteConfig {
  /** Site name - displayed in header, footer, and SEO */
  name: string;
  /** Site tagline - displayed in footer */
  tagline: string;
  /** Canonical site URL */
  url: string;
  /** Default author/publisher name */
  author: string;
  /** Social media links */
  social: SocialLinks;
  /** Whether to show social links in footer (default: true) */
  showSocialInFooter: boolean;
  /** Optional header action button (null to hide) */
  headerAction: HeaderAction | null;
  /** Navigation menus */
  navigation: {
    /** Main header navigation links */
    main: NavItem[];
    /** Footer navigation links */
    footer: NavItem[];
  };
}

/**
 * Default site configuration
 * Modify these values to customize your site
 */
export const siteConfig: SiteConfig = {
  // Branding
  name: 'Neon Koi',
  tagline: 'Celebrating the makers, creators, and coders who shine.',

  // URLs
  url: 'https://gnokit.github.io/neon-koi-blog-template',

  // Author/Publisher
  author: 'Paul Chan',

  // Social Links
  social: {
    twitter: 'https://x.com/gnokit',
    github: 'https://github.com/gnokit/neon-koi-blog-template/',
  },

  // Show social links in footer navigation
  showSocialInFooter: true,

  // Header action button (right side of header)
  // Set to null to hide, or configure with label, href, and optional external flag
  headerAction: {
    label: 'Neon Koi',
    href: 'https://neonkoi.example.com',
    external: true,
  },

  // Navigation
  navigation: {
    main: [
      { label: 'Updates', href: '/updates' },
      { label: 'Tips & Tutorials', href: '/tutorials' },
    ],
    footer: [
      { label: 'Search', href: '/search' },
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
    ],
  },
};

export default siteConfig;
