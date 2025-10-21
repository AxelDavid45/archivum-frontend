# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Archivum Frontend is a Next.js 15 application using the App Router with TypeScript. It integrates Material UI (MUI) v7 with React 19, featuring a theme system with light/dark mode support.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack)
- **Production build**: `npm run build` (uses Turbopack)
- **Start production server**: `npm start`
- **Linting**: `npm run lint` (eslint)

Development server runs on http://localhost:3000

## Architecture

### Styling & Theming

- **Material UI Integration**: Uses `@mui/material-nextjs/v15-appRouter` for Next.js App Router compatibility
- **Theme System**: Central theme configuration in `src/theme.ts` with:
  - Color scheme selector using CSS variables and class-based switching
  - Light/dark mode support via `colorSchemes`
  - Custom Roboto font from `next/font/google`
  - Component style overrides (e.g., MuiAlert)
- **Theme Provider Setup**: Root layout wraps app with `AppRouterCacheProvider`, `ThemeProvider`, and `CssBaseline`
- **Mode Switching**: `ModeSwitch` component allows runtime theme switching (system/light/dark) using `useColorScheme` hook

### Project Structure

- **App Directory**: `src/app/` contains Next.js 15 App Router pages and layouts
- **Components**: `src/components/` for reusable React components
- **Path Aliases**: `@/*` maps to `./src/*` (configured in tsconfig.json)
- **Turbopack**: Enabled in next.config.ts for faster builds

### Key Files

- `src/app/layout.tsx`: Root layout with MUI theme provider integration and color scheme initialization
- `src/theme.ts`: Material UI theme configuration (client-side)
- `src/components/ModeSwitch.tsx`: Theme toggle component using MUI's `useColorScheme`

## Technical Details

- **TypeScript**: Strict mode enabled, targeting ES2017
- **React**: Version 19.1.0 with React DOM
- **Next.js**: Version 15.5.4 with App Router
- **ESLint**: Uses Next.js core-web-vitals and TypeScript configs
- **Emotion**: Used as the styling engine for MUI (`@emotion/react`, `@emotion/styled`, `@emotion/cache`)
