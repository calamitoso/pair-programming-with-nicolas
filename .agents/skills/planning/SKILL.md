---
name: planning
description: Use when turning a frontend problem statement into a lightweight implementation plan with MVP scope, polish, tradeoffs, assumptions, and deferrals.
---

# Planning Skill

Use this skill to turn a problem statement into a lightweight implementation plan.

Rules:
- Use `docs/implementation-plan-template.md`.
- Keep the plan small enough for a constrained session.
- Separate MVP from polish.
- Include assumptions and explicit deferrals.
- Do not start coding.
- Stop after producing the plan.

Return:
1. Filled plan
2. Main tradeoffs
3. Recommended first implementation slice

## Maintained prompt

```txt
Fill out `docs/implementation-plan-template.md` for the problem below.

Constraints:
- Keep the plan lightweight enough for a constrained pair-programming session.
- Optimize for a working MVP first, then polish.
- Use React with plain JavaScript unless the repo clearly requires something else.
- Do not add dependencies unless there is a strong reason.
- Prioritize semantic HTML, accessible interactions, mobile-first responsive CSS, and a polished UI.
- Keep the plan practical.
- Avoid enterprise-scale architecture.
- Include tradeoffs and assumptions explicitly.
- Do not start coding yet.

Problem statement:
[PASTE PROBLEM HERE]
```
