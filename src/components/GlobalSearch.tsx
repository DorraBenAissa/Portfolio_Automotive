import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { searchSite, searchCategories } from '../data/searchIndex'

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('Tout')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const results = searchSite(query, category)

  function goTo(to: string) {
    setOpen(false)
    setQuery('')
    navigate(to)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full border border-line-2 px-3 py-1.5 text-xs text-muted hover:border-line-2"
        aria-label="Recherche globale"
      >
        <span aria-hidden="true">⌕</span>
        <span className="hidden sm:inline">Rechercher</span>
        <kbd className="hidden sm:inline text-[10px] rounded border border-line-2 px-1">⌘K</kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-start justify-center pt-24 px-4" onClick={() => setOpen(false)}>
          <div
            className="w-full max-w-lg rounded-2xl bg-ink border border-line shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Rechercher : véhicules, constructeurs, concepts, experts, scénarios, commandes…"
              className="w-full px-5 py-4 text-sm outline-none bg-transparent border-b border-line"
            />
            <div className="flex flex-wrap gap-1.5 px-5 py-2 border-b border-line-2">
              {searchCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                    category === c ? 'bg-paper text-ink' : 'bg-surface text-muted'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="max-h-80 overflow-y-auto">
              {query.trim() === '' && (
                <p className="px-5 py-6 text-sm text-muted">Commencez à taper pour rechercher sur l’ensemble du site.</p>
              )}
              {query.trim() !== '' && results.length === 0 && (
                <p className="px-5 py-6 text-sm text-muted">Aucun résultat pour « {query} ».</p>
              )}
              {results.map((r) => (
                <button
                  key={r.id}
                  onClick={() => goTo(r.to)}
                  className="w-full text-left px-5 py-3 hover:bg-surface flex items-center justify-between gap-3"
                >
                  <span className="text-sm">{r.title}</span>
                  <span className="text-[11px] text-muted shrink-0">{r.category}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
