---
name: accessibility-review
description: Use when reviewing a frontend UI for accessibility issues, including semantic HTML, keyboard access, focus states, accessible names, contrast risks, and reduced motion concerns.
---

# Accessibility Review Skill

Review the current UI for:
- semantic HTML
- keyboard access
- visible focus
- accessible names
- button vs link semantics
- color contrast risks
- reduced motion concerns

Rules:
- Do not rewrite the app.
- Do not add ARIA where native HTML is sufficient.
- Prioritize fixes that matter within the timebox.

Return:
1. Critical issues
2. Quick wins
3. Optional improvements

## Maintained prompt

```txt
Review the current UI for accessibility.

Focus on:
- semantic HTML
- button vs link usage
- keyboard access
- visible focus states
- labels and accessible names
- color contrast risks
- reduced motion concerns
- unnecessary ARIA

Do not rewrite the app.

Return:
1. Critical issues to fix now
2. Quick wins
3. Optional improvements if time allows
```
