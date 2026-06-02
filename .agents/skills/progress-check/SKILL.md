---
name: progress-check
description: Use at the start of any work prompt, or any time you want to know where you are in the session. Reads section 14 of the filled implementation plan, compares it against what has been built, and returns a current status summary before any action is taken.
---

# Progress Check Skill

Use this skill to orient the session against the implementation plan before doing any work.

## Rules

- Read `docs/implementation-plan-template.md` and locate section 14: Implementation sequence.
- Review the current state of the codebase.
- For each step in section 14, assign one of three statuses:
  - DONE — fully implemented and working
  - IN PROGRESS — partially implemented or started
  - NOT STARTED — no implementation exists yet
- Do not infer DONE from partial work. If something is incomplete, it is IN PROGRESS.
- Do not reorder, reinterpret, or decompose the steps. Report them exactly as written in section 14.
- Do not start any implementation work.
- Stop after returning the status summary.

## Return format

Return a plain checklist using section 14's steps verbatim, with status labels:

```
Implementation sequence — current status:

[ DONE        ]  1. App shell and sample data
[ IN PROGRESS ]  2. Core rendering
[ NOT STARTED ]  3. Main interaction
[ NOT STARTED ]  4. Responsive styling
[ NOT STARTED ]  5. Accessibility pass
[ NOT STARTED ]  6. Visual polish
[ NOT STARTED ]  7. Validation and cleanup
[ NOT STARTED ]  8. Commit summary
```

Then add one line:

```
Current step: [STEP NUMBER AND NAME]
```

If the plan has not been filled yet, return:

```
No implementation plan found. Fill the plan using $planning before tracking progress.
```
