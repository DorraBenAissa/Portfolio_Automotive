import { useEffect, useState } from 'react'

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement
      const scrollable = doc.scrollHeight - doc.clientHeight
      setProgress(scrollable > 0 ? Math.min(100, (doc.scrollTop / scrollable) * 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed top-16 left-0 right-0 h-0.5 bg-transparent z-30" aria-hidden="true">
      <div className="h-full bg-paper transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  )
}

export interface TocSection {
  id: string
  label: string
}

function CiteThisPage({ pageTitle }: { pageTitle: string }) {
  const [copied, setCopied] = useState(false)

  function cite() {
    const url = window.location.href
    const year = new Date().getFullYear()
    const text = `Ben Aissa, D. (${year}). ${pageTitle}. Automotive UX Research. ${url}`
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <button
      type="button"
      onClick={cite}
      className="w-full text-left rounded-lg border border-line px-3 py-2 text-xs text-muted hover:border-line-2"
    >
      {copied ? 'Référence copiée ✓' : 'Citer cette page'}
    </button>
  )
}

export function ArticleSidebar({ sections, pageTitle }: { sections: TocSection[]; pageTitle: string }) {
  const [activeId, setActiveId] = useState(sections[0]?.id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting)
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-96px 0px -70% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  if (sections.length === 0) return null

  return (
    <aside className="hidden xl:block fixed top-32 right-[calc(50%-38rem)] w-52">
      <p className="text-xs font-medium uppercase tracking-wide text-muted mb-3">Sommaire</p>
      <ul className="space-y-2 border-l border-line">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block pl-3 -ml-px border-l-2 text-sm transition-colors ${
                activeId === s.id
                  ? 'border-paper text-paper font-medium'
                  : 'border-transparent text-muted hover:text-dim hover:text-dim'
              }`}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <CiteThisPage pageTitle={pageTitle} />
      </div>
    </aside>
  )
}
