export interface TimelinePeriod {
  id: string
  order: number
  label: string
  range: string
  characteristics: string[]
}

export const timelinePeriods: TimelinePeriod[] = [
  {
    id: 'mecanique',
    order: 1,
    label: 'Période mécanique',
    range: '1898 – 1960',
    characteristics: [
      'Simplicité fonctionnelle',
      'Informations limitées',
      'Commandes directes',
      'Faible quantité de données',
      'Forte matérialité',
      'Repères simples',
    ],
  },
  {
    id: 'electromecanique',
    order: 2,
    label: 'Période électromécanique',
    range: '1960 – 1990',
    characteristics: [
      'Multiplication des fonctions',
      'Ajout de voyants',
      'Multiplication des boutons',
      'Amélioration du confort',
      'Complexification progressive',
    ],
  },
  {
    id: 'numerique-hybride',
    order: 3,
    label: 'Période numérique et hybride',
    range: '1990 – 2015',
    characteristics: [
      'Apparition des écrans',
      'Navigation',
      'Informatique embarquée',
      'Coexistence analogique-numérique',
      'Menus et sous-menus',
      'Personnalisation',
    ],
  },
  {
    id: 'contemporaine',
    order: 4,
    label: 'Période contemporaine',
    range: '2015 – 2026',
    characteristics: [
      'Grands écrans',
      'Connectivité',
      'Assistants vocaux',
      'Intelligence artificielle',
      'Aides à la conduite',
      'Affichage tête haute',
      'Disparition partielle des boutons',
      'Simplification visuelle',
      'Complexification possible de l’usage',
    ],
  },
]

export interface TimelineEntry {
  id: string
  periodId: string
  date: string | null
  vehicle: string | null
  imagePlaceholder: boolean
  technologies: string[]
  controlType: string | null
  digitalizationLevel: number | null
  visualComplexity: number | null
  usageComplexity: number | null
  uxLearnings: string | null
  status: 'confirmé' | 'à compléter depuis le mémoire'
}

export const timelineEntries: TimelineEntry[] = [
  { id: 'entry-1', periodId: 'mecanique', date: null, vehicle: null, imagePlaceholder: true, technologies: [], controlType: null, digitalizationLevel: null, visualComplexity: null, usageComplexity: null, uxLearnings: null, status: 'à compléter depuis le mémoire' },
  { id: 'entry-2', periodId: 'electromecanique', date: null, vehicle: null, imagePlaceholder: true, technologies: [], controlType: null, digitalizationLevel: null, visualComplexity: null, usageComplexity: null, uxLearnings: null, status: 'à compléter depuis le mémoire' },
  { id: 'entry-3', periodId: 'numerique-hybride', date: null, vehicle: null, imagePlaceholder: true, technologies: [], controlType: null, digitalizationLevel: null, visualComplexity: null, usageComplexity: null, uxLearnings: null, status: 'à compléter depuis le mémoire' },
  { id: 'entry-4', periodId: 'contemporaine', date: null, vehicle: null, imagePlaceholder: true, technologies: [], controlType: null, digitalizationLevel: null, visualComplexity: null, usageComplexity: null, uxLearnings: null, status: 'à compléter depuis le mémoire' },
]

export const disappearedTransformedElements = [
  'Boutons physiques supprimés puis réintroduits',
  'Compteurs analogiques remplacés par des écrans',
  'Commandes regroupées dans un écran central',
  'Commandes vocales ajoutées',
  'Affichage tête haute développé',
  'Molettes et raccourcis physiques maintenus par certains constructeurs',
]
