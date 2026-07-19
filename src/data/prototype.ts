export const prototypeArchitectureLayers = [
  { id: 'etats', title: 'États', description: 'Normal, alerte, urgence, arrêt — chaque état détermine la hiérarchie affichée.' },
  { id: 'composants', title: 'Composants', description: 'Bandeau de criticité, zone de priorité, zone secondaire, commandes physiques persistantes.' },
  { id: 'regles-priorite', title: 'Règles de priorité', description: 'Le moteur de règles contextuelles arbitre entre criticité, contexte routier et état du conducteur.' },
  { id: 'transitions', title: 'Transitions', description: 'Les changements d’état évitent les ruptures brutales, sauf en cas d’urgence où la priorité passe immédiatement à la sécurité.' },
]

export const prototypeScreens = [
  { id: 'ecran-ville', label: 'Écran mode ville' },
  { id: 'ecran-autoroute', label: 'Écran mode autoroute' },
  { id: 'ecran-urgence', label: 'Écran mode urgence' },
  { id: 'ecran-stationnement', label: 'Écran mode stationnement' },
]
