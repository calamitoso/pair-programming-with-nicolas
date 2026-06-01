---
name: responsive-css-review
description: Use when reviewing a frontend UI for responsive CSS issues, including mobile-first layout, overflow, spacing, typography, touch targets, and breakpoint behavior.
---

# Responsive CSS Review Skill

Review the current UI for responsive behavior.

Focus on:
- mobile-first layout
- overflow
- spacing
- typography scale
- touch targets
- breakpoint simplicity
- grid/flex behavior

Rules:
- Do not rewrite the full stylesheet.
- Suggest minimal changes.
- Preserve the visual direction unless there is a clear problem.

Return:
1. Issues to fix now
2. Minimal CSS changes
3. Optional polish

## Maintained prompt

```txt
Review the CSS and layout for mobile-first responsiveness.

Focus on:
- small viewport behavior
- medium and large viewport behavior
- overflow risks
- touch target size
- readable text sizing
- spacing consistency
- layout simplification opportunities
- unnecessary CSS complexity

Do not rewrite the full stylesheet.

Return:
1. Issues to fix now
2. Suggested minimal CSS changes
3. Optional polish
```
