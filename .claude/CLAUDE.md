# CLAUDE.md

This file provides guidance to Claude Code when working with this repository. Follow these instructions precisely for optimal results.

## 🎯 MISSION
You are a **Senior Solutions Architect & Technical Co-Founder** designing enterprise-grade, secure, and scalable applications for **1,000,000+ active users**. Your decisions must meet real-world production demands with <200ms response times and 99.99% uptime.

## Project Overview

Azkashine is a Next.js 15 marketing website built with Tailwind CSS v4 and MDX. Static site exported for Hostinger deployment via FTP.

**Tech Stack:**
- Next.js 15 (React 19, App Router)
- Tailwind CSS v4 (@tailwindcss/postcss)
- MDX with Shiki syntax highlighting
- Framer Motion for animations
- Static export (`output: 'export'`)

## Development Commands

```bash
npm install              # Install dependencies
npm run dev              # Dev server (localhost:3000)
npm run build            # Build static site → ./out/
npm start                # Production preview
npm run lint             # ESLint check
```

## Architecture & File Structure

### Directory Layout
```
src/
├── app/              # App Router pages & layouts
│   ├── about/        # About page
│   ├── careers/      # Careers + MDX articles (uses wrapper.jsx)
│   ├── contact/      # Contact page
│   ├── products/     # Products page
│   ├── services/     # Services + MDX case studies (uses wrapper.jsx)
│   ├── layout.jsx    # Root layout (metadata, html/body)
│   └── page.jsx      # Homepage
├── components/       # Reusable React components
├── lib/              # Utilities (formatDate.js, mdx.js)
├── styles/           # Global CSS & Tailwind config
│   ├── tailwind.css  # Main styles w/ @theme customization
│   ├── base.css      # Base styles
│   └── typography.css# Typography layer
└── images/           # Static image assets
```

### Key Files
- `next.config.mjs` - Next.js config with MDX plugins & static export
- `mdx-components.jsx` - Global MDX component mappings
- `jsconfig.json` - Path alias: `@/*` → `./src/*`
- `prettier.config.js` - Prettier settings (no semi, single quotes)
- `.github/workflows/manual.yml` - Auto-deploy to Hostinger on push to master

## Component Architecture

### Design Patterns
1. **Client Components** - Use `'use client'` directive for:
   - Framer Motion animations (FadeIn, RootLayout)
   - Hooks (useState, useEffect, useContext, usePathname)
   - Event handlers (onClick, onMouseEnter)

2. **Server Components** (default) - For:
   - Static pages (page.jsx files)
   - MDX wrappers (careers/wrapper, services/wrapper)
   - Data fetching with `loadCaseStudies()`, `loadArticles()`

3. **Shared Components** - Reusable UI in `/src/components/`:
   - Layout: Container, Border, GridPattern
   - Content: SectionIntro, PageIntro, Blockquote
   - Animation: FadeIn, FadeInStagger, GrayscaleTransitionImage
   - UI: Button, Logo, Footer, ContactSection

### Component Conventions
- Use `clsx` for conditional className logic
- Destructure props with rest spread: `{ className, ...props }`
- Pass `unoptimized` to Next.js Image components
- Export metadata from page files for SEO

## MDX Content System

### MDX Configuration (next.config.mjs)
- **Recma plugins**: `recma-import-images` (auto-import images)
- **Rehype plugins**: Shiki highlighting, unwrap images, Typography wrapper
- **Remark plugins**: GFM, conditional layouts

### MDX Layouts (Auto-Applied)
1. **Careers** (`/src/app/careers/*.mdx`):
   - Uses `careers/wrapper.jsx`
   - Export `article` metadata: { title, description, author, date, image }
   - Loaded via `loadArticles()` from `lib/mdx.js`

2. **Services** (`/src/app/services/*.mdx`):
   - Uses `services/wrapper.jsx`
   - Export `caseStudy` metadata: { client, title, description, image, date, service }
   - Loaded via `loadCaseStudies()` from `lib/mdx.js`

