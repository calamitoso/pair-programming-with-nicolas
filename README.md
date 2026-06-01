# pair-programming-with-nicolas

A lightweight frontend pair-programming starter for interview practice and live coding sessions.

The repo is designed to help me move quickly from a problem statement to a working, polished frontend solution while staying in control of the implementation.

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

This repo supports frontend pair-programming practice and live coding. The goal is not to create a production-grade system. The goal is to demonstrate structured problem solving, clear communication, practical AI fluency, and the ability to deliver a polished working frontend under time constraints.

I am the driver. I will write and explain the solution, clarify requirements, manage scope, and make implementation decisions. AI tools may assist with bounded tasks, but they do not own the solution or make final decisions.

The intended signal:

> I know how to turn ambiguity into an executable plan, use AI to increase throughput, preserve human judgment, and still maintain frontend craft.

The default stack is Vite, React, plain JavaScript, HTML, and CSS. Plain JavaScript preserves fast feedback cycles in constrained live coding. For production code, TypeScript may be the better tradeoff.

This starter intentionally avoids UI frameworks, routing, state management libraries, animation libraries, heavy test setup, complex build tooling, and overly abstract architecture by default. Those tools may be added when a specific problem requires them.

Use a lightweight working spec before coding, then implement in small slices.

The default flow is:

1. Restate the problem
2. Fill the lightweight implementation plan
3. Review and edit the plan
4. Build the app shell and data
5. Add core rendering
6. Add the main interaction
7. Add responsive styling
8. Add an accessibility pass
9. Add visual polish and motion if time allows
10. Validate manually
11. Commit with a clean message

Useful files:

- `AGENTS.md` — rules for AI-assisted work
- `docs/implementation-plan-template.md` — lightweight working spec
- `docs/interview-script.md` — phrases for live pair-programming
- `docs/github-checklist.md` — clean Git flow
- `docs/css-repertoire.md` — CSS techniques to keep available
- `prompts/` — reusable prompts for bounded AI assistance
- `.agents/skills/` — portable repo-scoped skills for Codex and compatible agents

Codex discovers repo-scoped `$skill-name` entries from `.agents/skills/` when launched inside this repository. Keep template-specific skills there so they travel with the project.

If a newly added skill does not appear in the `$` selector, restart Codex.
