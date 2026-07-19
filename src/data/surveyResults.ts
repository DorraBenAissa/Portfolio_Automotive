import type { SurveyResult } from '../types/survey'

export const surveyResults: SurveyResult[] = [
  { id: 'profil', category: 'Profil des participants', question: 'Répartition des profils de conducteurs interrogés', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'pie' },
  { id: 'frequence', category: 'Fréquence de conduite', question: 'À quelle fréquence conduisez-vous ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  { id: 'type-vehicule', category: 'Type de véhicule', question: 'Quel type de véhicule conduisez-vous majoritairement ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'pie' },
  { id: 'preference-physique-tactile', category: 'Préférence physique ou tactile', question: 'Préférez-vous des commandes physiques ou tactiles ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  { id: 'perception-complexite', category: 'Perception de la complexité', question: 'Trouvez-vous les interfaces actuelles complexes ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  { id: 'facilite-acces', category: 'Facilité d’accès aux fonctions', question: 'Les fonctions essentielles sont-elles faciles d’accès ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  { id: 'gene-ecrans', category: 'Gêne causée par les écrans', question: 'Les écrans vous gênent-ils en conduite ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  { id: 'besoin-personnalisation', category: 'Besoin de personnalisation', question: 'Souhaitez-vous personnaliser votre interface ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
  {
    id: 'adaptation-contextuelle',
    category: 'Intérêt pour l’adaptation contextuelle',
    question: 'Souhaiteriez-vous que l’interface s’adapte au contexte de conduite ?',
    value: null,
    unit: null,
    status: 'à compléter depuis le mémoire',
    chartType: 'bar',
  },
  {
    id: 'urgence-masquage',
    category: 'Comportement en situation d’urgence',
    question: 'Souhaitez-vous que les informations secondaires soient masquées en situation d’urgence ?',
    value: 84.6,
    unit: '%',
    status: 'confirmé',
    chartType: 'stat',
    note: 'Résultat clé du mémoire, cité comme argument central en faveur de la hiérarchisation contextuelle.',
  },
  { id: 'confiance-automatisation', category: 'Confiance dans l’automatisation', question: 'Faites-vous confiance aux systèmes automatisés du véhicule ?', value: null, unit: null, status: 'à compléter depuis le mémoire', chartType: 'bar' },
]

export const whatDriversAskFor = [
  'Accès rapide aux fonctions essentielles',
  'Information claire',
  'Réduction de la surcharge visuelle',
  'Maintien de commandes physiques',
  'Personnalisation raisonnable',
  'Adaptation selon la situation',
  'Sentiment de contrôle',
  'Sécurité avant l’effet technologique',
]
