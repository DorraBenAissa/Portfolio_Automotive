import type { VehicleCommand, CriticalityLevelInfo } from '../types/command'

export const criticalityLevels: CriticalityLevelInfo[] = [
  {
    level: 1,
    title: 'Niveau 1 — Critique, physique obligatoire',
    subtitle: 'Clignotants, essuie-glaces et lave-glace, feux et appels de phares, warning, klaxon',
    justifications: [
      'Accès instantané',
      'Réaction réflexe',
      'Geste mémorisé',
      'Urgence',
      'Action sans regarder l’écran',
    ],
  },
  {
    level: 2,
    title: 'Niveau 2 — Conduite, physique ou semi-physique',
    subtitle: 'Start/Stop, sélecteur P/R/N/D, frein de parking, modes de conduite, régulateur et limiteur de vitesse',
    justifications: [],
  },
  {
    level: 3,
    title: 'Niveau 3 — Confort immédiat, accès direct',
    subtitle: 'Volume audio, température, ventilation, désembuage, dégivrage avant et arrière',
    justifications: [],
  },
  {
    level: 4,
    title: 'Niveau 4 — Numérique acceptable',
    subtitle: 'Navigation détaillée, multimédia avancé, personnalisation, réglages, historique, applications, services connectés',
    justifications: [],
  },
]

