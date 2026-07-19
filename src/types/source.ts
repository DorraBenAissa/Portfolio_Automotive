export type SourceType =
  | 'ouvrage'
  | 'article scientifique'
  | 'site'
  | 'vidéo'
  | 'constructeur'
  | 'norme'
  | 'entretien'
  | 'production personnelle'

export interface Source {
  id: string
  title: string
  author: string
  year: number
  type: SourceType
  page: number | null
  url?: string
}

export interface SourceReferenceProps {
  source: 'Mémoire de Master 2'
  title: string
  author: string
  year: number
  page: number | null
  type: 'analyse' | 'résultat' | 'figure' | 'entretien' | 'proposition'
}
