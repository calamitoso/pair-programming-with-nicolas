---
name: visual-polish
description: Use when improving frontend UI polish after the MVP works, focusing on hierarchy, spacing, rhythm, interactive states, subtle transitions, and reduced-motion support.
---

# Visual Polish Skill

Use this skill to improve the perceived quality of the UI after the MVP works.

Focus on:
- hierarchy
- spacing
- rhythm
- interactive states
- subtle transitions
- CSS-only polish
- reduced-motion support

Rules:
- Do not change core behavior.
- Do not add dependencies.
- Avoid noisy or decorative motion.
- Preserve contrast and accessibility.

Return:
1. Proposed polish changes
2. Why they help
3. Small implementation patch

## Maintained prompt

```txt
Suggest and implement a small visual polish pass.

Constraints:
- Keep the MVP behavior unchanged.
- Do not add dependencies.
- Prefer CSS-only polish.
- Use purposeful motion only.
- Respect prefers-reduced-motion.
- Preserve contrast and focus states.
- Avoid making the UI feel noisy.

Focus on:
- hierarchy
- spacing
- responsive rhythm
- hover/focus states
- subtle transitions
- brand-neutral but polished visual details

Stop after a small, reviewable change.
Summarize what changed.
```