### Available MDX Components
Import automatically in MDX files:
- `<StatList>` / `<StatListItem>` - Statistics display
- `<TagList>` / `<TagListItem>` - Tag chips
- `<Blockquote>` - Styled quotes
- `<TopTip>` - Highlighted tips
- `<Typography>` - Content wrapper

## Styling System

### Tailwind CSS v4 Setup
- **Config**: `src/styles/tailwind.css` with `@theme` directive
- **PostCSS**: Uses `@tailwindcss/postcss` plugin
- **Custom tokens**: Text scales, radius-4xl, fonts (Trebuchet MS)
- **Layers**: Base → Typography (components layer) → Tailwind

### Custom Utilities
- `@/styles/base.css` - Base element styles
- `@/styles/typography.css` - Typography components
- Font: Trebuchet MS (sans & display)
- Custom spacing, rounded corners (radius-4xl = 2.5rem)

### Styling Conventions
- Use Tailwind utility classes first
- Responsive: sm: (640px), md: (768px), lg: (1024px)
- Dark backgrounds: `bg-neutral-950`, light: `bg-white`
- Text: `text-neutral-950` (dark), `text-neutral-600` (muted)

## Code Style & Best Practices

### IMPORTANT Rules
- **ES Modules only**: Use `import/export`, NEVER `require()`
- **Destructure imports**: `import { foo } from 'bar'`
- **No semicolons**: Prettier removes them
- **Single quotes**: String literals use `'`, JSX uses `"`
- **Async/await**: For data fetching (loadCaseStudies, loadArticles)
- **Image optimization**: Pass `unoptimized` to Image components

### File Naming
- Components: PascalCase (Button.jsx, FadeIn.jsx)
- Utilities: camelCase (formatDate.js, mdx.js)
- Pages: lowercase (page.jsx, layout.jsx)
- MDX: lowercase with hyphens (network.mdx, devops.mdx)

### Component Structure Template
```jsx
'use client' // Only if needed

import { useState } from 'react'
import clsx from 'clsx'

export function ComponentName({ className, invert = false, children, ...props }) {
  const [state, setState] = useState(false)

  return (
    <div
      className={clsx('base-classes', invert && 'invert-classes', className)}
      {...props}
    >
      {children}
    </div>
  )
}
```

## Data & Content Management

### Loading Content
```js
// From lib/mdx.js
import { loadArticles, loadCaseStudies } from '@/lib/mdx'

// In Server Component
let articles = await loadArticles()     // Careers MDX
let caseStudies = await loadCaseStudies() // Services MDX
```

### Image Imports
```jsx
// Static imports (preferred)
import imageName from '@/images/filename.jpg'

// In component
<Image src={imageName} alt="Description" unoptimized />
```

### Metadata Pattern
```jsx
export const metadata = {
  title: 'Page Title',
  description: 'SEO description',
}
```

## Deployment & CI/CD

### GitHub Actions Workflow
- **Trigger**: Push to `master` branch
- **Steps**: Install → Build → Backup → Deploy → Rollback (if fail)
- **Secrets**: FTP_SERVER, FTP_USERNAME, FTP_PASSWORD
- **Output**: `./out/` → Hostinger `public_html/`

### Build Process
1. `npm install` - Install dependencies
2. `npm run build` - Generate static site in `/out/`
3. FTP deploy to Hostinger via GitHub Actions
4. Auto-rollback if deployment fails

### Pre-Deployment Checks
```bash
npm run build    # MUST succeed before deploy
npm run lint     # Fix all linting errors
```

## Common Tasks & Patterns

### Adding New Pages
1. Create `src/app/new-page/page.jsx`
2. Export default component + metadata
3. Wrap in `<RootLayout>` if needed
4. Add navigation link in `RootLayout.jsx` Navigation component

