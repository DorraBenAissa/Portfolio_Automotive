export interface ConceptDefinition {
  id: string
  term: string
  category: 'perception-cognition' | 'interaction' | 'sécurité'
}

export const theoreticalConcepts: ConceptDefinition[] = [
  { id: 'simplicite', term: 'Simplicité', category: 'perception-cognition' },
  { id: 'complexite', term: 'Complexité', category: 'perception-cognition' },
  { id: 'simplexite', term: 'Simplexité', category: 'perception-cognition' },
  { id: 'perception', term: 'Perception', category: 'perception-cognition' },
  { id: 'attention', term: 'Attention', category: 'perception-cognition' },
  { id: 'selection', term: 'Sélection', category: 'perception-cognition' },
  { id: 'organisation', term: 'Organisation', category: 'perception-cognition' },
  { id: 'interpretation', term: 'Interprétation', category: 'perception-cognition' },
  { id: 'cognition', term: 'Cognition', category: 'perception-cognition' },
  { id: 'memoire', term: 'Mémoire', category: 'perception-cognition' },
  { id: 'anticipation', term: 'Anticipation', category: 'perception-cognition' },
  { id: 'decision', term: 'Prise de décision', category: 'perception-cognition' },
  { id: 'action', term: 'Action', category: 'perception-cognition' },
  { id: 'charge-cognitive', term: 'Charge cognitive', category: 'perception-cognition' },
  { id: 'ihm', term: 'Interaction homme-machine', category: 'interaction' },
  { id: 'ergonomie-cognitive', term: 'Ergonomie cognitive', category: 'interaction' },
  { id: 'ux', term: 'Expérience utilisateur', category: 'interaction' },
  { id: 'securite-conduite', term: 'Sécurité de conduite', category: 'sécurité' },
]

export interface ComparisonColumn {
  id: 'simplicite' | 'complexite' | 'simplexite'
  title: string
  points: string[]
}

export const simplicityComparison: ComparisonColumn[] = [
  {
    id: 'simplicite',
    title: 'Simplicité',
    points: ['Peu d’éléments', 'Compréhension immédiate', 'Faible effort apparent'],
  },
  {
    id: 'complexite',
    title: 'Complexité',
    points: [
      'Nombreuses fonctions',
      'Plusieurs niveaux d’interaction',
      'Richesse technologique',
      'Effort mental potentiel',
    ],
  },
  {
    id: 'simplexite',
    title: 'Simplexité',
    points: [
      'Organisation intelligente de la complexité',
      'Sélection de l’information pertinente',
      'Anticipation',
      'Adaptation',
      'Rapidité d’action',
      'Maintien des fonctions nécessaires',
    ],
  },
]

export const appliedDefinition =
  'La simplexité ne consiste pas à vider l’interface ou à supprimer les fonctionnalités. Elle consiste à organiser intelligemment une réalité technologique complexe afin de présenter au conducteur l’information pertinente, au bon moment, sous la modalité la plus adaptée.'

export const perceptionActionChain = [
  'Stimuli provenant de la route et du véhicule',
  'Perception',
  'Attention',
  'Sélection',
  'Organisation',
  'Interprétation',
  'Décision',
  'Action',
]

export const cognitiveLoadImpacts = [
  'La compréhension',
  'Le temps de traitement',
  'La prise de décision',
  'Le stress',
  'La sécurité',
  'Le confort',
  'La performance de conduite',
]

export const visualVsUsageSimplicity = {
  title: 'Simplicité visuelle ≠ simplicité d’usage',
  explanation:
    'Une interface visuellement minimaliste peut devenir complexe à utiliser lorsque les commandes importantes sont cachées dans plusieurs menus.',
}
