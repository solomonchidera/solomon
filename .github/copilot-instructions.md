# Solomon's Personal Website - AI Coding Instructions

## Project Overview
This is a personal portfolio website built with SvelteKit 2 + TypeScript + TailwindCSS. It displays projects, social links, and real-time Discord status using the Lanyard API via WebSocket.

## Tech Stack & Architecture
- **Framework**: SvelteKit 2 with file-based routing (`src/routes/`)
- **Styling**: TailwindCSS with custom configuration for fonts (Bricolage Grotesque, Work Sans) and colors
- **Build**: Vite with `@sveltejs/adapter-auto` for deployment flexibility
- **State**: Real-time Discord presence via `sk-lanyard` WebSocket connection
- **TypeScript**: Strict mode enabled with bundler module resolution

## Key Development Workflows

### Running & Building
```bash
pnpm install              # Install dependencies (pnpm preferred)
pnpm run dev             # Dev server on port 5173 with HMR
pnpm run build           # Production build
pnpm run preview         # Preview production build
pnpm run check           # Type-check with svelte-check
pnpm run check:watch     # Watch mode type-checking
```

## Critical Patterns & Conventions

### Component Structure
- **Centralized config**: All site data (socials, projects, Discord UID) lives in [src/lib/index.ts](src/lib/index.ts) - update content there, not in components
- **SVG imports**: Icons use Vite's `?raw` query to import as strings: `import Icon from "./icon.svg?raw"`, then render with `{@html Icon}`
- **Reusable Link component**: Use `<Link href="...">text</Link>` from `$lib` for external links (applies consistent styling)

### Styling Approach
- **Custom Tailwind colors**: Only `dark.gray` (#181818) and `white` are defined - extend colors in [tailwind.config.js](tailwind.config.js)
- **Custom opacity**: `opacity-7` (0.07) added for subtle backgrounds - see `bg-opacity-7` usage in [+page.svelte](src/routes/+page.svelte)
- **Dot notation fonts**: Font families use dots: `font-bricolage.grotesque` and `font-work.sans` (defined in Tailwind config)
- **Grid background**: Body has a 96px grid pattern via CSS linear gradients in [app.css](src/app.css)
- **Global transitions**: All elements have `transition: all 100ms` applied via `*` selector in app.css

### SvelteKit Specifics
- **Layout transitions**: [+layout.svelte](src/routes/+layout.svelte) wraps content with blur transition on mount (`ready` state)
- **Page structure**: Main content in [+page.svelte](src/routes/+page.svelte) is the single-page portfolio
- **No routing**: Currently a single-page site - all content on homepage

### State Management
- **Lanyard Discord status**: WebSocket connection initialized with `useLanyard({ method: "ws", id: config.discordUid })` in +page.svelte
  - Shows real-time status (online/idle/dnd/offline) with animated pulse indicator
  - Conditionally rendered based on `$lanyard` store availability
  - Status SVG images expected in static/ root (e.g., `online.svg`)

### TypeScript Usage
- **Config interface**: Strict types for config object in [src/lib/index.ts](src/lib/index.ts) with `Config` interface
- **Prop types**: Components export typed props with `export let propName: type`
- **Path aliases**: Use `$lib` for `src/lib` imports (SvelteKit built-in)

## Adding New Content

### Add a Project
Edit the `projects` array in [src/lib/index.ts](src/lib/index.ts):
```typescript
{
    title: "project name",
    description: "brief description of what it does",
    url: "https://project-url.com"
}
```

### Add a Social Link
Add to `socials` array in [src/lib/index.ts](src/lib/index.ts) and place SVG icon in [src/lib/assets/](src/lib/assets/):
```typescript
{
    url: "https://social-url.com",
    icon: NewIcon,  // imported as: import NewIcon from "./assets/NewIcon.svg?raw"
    name: "Social Name"
}
```

### Update Personal Info
- **About text**: Edit paragraphs in the first flex container of [+page.svelte](src/routes/+page.svelte)
- **Profile image**: Replace `<<3.png` in static/ directory
- **Meta tags**: Update in [src/app.html](src/app.html) (title, description, OG tags)

## Dependencies & Integration
- **sk-lanyard**: Third-party Discord presence library (not maintained by Lanyard project) - WebSocket method for real-time updates
- **SVG handling**: Vite handles `.svg?raw` imports natively - no additional loader needed
- **No testing setup**: No test framework configured - add vitest if needed
