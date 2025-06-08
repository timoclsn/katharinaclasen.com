# AGENT.md - Katharina Clasen Website

## Commands

- `pnpm dev` - Start all apps in development mode
- `pnpm build` - Build all apps for production
- `pnpm lint` - Run ESLint across all workspaces
- `pnpm typecheck` - TypeScript type checking across all workspaces
- `pnpm format` - Format code with Prettier (writes to files)
- `cd apps/website && pnpm dev` - Run website only
- `cd apps/content && pnpm dev` - Run Sanity CMS only (port 3001)

## Architecture

- **Monorepo**: Turbo + pnpm workspaces, Node.js 22+
- **apps/website**: Next.js 15, React 19, TypeScript, Tailwind CSS 4, Framer Motion
- **apps/content**: Sanity CMS for content management (schemas, media)
- **packages/**: Shared ESLint config only
- **Content**: Sanity integration with next-sanity, MDX support
- **Styling**: Tailwind CSS with container queries, animations, typography plugin

## Code Style

- **TypeScript**: Strict mode, no explicit types when inferrable
- **Imports**: Relative paths for internal (`../../lib/utils`), exact names for external (`"next/link"`)
- **Components**: Named exports preferred, design system in `src/design-system/`
- **Formatting**: Prettier with Tailwind plugin (sorts classes automatically)
- **ESLint**: Next.js + Prettier config, extends `next/core-web-vitals`
