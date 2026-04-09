# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ink-based CLI application built with React and TypeScript. Created with [create-ink-app](https://github.com/vadimdemedes/create-ink-app). Uses ESM (`"type": "module"`).

## Commands

- **Build:** `pnpm build` (runs `tsc`, outputs to `dist/`)
- **Dev:** `pnpm dev` (runs `tsc --watch`)
- **Test (all):** `pnpm test` (runs prettier check + xo lint + ava tests)
- **Test only:** `npx ava` (skip formatting/linting)
- **Single test:** `npx ava test.tsx` (test file at project root)
- **Lint:** `npx xo`
- **Format check:** `npx prettier --check .`
- **Format fix:** `npx prettier --write .`

## Architecture

- `src/cli.tsx` — Entry point. Parses CLI flags with `meow` and renders the root `<App>` component via Ink's `render()`.
- `src/app.tsx` — Main React component rendered in the terminal.
- `test.tsx` — AVA tests using `ink-testing-library` to render and assert against terminal output.
- Compiled output goes to `dist/`; the CLI binary is `dist/cli.js`.

## Code Style

- **Linter:** XO with `xo-react` config and Prettier integration (`"prettier": true`).
- **Formatter:** Prettier using `@vdemedes/prettier-config` (overridden in `.prettierrc`: 120 char width, tabs, single quotes, trailing commas, semicolons).
- **TypeScript:** Extends `@sindresorhus/tsconfig`. Source in `source/`, compiled to `dist/`.
- `react/prop-types` rule is disabled — use TypeScript types instead.
- When importing local `.ts`/`.tsx` files, use `.js` extension (ESM requirement with TypeScript).
