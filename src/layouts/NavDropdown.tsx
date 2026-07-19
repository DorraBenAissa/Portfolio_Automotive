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
        className={`hover:text-paper transition-colors ${
          isActive ? 'text-paper font-medium' : 'text-muted'
        }`}
      >
        {label}
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-2 z-50">
          <div className="w-64 rounded-xl border border-line bg-ink shadow-lg py-2 animate-pop">
            {items.map((i) => (
              <Link
                key={i.to}
                to={i.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 text-sm text-dim hover:bg-surface hover:text-paper"
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
