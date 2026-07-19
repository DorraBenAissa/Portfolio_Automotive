export interface ManufacturerAnalysis {
  id: string
  name: string
  points: string[]
}

export const manufacturerAnalyses: ManufacturerAnalysis[] = [
  {
    id: 'tesla',
    name: 'Tesla',
    points: [
      'Minimalisme visuel',
      'Centralisation sur écran tactile',
      'Faible quantité de commandes physiques',
      'Cohérence numérique',
      'Apprentissage nécessaire',
      'Risque d’accès indirect à certaines fonctions',
    ],
  },
  {
    id: 'mercedes',
    name: 'Mercedes-Benz',
    points: [
      'Expérience immersive',
      'Richesse graphique',
      'Écrans étendus',
      'Personnalisation',
      'Expérience sensorielle',
      'Risque de densité informationnelle',
    ],
  },
  {
    id: 'renault',
    name: 'Renault',
    points: [
      'Équilibre entre innovation numérique et repères physiques',
      'Continuité avec les habitudes des conducteurs',
      'Adaptation selon les gammes',
      'Approche hybride',
      'Recherche d’un compromis entre modernité, accessibilité et sécurité',
    ],
  },
  {
    id: 'porsche',
    name: 'Porsche',
    points: [
      'Maintien de commandes physiques ou semi-physiques',
      'Orientation conducteur',
      'Accès direct aux fonctions importantes',
      'Équilibre entre sportivité, matérialité et numérique',
    ],
  },
  {
    id: 'byd',
    name: 'BYD',
    points: [
      'Forte intégration numérique',
      'Connectivité',
      'Écrans et services',
      'Innovation rapide',
      'Expérience technologique riche',
    ],
  },
  {
    id: 'nio',
    name: 'NIO',
    points: [
      'Intelligence artificielle',
      'Assistant embarqué',
      'Personnalisation',
      'Interaction vocale',
      'Approche centrée sur l’écosystème numérique',
    ],
  },
]

export const manufacturerAnalysisDisclaimer =
  'Cette analyse est une lecture UX indépendante réalisée par Dorra Ben Aissa. Elle ne constitue pas une évaluation officielle des constructeurs.'