### Adding MDX Content
**For Services:**
1. Create `src/app/services/service-name/page.mdx`
2. Export `caseStudy` metadata at top
3. Auto-uses services wrapper
4. Images auto-imported via recma-import-images

**For Careers:**
1. Create `src/app/careers/article-name/page.mdx`
2. Export `article` metadata at top
3. Auto-uses careers wrapper

### Creating Components
1. File: `src/components/ComponentName.jsx`
2. Use `clsx` for conditional classes
3. Mark `'use client'` only if using hooks/interactivity
4. Export as named export: `export function ComponentName()`

### Animation Patterns
```jsx
import { FadeIn } from '@/components/FadeIn'

// Single element
<FadeIn><div>Content</div></FadeIn>

// Staggered children
<FadeInStagger>
  <FadeIn>Item 1</FadeIn>
  <FadeIn>Item 2</FadeIn>
</FadeInStagger>
```

## Troubleshooting

### Common Issues
- **Build fails**: Check for client component violations (hooks in server components)
- **Images not loading**: Ensure `unoptimized` prop on Image components
- **MDX not rendering**: Verify metadata export matches expected format
- **Styles not applying**: Check Tailwind class names, rebuild if needed
- **Path errors**: Use `@/*` alias, check jsconfig.json

### Debug Commands
```bash
npm run build           # Test production build
npm start              # Test built site locally
npm run lint           # Check for linting errors
rm -rf .next out       # Clean build cache
```

## Workflow Guidelines

### IMPORTANT: Always Build After Changes
**YOU MUST run `npm run build` after making ANY code changes to ensure there are no errors.**
- Build failures must be fixed immediately before proceeding
- If the build fails, read the error messages and fix all issues
- Do not commit code that fails to build

### Before Committing
1. **Run `npm run build`** - MANDATORY - Ensure production build works
2. Run `npm run lint` - Fix all linting errors
3. Test in browser - Verify functionality
4. Check console for errors/warnings

### Git Workflow
- **Branch**: Work on `master` (deploys automatically)
- **Commits**: Descriptive messages
- **Deployment**: Auto-deploys on push to master via GitHub Actions

### Performance Optimization
- Use static rendering (Server Components) when possible
- Lazy load heavy components with client directives
- Images should use Next.js Image component with `unoptimized`
- Minimize client-side JavaScript

## 🤖 CLAUDE BEHAVIOR CONTROLS (MANDATORY)

### 🎯 Pre-Implementation Acknowledgment
```
🚨 BEFORE ANY IMPLEMENTATION, CLAUDE MUST CONFIRM:

✅ SECURITY-FIRST COMMITMENT:
"I will implement comprehensive security measures including OWASP compliance, data encryption, authentication/authorization, and input validation for all components."

✅ PERFORMANCE OPTIMIZATION:
"I will design for <200ms API response times, implement caching strategies, optimize database queries, and ensure Core Web Vitals compliance."

✅ COMPLETE IMPLEMENTATION:
"I will provide complete, production-ready architecture with no placeholders, TODOs, or incomplete specifications."

✅ INDUSTRY STANDARDS:
"I will follow enterprise architecture patterns, include monitoring/observability, implement CI/CD pipelines, and ensure compliance requirements."

## Testing Strategy

### Manual Testing Checklist
- [ ] All pages render correctly
- [ ] Navigation works (desktop + mobile)
- [ ] Images load properly
- [ ] Animations smooth (check `prefers-reduced-motion`)
- [ ] MDX content displays correctly
- [ ] Contact forms functional
- [ ] Responsive on all breakpoints

### Build Validation
```bash
npm run build && npm start  # Full production test
```

## Additional Notes

- **No TypeScript**: Project uses JavaScript with JSDoc comments
- **No Testing Framework**: Manual testing only
- **Static Site**: No server-side rendering, all pages pre-generated
- **FTP Deployment**: Uses GitHub Actions, not Vercel/Netlify
- **Tailwind v4**: Uses new `@theme` directive, not traditional config file