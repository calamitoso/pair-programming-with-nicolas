# AI Usage Guidelines

## Principle

Use AI as leverage, not as delegation of judgment.

The human remains responsible for:

- understanding the problem
- making tradeoffs
- approving the plan
- reviewing code
- validating behavior
- explaining decisions

## Good AI tasks

- Fill a planning template from the prompt
- Generate sample data
- Suggest component structure
- Identify edge cases
- Review accessibility
- Review responsive CSS
- Suggest visual polish
- Explain errors
- Draft commit messages

## Risky AI tasks

Avoid asking AI to:

- build the whole app
- decide architecture alone
- add dependencies freely
- continue until done
- perform broad rewrites
- make the solution production-ready without a scoped definition

## Review checklist for AI output

Before accepting AI output, check:

- Is the MVP still small?
- Did it add unnecessary dependencies?
- Did it preserve accessibility?
- Did it introduce abstractions too early?
- Can I explain every line?
- Does it match the problem?
- Does it keep the next step obvious?
