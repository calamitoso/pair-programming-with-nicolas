/**
 * Demo adapters
 *
 * All values that can be overridden in demo mode go through this module.
 * App code never reads from window.__DEMO__ directly — it always calls an adapter.
 *
 * DemoPanel writes to window.__DEMO__ when controls change.
 * Adapters read from window.__DEMO__ with safe fallbacks to real values.
 *
 * To add a new overridable value:
 *   1. Add a control to DemoPanel
 *   2. Add an adapter function here
 *   3. Use the adapter in app code — never window.__DEMO__ directly
 */

/**
 * Returns the current date for the application.
 * In demo mode, returns window.__DEMO__.currentDate if set.
 * @returns {Date}
 */
export function getCurrentDate() {
  return window.__DEMO__?.currentDate
    ? new Date(window.__DEMO__.currentDate)
    : new Date()
}

/**
 * Returns the current date as an ISO date string (YYYY-MM-DD).
 * @returns {string}
 */
export function getCurrentDateString() {
  return getCurrentDate().toISOString().split('T')[0]
}

/**
 * Returns the tick interval in milliseconds.
 * In demo mode, returns window.__DEMO__.tickSpeed if set.
 * Default is 1000ms (1 second).
 * @returns {number}
 */
export function getTickSpeed() {
  return window.__DEMO__?.tickSpeed ?? 1000
}
