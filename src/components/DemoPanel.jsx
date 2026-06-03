import { useState, useEffect } from 'react'

const IS_DEMO_MODE = import.meta.env.VITE_APP_MODE === 'demo'

/**
 * DemoPanel
 *
 * Rendered as a sibling to the app root in main.jsx.
 * Only visible when VITE_APP_MODE=demo.
 *
 * Writes overrides to window.__DEMO__ which demo adapters read from.
 * App code never reads window.__DEMO__ directly — always via src/adapters/demo.js.
 *
 * To add a new control:
 *   1. Add a state value and input here
 *   2. Write the value to window.__DEMO__ in the useEffect
 *   3. Add a corresponding adapter function in src/adapters/demo.js
 *   4. Use the adapter in app code
 */

function todayString() {
  return new Date().toISOString().split('T')[0]
}

export default function DemoPanel() {
  const [open, setOpen] = useState(true)
  const [currentDate, setCurrentDate] = useState(todayString())

  // Initialize window.__DEMO__ with defaults on mount
  useEffect(() => {
    window.__DEMO__ = {
      currentDate: currentDate,
    }
  }, [])

  // Keep window.__DEMO__ in sync with panel state
  useEffect(() => {
    if (!window.__DEMO__) window.__DEMO__ = {}
    window.__DEMO__.currentDate = currentDate
  }, [currentDate])

  if (!IS_DEMO_MODE) return null

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        fontFamily: 'monospace',
        fontSize: '12px',
        background: '#1a1a1a',
        color: '#e0e0e0',
        borderTop: '1px solid #333',
      }}
    >
      {/* Header / toggle */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          padding: '6px 12px',
          background: 'transparent',
          border: 'none',
          color: '#888',
          cursor: 'pointer',
          textAlign: 'left',
          fontSize: '11px',
          letterSpacing: '0.05em',
        }}
      >
        {open ? '▼' : '▲'} DEMO CONTROLS · window.__DEMO__
      </button>

      {/* Controls */}
      {open && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            padding: '8px 12px 12px',
          }}
        >
          {/* Date override */}
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#888' }}>currentDate</span>
            <input
              type="date"
              value={currentDate}
              onChange={e => setCurrentDate(e.target.value)}
              style={{
                background: '#2a2a2a',
                border: '1px solid #444',
                color: '#e0e0e0',
                padding: '2px 6px',
                borderRadius: '3px',
                fontFamily: 'monospace',
                fontSize: '12px',
              }}
            />
          </label>

          {/* Add further controls here following the same pattern */}
        </div>
      )}
    </div>
  )
}
