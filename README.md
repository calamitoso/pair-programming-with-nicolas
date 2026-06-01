# pair-programming-with-nicolas

A lightweight frontend pair-programming starter for interview practice and live coding sessions.

The repo is designed to help me move quickly from a problem statement to a working, polished frontend solution while staying in control of the implementation.

## Goals

This starter optimizes for:

- Fast local setup
- React + plain JavaScript
- HTML, CSS, and browser fundamentals
- Lightweight planning before coding
- AI-assisted but human-controlled implementation
- Semantic HTML
- Accessibility basics
- Mobile-first responsive UI
- Snappy, tasteful visual polish
- Clean Git history

## Non-goals

This is not a production app starter.

It intentionally avoids:

- TypeScript by default
- UI frameworks
- Routing
- State management libraries
- Animation libraries
- Heavy test setup
- Complex build tooling
- Overly abstract architecture

Those tools may be added when a specific problem requires them, but they should not be part of the default path.

## Quick start

```bash
npm install
npm run dev
```

Build check:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

Lint:

```bash
npm run lint
```

## Operating model

I am the driver.

AI may assist with bounded tasks, but I make the final decisions.

The default flow is:

1. Restate the problem
2. Fill the lightweight implementation plan
3. Review and edit the plan
4. Build the MVP
5. Add responsive styling
6. Add accessibility pass
7. Add visual polish if time allows
8. Validate manually
9. Commit with a clean message

## Useful files

- `AGENTS.md` — rules for AI-assisted work
- `docs/implementation-plan-template.md` — lightweight working spec
- `docs/interview-script.md` — phrases for live pair-programming
- `docs/github-checklist.md` — clean Git flow
- `docs/css-repertoire.md` — CSS techniques to keep available
- `prompts/` — reusable prompts for bounded AI assistance
- `skills/` — focused skill instructions for Codex or another agent

## Default stack

- Vite
- React
- Plain JavaScript
- CSS

The default choice is React with plain JavaScript to preserve fast feedback cycles during constrained live coding. In a production setting, TypeScript may be the better tradeoff for maintainability and shared contracts.
