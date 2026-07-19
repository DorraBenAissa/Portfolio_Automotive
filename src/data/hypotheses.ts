import type { Hypothesis } from '../types/hypothesis'

export const hypotheses: Hypothesis[] = [
  {
    id: 'h1',
    label: 'Hypothèse 1',
    formulation:
      'Les interfaces automobiles cherchent à simplifier l’accès aux fonctionnalités tout en intégrant une complexité technologique croissante. Toutefois, cette simplification reste souvent principalement visuelle et ne garantit pas nécessairement une réduction de la charge cognitive.',
    indicators: [
      'Simplexité — temps d’accès à une fonction essentielle pour ne pas augmenter la charge mentale',
      'Charge cognitive — facilité ou difficulté perçue par l’utilisateur',
    ],
    dataUsed: ['Analyse historique', 'Benchmark constructeurs', 'Entretiens experts'],
    result:
      'Confirmée par le croisement de l’analyse historique, du benchmark constructeurs et des entretiens experts : la numérisation n’entraîne pas automatiquement une simplification de l’usage.',
    status: 'validée',
    limits: ['Validation restant située dans le périmètre exploratoire de l’étude'],
    perspectives: ['Tests utilisateurs complémentaires sur simulateur ou véhicule'],
  },
  {
    id: 'h2',
    label: 'Hypothèse 2',
    formulation:
      'Un design ergonomique et une bonne hiérarchisation visuelle améliorent la compréhension et la sécurité pendant la conduite.',
    indicators: [
      'Lisibilité — rapidité d’identification des informations importantes',
      'Sécurité — temps d’attention détourné de la route',
    ],
    dataUsed: ['Questionnaire conducteur', 'Entretiens experts'],
    result:
      'Confirmée : l’analyse met en évidence l’importance de la lisibilité, de la simplicité des parcours d’interaction et de l’accessibilité immédiate des informations essentielles. Les experts s’accordent sur le fait qu’une bonne organisation visuelle permet au conducteur d’identifier rapidement les informations importantes sans effort cognitif excessif ; les commandes essentielles, lorsqu’elles restent facilement accessibles, renforcent la sécurité de conduite.',
    status: 'validée',
    limits: ['Validation restant située dans le périmètre exploratoire de l’étude'],
    perspectives: ['Tests de lisibilité et d’utilisabilité en conditions de conduite simulée pour valider la hiérarchisation visuelle proposée'],
  },
  {
    id: 'h3',
    label: 'Hypothèse 3',
    formulation:
      'Les approches de design diffèrent selon les constructeurs automobiles et influencent l’expérience utilisateur globale.',
    indicators: ['Expérience utilisateur — score de satisfaction déclaré (comparaison inter-constructeurs)'],
    dataUsed: ['Cadre théorique', 'Proposition UX'],
    result:
      'Confirmée : l’étude comparative entre Renault, Tesla, Mercedes-Benz, Porsche et plusieurs constructeurs chinois met en évidence des philosophies de conception différentes — Tesla privilégie une approche minimaliste centrée sur l’écran tactile, Mercedes-Benz une approche immersive et riche en contenus visuels, Renault un équilibre entre commandes physiques et numériques, et les constructeurs chinois des interfaces très connectées et fortement intégrées à l’intelligence artificielle. Ces différences influencent directement la manière dont les utilisateurs perçoivent, comprennent et utilisent les interfaces.',
    status: 'validée',
    limits: ['Validation restant située dans le périmètre exploratoire de l’étude'],
    perspectives: ['Élargir la comparaison à d’autres constructeurs et à des profils de conducteurs plus diversifiés'],
  },
]

export const hypothesesSynthesisNote =
  'Les trois hypothèses du mémoire ont été validées, tout en gardant à l’esprit que cette validation reste située dans le périmètre exploratoire de l’étude.'
