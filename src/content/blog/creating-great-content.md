---
title: "Creating Great Content with Neon Koi"
description: "Learn how to write beautiful blog posts with Markdown formatting"
pubDate: 2025-02-08
thumbnail: /images/creating-content-blog.png
heroImage: /images/creating-content-blog.png
author: Neon Koi Team
tags: ["tutorial", "writing", "markdown"]
draft: false
featured: false
---

Neon Koi makes writing blog posts simple and enjoyable. This guide covers everything you need to know about creating content, from frontmatter fields to Markdown formatting.

## Frontmatter Explained

Every blog post starts with YAML frontmatter between triple dashes. Here's a complete example:

```yaml
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
pubDate: 2025-02-08
updatedDate: 2025-02-09
thumbnail: https://placehold.co/640x360/ec4899/ffffff?text=Thumbnail
heroImage: https://placehold.co/1200x600/db2777/ffffff?text=Hero
author: Your Name
tags: ["tutorial", "writing"]
draft: false
featured: false
---
```

### Field Reference

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | The post title displayed in headings and SEO |
| `description` | Yes | Short summary for previews and meta tags |
| `pubDate` | Yes | Publication date (YYYY-MM-DD format) |
| `updatedDate` | No | Date of last significant update |
| `thumbnail` | Yes | 640x360 image URL for post cards |
| `heroImage` | No | Large header image (1200x600 recommended) |
| `author` | Yes | Post author name |
| `tags` | Yes | Array of category tags |
| `draft` | No | Set to `true` to hide from production |
| `featured` | No | Set to `true` to highlight on homepage |

## Basic Markdown Formatting

### Headings

Use hash symbols for headings. Neon Koi styles these with your brand colors:

```markdown
# Heading 1 (Usually the post title)
## Heading 2
### Heading 3
#### Heading 4
```

### Text Formatting

Make text **bold** with double asterisks, *italic* with single asterisks, or ***both*** with triple asterisks.

```markdown
**bold text**
*italic text*
***bold and italic***
~~strikethrough~~
```

### Lists

Create unordered lists with dashes or asterisks:

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

Or numbered lists:

```markdown
1. First step
2. Second step
3. Third step
```

## Code Blocks

Inline code uses single backticks: `const example = true`

Fenced code blocks support syntax highlighting:

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet('Neon Koi'));
```

Specify the language after the opening backticks for proper highlighting.

## Blockquotes

Highlight important quotes or callouts:

> "The best way to predict the future is to invent it."
> — Alan Kay

```markdown
> "Your quote here"
> — Attribution
```

## Links and Images

Create links with square brackets and parentheses:

```markdown
[Link text](https://example.com)
[Internal link](/blog/welcome-to-neon-koi/)
```

Images use similar syntax with an exclamation mark:

```markdown
![Alt text](https://example.com/image.png)
```

## Tables

Organize data in tables:

| Feature | Status | Notes |
|---------|--------|-------|
| Dark mode | ✅ | Automatic toggle |
| RSS feeds | ✅ | Auto-generated |
| Search | 🚧 | Coming soon |

```markdown
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
```

## Horizontal Rules

Separate sections with horizontal rules:

---

```markdown
---
```

## Featured Posts

To highlight a post on the homepage, set `featured: true` in the frontmatter. The homepage displays featured posts prominently above the regular post grid. Only one or two posts should be featured at a time for maximum impact.

## Writing Tips

- Write descriptive titles that clearly communicate the topic
- Keep descriptions under 160 characters for optimal SEO
- Use descriptive alt text for images
- Tag posts consistently for better organization
- Use draft mode to work on posts before publishing

Happy writing!
