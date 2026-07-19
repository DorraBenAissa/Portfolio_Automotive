import type { SourceReferenceProps } from '../types/source'

const typeLabels: Record<SourceReferenceProps['type'], string> = {
  analyse: 'Analyse',
  résultat: 'Résultat',
  figure: 'Figure',
  entretien: 'Entretien',
  proposition: 'Proposition',
}

export function SourceReference({ source, title, author, year, page, type }: SourceReferenceProps) {
  return (
    <p className="mt-2 text-xs text-muted border-t border-line pt-2">
      <span className="uppercase tracking-wide font-medium">{typeLabels[type]}</span>
      {' — '}
      {source} · <em>{title}</em> · {author} · {year}
      {page != null ? ` · p. ${page}` : ' · page à compléter'}
    </p>
  )
}
