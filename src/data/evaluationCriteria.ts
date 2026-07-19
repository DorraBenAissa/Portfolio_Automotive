import type { EvaluationCriterion } from '../types/methodology'

export const strengths: EvaluationCriterion[] = [
  'Réduction potentielle de la charge cognitive',
  'Personnalisation',
  'Hiérarchisation',
  'Adaptation au contexte',
  'Accès rapide aux informations essentielles',
  'Amélioration potentielle de la sécurité',
  'Articulation smartphone, capteurs, logiciels et IA',
  'Expérience plus humaine',
  'Continuité entre physique et numérique',
].map((label, i) => ({ id: `force-${i}`, category: 'force' as const, label }))

export const limitations: EvaluationCriterion[] = [
  'Difficulté à mesurer la charge mentale',
  'Risque d’erreur dans l’interprétation de l’état du conducteur',
  'Collecte de données personnelles',
  'Confidentialité',
  'Cybersécurité',
  'Risque de suradaptation',
  'Changements pouvant désorienter',
  'Dépendance technologique',
  'Erreurs des capteurs',
  'Diversité des conducteurs',
  'Acceptabilité',
  'Apprentissage',
  'Standardisation limitée entre véhicules',
].map((label, i) => ({ id: `limite-${i}`, category: 'limite' as const, label }))

export const evaluationPerspectives: EvaluationCriterion[] = [
  'Tests utilisateurs',
  'Entretiens complémentaires',
  'Tests sur simulateur',
  'Observation en conduite',
  'Mesure des temps de réaction',
  'Mesure des erreurs',
  'Compréhension',
  'Acceptabilité',
  'Charge cognitive',
  'Sentiment de sécurité',
  'Confiance',
  'Satisfaction',
  'Comparaison interface fixe/interface adaptative',
  'Comparaison tactile/physique/hybride',
].map((label, i) => ({ id: `perspective-${i}`, category: 'perspective' as const, label }))
