export interface Storyboard {
  id: string
  title: string
  situation: string
  sees: string
  detects: string
  softwareDoes: string
  aiRecommends: string
  driverValidates: string
  uxBenefit: string
  risk: string
}

export const storyboards: Storyboard[] = [
  {
    id: 'ville',
    title: 'Conduite en ville',
    situation: 'Trajet urbain avec piétons, cyclistes et intersections fréquentes.',
    sees: 'Vitesse, limitations, navigation proche, alertes piétons/cyclistes.',
    detects: 'Densité de circulation, présence de zones à risque, feux à proximité.',
    softwareDoes: 'Réduit les contenus multimédias et statistiques non urgentes à l’écran.',
    aiRecommends: 'Priorise l’affichage des dangers immédiats (intersection, passage piéton).',
    driverValidates: 'Le conducteur garde la main sur toutes les décisions de conduite.',
    uxBenefit: 'Moins de distraction visuelle dans un environnement dense.',
    risk: 'Sous-affichage perçu si le conducteur cherche une information secondaire masquée.',
  },
  {
    id: 'autoroute',
    title: 'Entrée sur autoroute',
    situation: 'Passage d’un environnement urbain à un environnement autoroutier à vitesse élevée.',
    sees: 'Vitesse, distance de sécurité, trajectoire, navigation, prochaine aire.',
    detects: 'Changement de type de route et augmentation de la vitesse.',
    softwareDoes: 'Réorganise l’affichage vers les informations de vitesse et de trajectoire.',
    aiRecommends: 'Propose l’activation du régulateur ou des aides à la conduite.',
    driverValidates: 'Le conducteur confirme l’activation des aides proposées.',
    uxBenefit: 'Transition fluide entre deux contextes de conduite très différents.',
    risk: 'Changement d’affichage perçu comme brusque si mal anticipé.',
  },
  {
    id: 'pluie-soudaine',
    title: 'Pluie soudaine',
    situation: 'Averse imprévue pendant un trajet, visibilité réduite.',
    sees: 'Distance de sécurité augmentée, contraste renforcé, alertes de visibilité.',
    detects: 'La pluie, via capteurs, et la baisse de visibilité associée.',
    softwareDoes: 'Réduit les contenus secondaires et augmente la visibilité des alertes.',
    aiRecommends: 'Propose l’activation ou l’ajustement des essuie-glaces.',
    driverValidates: 'Le conducteur peut reprendre la main immédiatement sur toute proposition.',
    uxBenefit: 'Réduction du temps de réaction face à un changement météo brutal.',
    risk: 'Sur-automatisation perçue si le système agit sans confirmation explicite.',
  },
  {
    id: 'fatigue-nocturne',
    title: 'Fatigue nocturne',
    situation: 'Trajet de nuit après une longue journée, signes de fatigue.',
    sees: 'Affichage simplifié, luminosité réduite, alerte de fatigue.',
    detects: 'Des signes de fatigue et une conduite en conditions de faible luminosité.',
    softwareDoes: 'Simplifie l’affichage et renforce les contrastes.',
    aiRecommends: 'Propose une pause à un point d’intérêt à proximité.',
    driverValidates: 'Le conducteur choisit d’accepter ou non la pause proposée.',
    uxBenefit: 'Détection précoce d’un facteur de risque important.',
    risk: 'Fausse détection ressentie comme intrusive si mal calibrée.',
  },
  {
    id: 'urgence',
    title: 'Situation d’urgence',
    situation: 'Danger soudain nécessitant une réaction immédiate du conducteur.',
    sees: 'Nature du danger, action immédiate recommandée, trajectoire de sécurité.',
    detects: 'Le niveau de criticité maximal de la situation.',
    softwareDoes: 'Masque immédiatement le multimédia, les notifications et les données secondaires.',
    aiRecommends: 'Affiche uniquement les alertes essentielles et la vitesse.',
    driverValidates: 'Le conducteur reprend la main à tout moment.',
    uxBenefit: 'Concentration maximale de l’attention sur le danger réel.',
    risk: 'Masquage excessif si le seuil de déclenchement est mal calibré.',
  },
  {
    id: 'stationnement',
    title: 'Stationnement',
    situation: 'Manœuvre de stationnement en créneau ou en épi.',
    sees: 'Vue caméra, capteurs, environnement 360°, commandes contextuelles.',
    detects: 'L’arrêt du véhicule et la recherche d’une place de stationnement.',
    softwareDoes: 'Autorise davantage de contenus visuels détaillés, sans enjeu de sécurité routière immédiat.',
    aiRecommends: 'Propose une assistance au choix de la place et à la manœuvre.',
    driverValidates: 'Le conducteur valide chaque étape de la manœuvre assistée.',
    uxBenefit: 'Plus de détails visuels utiles dans un contexte à faible vitesse.',
    risk: 'Distraction si les contenus détaillés sont proposés en dehors du contexte d’arrêt.',
  },
]
