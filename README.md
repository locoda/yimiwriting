Customized based on Astroship from [Web3Templates](https://web3templates.com)

Deployed to [yimiwriting.com](https://www.yimiwriting.com/)

## Repository Overview

This project is a customized Astro-based website inspired by the Astroship starter template. It uses TailwindCSS for styling, content collections for Markdown-based posts, and several Astro integrations (SEO, Tailwind, sitemap, icons, and image compression).

### High-Level Structure

```
/
├── public/          # Static assets served as-is (favicon, portrait images)
├── src/
│   ├── assets/      # Image assets used within components
│   ├── components/  # Reusable UI components (UI, Navbar, Hero, Footer, etc.)
│   ├── content/     # Markdown content and collection schema
│   ├── layouts/     # Page layout wrappers (global <Layout>, <WorkLayout>)
│   ├── pages/       # Route-based pages (index, about, work, dynamic [slug])
│   ├── utils/       # Helper utilities (e.g., date formatting)
│   └── env.d.ts     # Type definitions
├── astro.config.mjs # Astro configuration and integrations
├── tailwind.config.cjs # Tailwind theme and plugins
├── package.json     # Dependencies and scripts
└── tsconfig.json    # TypeScript paths and options
```

### Key Concepts

- **Astro components (`.astro`)**: Combine HTML, JS/TS, and framework-agnostic templating. Components under `src/components` encapsulate common UI elements.
- **Layouts**: `src/layouts/Layout.astro` wraps pages with SEO tags, fonts, background styles, navbar, and footer. `WorkLayout.astro` extends this for portfolio entries.
- **Routing**: Files in `src/pages` map to site routes. Dynamic routes (e.g., `work/[slug].astro`) generate pages for each content entry.
- **Content Collections**: Markdown files in `src/content/work` store portfolio items. `src/content/config.ts` defines their schema and validates frontmatter with `zod`.
- **Utilities**: Small helpers like `getFormattedDate` live in `src/utils`.

### Next Steps for a Newcomer

1. **Run the Site Locally**
   - Install dependencies (`pnpm install` or `npm install`) and start the dev server (`pnpm dev` or `npm run dev`).
2. **Explore Astro & Tailwind**
   - Read Astro's [component syntax](https://docs.astro.build) and Tailwind's [utility classes](https://tailwindcss.com/docs).
3. **Add Content**
   - Create a new Markdown file in `src/content/work/` using the frontmatter schema to publish a new "work" entry.
4. **Customize Components**
   - Modify or extend components in `src/components` for additional UI patterns, ensuring consistent Tailwind classes.
5. **Learn Integrations**
   - Investigate Astro's SEO, sitemap, MDX, and icon integrations to add metadata, alternative content formats, and icons.
6. **Expand Routing**
   - Add new pages under `src/pages` and wire them into the navbar (`components/navbar/navbar.astro`).

