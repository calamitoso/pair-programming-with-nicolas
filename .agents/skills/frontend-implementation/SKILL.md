---
name: frontend-implementation
description: Use when implementing one bounded frontend slice in React, plain JavaScript, HTML, or CSS while preserving existing behavior and avoiding unnecessary dependencies.
---

# Frontend Implementation Skill

Use this skill to implement one bounded frontend slice.

Rules:
- React + plain JavaScript by default.
- No new dependencies without approval.
- Make the smallest useful change.
- Preserve working behavior.
- Keep code readable.
- Do not over-componentize.
- Stop after the requested slice.

Return:
1. Files changed
2. What works now
3. What remains
4. Any risks or assumptions

## Maintained prompt

```txt
Implement the next MVP slice from the approved implementation plan.

Scope:
[DESCRIBE THE SPECIFIC STEP]

Constraints:
- Do not change the plan unless a blocker appears.
- Do not add dependencies.
- Keep the code simple and readable.
- Prefer React with plain JavaScript.
- Preserve semantic HTML and accessibility.
- Stop after this slice is working.
- Summarize what changed and what remains.
```
