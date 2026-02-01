# Agent Guidelines for Toast-e

## Project Overview
Nuxt 4 + Vue 3 application with Tailwind CSS 4. Uses pnpm as package manager.

## Build & Development Commands

### Development
```bash
pnpm dev             # Start dev server on http://localhost:3000
```

### Build & Deploy
```bash
pnpm build           # Build for production
pnpm generate        # Generate static site
pnpm preview         # Preview production build
pnpm install         # Install dependencies
```

### Testing & Quality
No test suite or linting configured yet. Follow Nuxt best practices and TypeScript strict mode.

## Code Style Guidelines

### TypeScript & Vue Components
- Use `<script setup lang="ts">` for all Vue components
- Explicitly declare `lang="ts"` in script tags
- No implicit any types - TypeScript strict mode enabled
- Use Nuxt auto-imports for composables and utilities

### Import Style
- Use Nuxt's auto-imported composables (ref, computed, etc.)
- For Nuxt config: `defineNuxtConfig`

### Naming Conventions
- Components: PascalCase (e.g., UserProfileCard.vue)
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- CSS classes: Tailwind utility classes only

### Formatting & Indentation
- Use tabs for indentation (see nuxt.config.ts)
- Single quotes for strings in TypeScript
- No trailing whitespace
- Consistent spacing around operators

### Component Structure
```vue
<template>
  <div class="...">
    <!-- content -->
  </div>
</template>

<script setup lang="ts">
// imports, refs, composables
</script>
```

### CSS & Styling
- Import Tailwind CSS v4: `@import "tailwindcss"`
- Define custom colors in app/assets/css/main.css with @theme directive
- Coffee color system: espresso (#3C2A21), mocha (#6F4E37), cappuccino (#A0785A), latte (#C4A484), cream (#F5E6D3), vanilla (#FFF9F0)
- Warm accents: amber (#D97706), caramel (#EAB308), honey (#F59E0B), cinnamon (#D68D45), gold (#B8860B)
- Use utility-first approach with Tailwind
- No custom CSS except in app/assets/css/main.css

### Error Handling
- Use try/catch for async operations
- Provide user-friendly error messages
- Log errors appropriately for debugging

### File Organization
- `app/app.vue` - Root component
- `app/components/` - Auto-imported Vue components
- `app/assets/css/` - Global stylesheets

### Nuxt-Specific Patterns
- Use Nuxt's file-based routing (add pages/ directory as needed)
- Use Nuxt auto-imports for composables
- Leverage Nuxt Image for optimized images

### Best Practices
- Keep components small and focused
- Use composition API pattern with `<script setup>`
- Leverage Nuxt's server-side rendering capabilities
- Optimize images with @nuxt/image
- Use TypeScript interfaces for data structures
- Prefer reactive refs for component state

### TypeScript Configuration
- Extends Nuxt-generated tsconfigs
- Strict mode enabled
- Type checking on build
