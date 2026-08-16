# byshuhrat.com

Personal site and blog of **Shuhrat Kobulov**, Frontend & Full-Stack Developer.

Live: [byshuhrat.com](https://byshuhrat.com)

Built with Next.js (App Router, static export), Tailwind CSS and MDX. Deployed
on Netlify.

## Project structure

```
├── app/
│   ├── [slug]/            # Blog post pages (MDX rendering, per-post OG image)
│   ├── posts/             # Post index
│   ├── rss.xml/           # RSS feed
│   ├── atom.xml/          # Atom feed
│   ├── sitemap.xml/       # Sitemap
│   ├── data.ts            # Bio, experience, projects, skills — single source of truth
│   ├── posts.ts           # Post loading + feed generation
│   ├── icons.tsx          # Shared SVG icon set
│   ├── Header.tsx         # Sticky nav + theme toggle
│   ├── Footer.tsx         # Socials + feed links
│   ├── ThemeToggle.tsx    # Light/dark switch
│   ├── Section.tsx        # Section heading + chip primitives
│   ├── PostList.tsx       # Shared post list (home + index)
│   ├── fonts.ts           # Montserrat (500/600/700/900)
│   └── global.css         # Theme tokens + base styles
├── public/                # Static content
│   ├── [post-slug]/       # One directory per post
│   │   └── index.md       # Post content + frontmatter
│   ├── Shuhrat_Kobulov_CV.pdf
│   └── bg-img.png         # Paper texture (light theme)
├── og/generateImage.js    # Open Graph card generation
└── netlify.toml           # Build config, redirects, security headers
```

## Getting started

Requires Node.js 22.8.0 or later.

```bash
npm install
npm run dev          # http://localhost:3000
```

### Production

```bash
npm run build        # static export to ./out
```

## Writing a post

1. Create a directory in `public/` named after the slug:

    ```bash
    mkdir public/my-new-post
    ```

2. Add `index.md` with frontmatter:

    ```markdown
    ---
    title: 'Your Post Title'
    date: '2026-08-16'
    spoiler: 'Brief description, used in the post list, feeds and social cards.'
    ---

    Your content here...
    ```

The post is picked up automatically by the post index, the home page, both
feeds, the sitemap and its own Open Graph card. Directories without an
`index.md` are ignored, so plain asset folders in `public/` are safe.

Optional per-post extras:

- `components.js` in the post directory exports custom MDX components, and an
  optional `Wrapper` that wraps the whole article.
- Images and videos referenced with relative paths resolve against the post
  directory. Local `.svg` files are inlined so they adapt to the theme.

## Theming

Colours live as CSS custom properties in `app/global.css` — never as Tailwind
`dark:` variants — so the correct palette applies before (and without)
JavaScript. An inline script in `app/layout.tsx` resolves the stored
preference onto `<html data-theme>` before first paint to avoid a flash.

To change a colour, edit the token in **all three** places: `:root` (light),
`:root[data-theme='dark']`, and the `prefers-color-scheme: dark` fallback
block.

## Updating your bio

Your headline, experience and projects are data, not markup — edit
`app/data.ts` and the home page, structured data, Open Graph cards and footer
all follow.

`app/data.ts` is kept deliberately in sync with the
[LinkedIn profile](https://www.linkedin.com/in/shuhrat-kobulov): job titles,
dates, company names and stack should match it exactly. When you update one,
update the other — and the CV PDF in `public/` too.

## Contributing

While this is a personal site, I welcome bug reports, performance
improvements and suggestions. Please open an issue first to discuss.
