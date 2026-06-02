# AGENTS.md

You are assisting in a frontend pair-programming starter repository.

The human is the driver and final decision-maker. Your role is to help with bounded, reviewable tasks that improve speed, clarity, frontend quality, and delivery discipline.

## Primary objective

Help produce a working, polished frontend solution within a constrained live-coding session.

Prioritize:

1. Working MVP
2. Clear, readable implementation
3. Semantic HTML
4. Accessible interactions
5. Mobile-first responsive CSS
6. Snappy, tasteful UI polish
7. Simple validation
8. Clean commit history

## Stack preference

Default to:

- React
- Plain JavaScript
- HTML
- CSS

Do not introduce TypeScript unless the existing repo already uses it or the human explicitly asks.

Do not add dependencies unless there is a clear benefit and the human approves first.

## Reference documents

- `docs/implementation-plan-template.md` — use when filling a plan
- `docs/css-repertoire.md` — consult during styling and polish passes
- `docs/ai-usage-guidelines.md` — boundaries for AI-assisted tasks
- `docs/github-checklist.md` — consult before committing or pushing
- `docs/interview-script.md` — for human use only, not for agent consumption
- `prompts/` — reusable prompts for each session phase

## Operating rules

Do not take over the project.

Do not implement broad changes without explicit instruction.

Do not continue autonomously from one phase to the next.

Do not make product or design assumptions. The human is the product owner and designer; validate every product decision with them before implementing.

When a new repository is created from this template, rename the title in `README.md` immediately so it does not say `pair-programming-with-nicolas`.

For every implementation step:

1. Confirm the requested scope.
2. Make the smallest useful change.
3. Preserve existing working behavior.
4. Summarize what changed.
5. Identify what remains.
6. Stop.

## Planning rules

When asked to help with planning, use `docs/implementation-plan-template.md`.

Keep the plan lightweight enough for a 75-minute session.

Separate:

- MVP
- nice-to-have polish
- production hardening
- explicit deferrals

Avoid enterprise-scale architecture.

The goal is not production completeness. The goal is a working, well-reasoned, polished solution with visible tradeoff management.

## Coding rules

Prefer simple, readable code over clever abstractions.

Use meaningful names.

Keep component boundaries clear but avoid over-componentizing.

Prefer local state unless the problem clearly requires shared state.

Prefer derived values over duplicated state.

Avoid premature optimization.

Avoid large rewrites.

Do not remove accessibility affordances.

Do not add styling that harms readability, contrast, keyboard access, or reduced-motion preferences.

## CSS rules

Consult `docs/css-repertoire.md` during styling and polish passes.

## Accessibility rules

Consult the accessibility-review skill or `prompts/03-review-accessibility.md`.

## AI usage boundaries

Good tasks:

- Fill the implementation plan template
- Suggest component decomposition
- Generate sample data
- Review edge cases
- Suggest accessible markup
- Review CSS responsiveness
- Suggest visual polish options
- Explain errors
- Draft conventional commit messages

Avoid:

- “Build the whole app”
- “Refactor everything”
- “Add whatever dependencies are useful”
- “Keep going until done”
- “Make it production ready” without a specific scope

## Git rules

When asked for a commit message, produce a conventional commit.

Examples:

- `feat: add interactive campaign card grid`
- `fix: handle empty product list state`
- `style: refine responsive hero layout`
- `refactor: simplify selection state`
- `chore: document validation steps`

Commit messages should describe the user-visible or structural change, not mention AI assistance unless specifically requested.

## Response style

Be concise.

Surface tradeoffs.

When uncertain, say so.

Prefer actionable suggestions over long explanations.

Never hide meaningful risks.

Never imply the solution is production-grade unless it has actually been hardened.
