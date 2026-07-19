import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItem {
  label: string
  to: string
}

export function NavDropdown({ label, items }: { label: string; items: NavItem[] }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const location = useLocation()
  const isActive = items.some((i) => location.pathname.startsWith(i.to))

  const openNow = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 150)
  }

  return (
    <div className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={`hover:text-stone-900 dark:hover:text-white transition-colors ${
          isActive ? 'text-stone-900 dark:text-white font-medium' : 'text-stone-500 dark:text-stone-400'
        }`}
      >
        {label}
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="w-64 rounded-xl border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-950 shadow-lg py-2">
            {items.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-stone-900 hover:text-stone-900 dark:hover:text-white"
              >
                {i.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
