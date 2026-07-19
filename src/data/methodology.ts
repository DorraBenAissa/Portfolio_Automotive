import type { MethodologyStep } from '../types/methodology'

export const methodologyDiagram: MethodologyStep[] = [
  { id: 'cadre-theorique', order: 1, label: 'Cadre théorique', description: 'Simplicité, complexité, simplexité, cognition, ergonomie.' },
  { id: 'analyse-historique', order: 2, label: 'Analyse historique', description: 'Évolution des tableaux de bord automobiles, 1898–2026.' },
  { id: 'corpus', order: 3, label: 'Constitution du corpus', description: 'Sélection des véhicules et documents analysés.' },
  { id: 'benchmark', order: 4, label: 'Benchmark constructeurs', description: 'Comparaison des stratégies UX par marque.' },
  { id: 'questionnaire', order: 5, label: 'Questionnaire quantitatif conducteur', description: 'Perceptions, préférences et attentes des conducteurs.' },
  { id: 'entretiens', order: 6, label: 'Entretiens qualitatifs experts', description: 'Recueil de connaissances professionnelles UX/IHM.' },
  { id: 'analyse-thematique', order: 7, label: 'Analyse thématique', description: 'Structuration des données qualitatives par thème.' },
  { id: 'triangulation', order: 8, label: 'Triangulation des données', description: 'Croisement des sources théoriques, historiques, conducteurs et experts.' },
  { id: 'discussion', order: 9, label: 'Discussion', description: 'Confrontation des constats et des résultats.' },
  { id: 'proposition-ux', order: 10, label: 'Proposition UX', description: 'Principes de conception et prototype d’interface adaptative.' },
]

export const dataSources = [
  {
    id: 'analyse-historique',
    title: 'Analyse historique',
    description:
      'Étude de l’évolution des tableaux de bord automobiles, avec un approfondissement du cas Renault.',
  },
  {
    id: 'questionnaire-conducteur',
    title: 'Questionnaire conducteur',
    description:
      'Étude des préférences, difficultés, perceptions et attentes des utilisateurs.',
  },
  {
    id: 'entretiens-experts',
    title: 'Entretiens experts',
    description:
      'Recueil de connaissances professionnelles auprès de spécialistes du design d’interaction, de l’UX et de l’IHM automobile.',
  },
]

export const triangulationExplanation =
  'Les résultats ne proviennent pas d’une source unique, mais du croisement entre la littérature scientifique, l’analyse des véhicules, la perception des conducteurs et l’expertise professionnelle.'

export const positioning = [
  'Démarche exploratoire',
  'Approche centrée utilisateur',
  'Analyse qualitative et quantitative',
  'Conception prospective',
  'Articulation entre UX Design, IHM, cognition et automobile',
]

export const methodologicalLimits = [
  'Taille limitée de l’échantillon',
  'Diversité partielle des profils',
  'Absence de tests en situation réelle de conduite',
  'Prototype conceptuel',
  'Absence d’accès aux données internes des constructeurs',
  'Nécessité de tests futurs sur simulateur ou véhicule',
  'Résultats non généralisables sans validation complémentaire',
]
