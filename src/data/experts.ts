import type { Expert } from '../types/expert'

// Contenu thématique intégré et vérifié depuis le mémoire (p. 77-89).
// Profils affichés sous forme anonymisée ("Expert A/B/C") en attendant
// la validation des autorisations de publication (publicationConsent, quoteApproval).
export const experts: Expert[] = [
  {
    id: 'expert-a',
    displayLabel: 'Expert A',
    name: null,
    role: 'Designer IHM automobile',
    organization: null,
    domain: 'IHM automobile, commandes physiques et sécurité de conduite',
    bio: '19 ans d’expérience en design d’interfaces automobiles.',
    photoUrl: null,
    interviewDate: null,
    publicationConsent: false,
    identityVisibility: 'anonymous',
    quoteApproval: false,
    themes: ['La charge cognitive', 'Les commandes physiques', 'La sécurité'],
    summary:
      'Défend le maintien des commandes physiques pour toutes les fonctions directement liées à la conduite ou à son confort immédiat (climatisation, warnings), estimant que le conducteur doit pouvoir les actionner sans regarder. Considère que le tout-tactile n’est pas compatible avec les enjeux de sécurité routière et plaide pour une séparation nette entre le smartphone (divertissement, connectivité) et le tableau de bord, réservé à ce qui compte strictement pour la conduite. Se montre plus critique que les autres experts vis-à-vis des interfaces très numériques de certains constructeurs chinois.',
    source: 'Mémoire de Master 2',
    status: 'publié',
  },
  {
    id: 'expert-b',
    displayLabel: 'Expert B',
    name: null,
    role: 'UX Lead Designer',
    organization: 'Groupe automobile européen',
    domain: 'Intelligence artificielle et interfaces adaptatives',
    bio: null,
    photoUrl: null,
    interviewDate: null,
    publicationConsent: false,
    identityVisibility: 'anonymous',
    quoteApproval: false,
    themes: ['La charge cognitive', 'L’adaptation contextuelle', 'L’avenir de l’UX automobile'],
    summary:
      'Considère que l’UX automobile ne peut pas être pensée comme une UX web ou mobile classique, en raison des conséquences directes d’une erreur d’interaction sur la sécurité du conducteur. Voit dans l’intelligence artificielle un levier pour simplifier l’expérience plutôt qu’ajouter une couche de complexité, avec des interfaces capables de s’adapter dynamiquement au contexte de conduite. Reconnaît l’avance technologique de certains constructeurs chinois (cité : le salon automobile de Pékin) dans l’intégration de fonctionnalités riches tout en conservant une expérience immersive.',
    source: 'Mémoire de Master 2',
    status: 'publié',
  },
  {
    id: 'expert-c',
    displayLabel: 'Expert C',
    name: null,
    role: 'UX Designer Junior',
    organization: null,
    domain: 'Hiérarchisation de l’information et interfaces adaptatives',
    bio: null,
    photoUrl: null,
    interviewDate: null,
    publicationConsent: false,
    identityVisibility: 'anonymous',
    quoteApproval: false,
    themes: ['La hiérarchisation de l’information', 'L’adaptation contextuelle', 'L’avenir de l’UX automobile'],
    summary:
      'Insiste sur la nécessité de faire apparaître les informations prioritaires en premier et sur le rôle d’une interface adaptative pour réduire la surcharge informationnelle. Envisage l’intérieur du véhicule comme un futur espace de vie à mesure que la conduite s’automatise, la question se déplaçant de « comment je contrôle » à « comment je vis à bord ». Voit dans l’intelligence artificielle la possibilité de fournir l’information utile au bon moment sans que le conducteur ait à la demander.',
    source: 'Mémoire de Master 2',
    status: 'publié',
  },
]