export const vehicleCommands: VehicleCommand[] = [
  // Niveau 1 — critique, physique obligatoire
  { id: 'clignotants', name: 'Clignotants', category: 'Sécurité', criticality: 1, criticalityLabel: 'Critique', recommendedModality: 'Physique', cognitiveJustification: 'Action réflexe, geste mémorisé', eyesFree: true, frequency: 'Très fréquente', context: 'Toute conduite', automatable: false, requiresHumanValidation: true },
  { id: 'essuie-glaces', name: 'Essuie-glaces et lave-glace', category: 'Sécurité', criticality: 1, criticalityLabel: 'Critique', recommendedModality: 'Physique', cognitiveJustification: 'Réaction immédiate à un besoin de visibilité', eyesFree: true, frequency: 'Variable', context: 'Météo', automatable: true, requiresHumanValidation: true },
  { id: 'feux-phares', name: 'Feux et appels de phares', category: 'Sécurité', criticality: 1, criticalityLabel: 'Critique', recommendedModality: 'Physique', cognitiveJustification: 'Action réflexe, urgence potentielle', eyesFree: true, frequency: 'Fréquente', context: 'Nuit, croisement', automatable: true, requiresHumanValidation: true },
  { id: 'warning', name: 'Warning', category: 'Sécurité', criticality: 1, criticalityLabel: 'Critique', recommendedModality: 'Physique', cognitiveJustification: 'Urgence, accès instantané sans recherche visuelle', eyesFree: true, frequency: 'Rare', context: 'Urgence', automatable: false, requiresHumanValidation: true },
  { id: 'klaxon', name: 'Klaxon', category: 'Sécurité', criticality: 1, criticalityLabel: 'Critique', recommendedModality: 'Physique', cognitiveJustification: 'Réaction réflexe immédiate', eyesFree: true, frequency: 'Rare', context: 'Urgence', automatable: false, requiresHumanValidation: true },

  // Niveau 2 — conduite, physique ou semi-physique
  { id: 'start-stop', name: 'Start/Stop', category: 'Conduite', criticality: 2, criticalityLabel: 'Conduite', recommendedModality: 'Physique ou semi-physique', cognitiveJustification: 'Action ponctuelle mais structurante du trajet', eyesFree: true, frequency: 'Ponctuelle', context: 'Début/fin de trajet', automatable: false, requiresHumanValidation: true },
  { id: 'selecteur-prnd', name: 'Sélecteur P/R/N/D', category: 'Conduite', criticality: 2, criticalityLabel: 'Conduite', recommendedModality: 'Physique ou semi-physique', cognitiveJustification: 'Mémoire musculaire, action engageante', eyesFree: true, frequency: 'Fréquente', context: 'Manœuvre', automatable: false, requiresHumanValidation: true },
  { id: 'frein-parking', name: 'Frein de parking', category: 'Conduite', criticality: 2, criticalityLabel: 'Conduite', recommendedModality: 'Physique ou semi-physique', cognitiveJustification: 'Sécurité à l’arrêt', eyesFree: true, frequency: 'Fréquente', context: 'Arrêt/stationnement', automatable: true, requiresHumanValidation: true },
  { id: 'modes-conduite', name: 'Modes de conduite', category: 'Conduite', criticality: 2, criticalityLabel: 'Conduite', recommendedModality: 'Physique ou semi-physique', cognitiveJustification: 'Changement de comportement du véhicule', eyesFree: false, frequency: 'Occasionnelle', context: 'Route, météo', automatable: true, requiresHumanValidation: true },
  { id: 'regulateur-limiteur', name: 'Régulateur et limiteur de vitesse', category: 'Conduite', criticality: 2, criticalityLabel: 'Conduite', recommendedModality: 'Physique ou semi-physique', cognitiveJustification: 'Réglage fréquent en roulant', eyesFree: true, frequency: 'Fréquente', context: 'Autoroute, route', automatable: true, requiresHumanValidation: true },

  // Niveau 3 — confort immédiat, accès direct
  { id: 'volume-audio', name: 'Volume audio', category: 'Confort', criticality: 3, criticalityLabel: 'Confort', recommendedModality: 'Accès direct', cognitiveJustification: 'Réglage fréquent, faible enjeu sécuritaire', eyesFree: true, frequency: 'Très fréquente', context: 'Toute conduite', automatable: false, requiresHumanValidation: false },
  { id: 'temperature', name: 'Température', category: 'Confort', criticality: 3, criticalityLabel: 'Confort', recommendedModality: 'Accès direct', cognitiveJustification: 'Réglage ponctuel de confort', eyesFree: true, frequency: 'Occasionnelle', context: 'Toute conduite', automatable: true, requiresHumanValidation: false },
  { id: 'ventilation', name: 'Ventilation', category: 'Confort', criticality: 3, criticalityLabel: 'Confort', recommendedModality: 'Accès direct', cognitiveJustification: 'Réglage ponctuel de confort', eyesFree: true, frequency: 'Occasionnelle', context: 'Toute conduite', automatable: true, requiresHumanValidation: false },
  { id: 'desembuage', name: 'Désembuage', category: 'Confort', criticality: 3, criticalityLabel: 'Confort', recommendedModality: 'Accès direct', cognitiveJustification: 'Besoin ponctuel lié à la visibilité', eyesFree: false, frequency: 'Occasionnelle', context: 'Météo', automatable: true, requiresHumanValidation: false },
  { id: 'degivrage', name: 'Dégivrage avant et arrière', category: 'Confort', criticality: 3, criticalityLabel: 'Confort', recommendedModality: 'Accès direct', cognitiveJustification: 'Besoin ponctuel lié à la visibilité', eyesFree: false, frequency: 'Occasionnelle', context: 'Météo, hiver', automatable: true, requiresHumanValidation: false },

  // Niveau 4 — numérique acceptable
  { id: 'navigation-detaillee', name: 'Navigation détaillée', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Contenu riche, consultable à l’arrêt', eyesFree: false, frequency: 'Occasionnelle', context: 'Préparation de trajet', automatable: true, requiresHumanValidation: false },
  { id: 'multimedia-avance', name: 'Multimédia avancé', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Fonction de confort, non critique', eyesFree: false, frequency: 'Occasionnelle', context: 'Toute conduite', automatable: false, requiresHumanValidation: false },
  { id: 'personnalisation', name: 'Personnalisation', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Réglage rare, sans urgence', eyesFree: false, frequency: 'Rare', context: 'Arrêt', automatable: false, requiresHumanValidation: false },
  { id: 'reglages-profil', name: 'Réglages du profil', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Réglage rare, sans urgence', eyesFree: false, frequency: 'Rare', context: 'Arrêt', automatable: false, requiresHumanValidation: false },
  { id: 'parametres-secondaires', name: 'Paramètres secondaires', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Réglage rare, sans urgence', eyesFree: false, frequency: 'Rare', context: 'Arrêt', automatable: false, requiresHumanValidation: false },
  { id: 'historique', name: 'Historique', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Consultation non critique', eyesFree: false, frequency: 'Rare', context: 'Arrêt', automatable: false, requiresHumanValidation: false },
  { id: 'applications', name: 'Applications', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Fonction de confort, non critique', eyesFree: false, frequency: 'Occasionnelle', context: 'Arrêt', automatable: false, requiresHumanValidation: false },
  { id: 'services-connectes', name: 'Services connectés', category: 'Numérique', criticality: 4, criticalityLabel: 'Numérique acceptable', recommendedModality: 'Tactile / écran', cognitiveJustification: 'Fonction de confort, non critique', eyesFree: false, frequency: 'Occasionnelle', context: 'Arrêt', automatable: true, requiresHumanValidation: false },
]

export const humanMachineSoftwareAiMatrix = {
  conducteur: ['Décisions critiques', 'Confirmation', 'Contrôle', 'Arbitrage', 'Reprise en main'],
  vehicule: ['Exécution mécanique', 'Capteurs', 'Retour d’état', 'Sécurité fonctionnelle'],
  logiciels: ['Traitement', 'Règles', 'Orchestration', 'Gestion des priorités', 'Affichage'],
  ia: ['Détection du contexte', 'Anticipation', 'Recommandation', 'Personnalisation', 'Estimation de la pertinence'],
}

export const humanMachinePrinciple =
  'L’intelligence artificielle recommande, adapte et anticipe. Le conducteur conserve le contrôle des décisions critiques.'
