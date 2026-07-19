export type IdentityVisibility = 'public' | 'anonymous' | 'private'

export interface Expert {
  id: string
  displayLabel: string
  name: string | null
  role: string | null
  organization: string | null
  domain: string
  bio: string | null
  photoUrl: string | null
  interviewDate: string | null
  publicationConsent: boolean
  identityVisibility: IdentityVisibility
  quoteApproval: boolean
  themes: string[]
  summary: string | null
  source: 'Mémoire de Master 2'
  status: 'publié' | 'à compléter depuis le mémoire'
}

export interface ExpertThemeSynthesis {
  theme: string
  questions: string[]
  synthesis: string
  points: string[]
}

export interface ExpertMatrixRow {
  theme: string
  expertA: string
  expertB: string
  expertC: string
  convergence: string
  divergence: string
  uxImplication: string
  status: 'vérifié' | 'brouillon'
}
