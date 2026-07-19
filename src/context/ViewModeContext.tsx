import { createContext, useContext, useState, type ReactNode } from 'react'

type ViewMode = 'synthetique' | 'recherche'

interface ViewModeContextValue {
  mode: ViewMode
  setMode: (mode: ViewMode) => void
}

const ViewModeContext = createContext<ViewModeContextValue | null>(null)

export function ViewModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ViewMode>('recherche')
  return (
    <ViewModeContext.Provider value={{ mode, setMode }}>
      {children}
    </ViewModeContext.Provider>
  )
}

export function useViewMode() {
  const ctx = useContext(ViewModeContext)
  if (!ctx) throw new Error('useViewMode must be used within ViewModeProvider')
  return ctx
}

/** Wrap sections meant only for the "vue recherche" (approfondie) reading level. */
export function ResearchOnly({ children }: { children: ReactNode }) {
  const { mode } = useViewMode()
  if (mode === 'synthetique') return null
  return <>{children}</>
}
