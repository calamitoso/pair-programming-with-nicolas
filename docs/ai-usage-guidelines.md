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

## Demo mode

Set `VITE_APP_MODE=demo` in `.env.local` to activate demo mode. This renders the `DemoPanel` at the bottom of the viewport and initializes `window.__DEMO__` with default values.

### DemoPanel

`src/components/DemoPanel.jsx` is pre-built in the template. It is mounted as a sibling to the app root in `main.jsx` and has zero coupling to the app component tree. It is collapsible and only renders when `VITE_APP_MODE=demo`.

To add a new control, add an input to `DemoPanel` and write its value to `window.__DEMO__` in the sync `useEffect`. Then add a corresponding adapter in `src/adapters/demo.js`.

### Demo adapters

`src/adapters/demo.js` is the only place app code should read demo-controlled values. Never read from `window.__DEMO__` directly in component or utility code.

Available adapters out of the box:
- `getCurrentDate()` — returns the demo date override or today's real date
- `getCurrentDateString()` — same, as YYYY-MM-DD string
- `getTickSpeed()` — returns the demo tick speed or 1000ms

Add new adapters here as sessions require them. Follow the same pattern: read from `window.__DEMO__` with a safe fallback to the real value.

### Console inspection

At any point during a demo or test session, `window.__DEMO__` in the browser console shows the full current control surface and its live values.
