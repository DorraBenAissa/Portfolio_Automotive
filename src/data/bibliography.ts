import type { Source } from '../types/source'

// Bibliographie à enrichir depuis le mémoire (voir /private-research-source).
export const bibliography: Source[] = [
  {
    id: 'memoire-2026',
    title: 'La simplexité dans les interfaces automobiles',
    author: 'Dorra Ben Aissa',
    year: 2026,
    type: 'production personnelle',
    page: null,
  },
]

export const dashboardMetrics = {
  vehiculesEtudies: null as number | null,
  periodesCouvertes: 4,
  constructeursCompares: 6,
  dimensionsUx: null as number | null,
  participantsQuestionnaire: null as number | null,
  expertsInterroges: null as number | null,
  scenariosAdaptatifs: 7,
  recommandations: null as number | null,
  sources: null as number | null,
  avancementProjetDoctoral: 'à compléter',
}
