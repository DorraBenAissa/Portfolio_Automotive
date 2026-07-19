import type { Source } from '../types/source'

// Bibliographie extraite et vérifiée depuis le mémoire (p. 120-122).
export const bibliography: Source[] = [
  {
    id: 'memoire-2026',
    title: 'La simplexité dans les interfaces automobiles',
    author: 'Dorra Ben Aissa',
    year: 2026,
    type: 'production personnelle',
    page: null,
  },
  // Cadre théorique — simplexité
  { id: 'berthoz-2009', title: 'La Simplexité', author: 'Alain Berthoz', year: 2009, type: 'ouvrage', page: 120 },
  // UX design et ergonomie
  { id: 'norman-2013', title: 'The Design of Everyday Things', author: 'Don Norman', year: 2013, type: 'ouvrage', page: 120 },
  { id: 'nielsen-1994', title: 'Usability Engineering', author: 'Jakob Nielsen', year: 1994, type: 'ouvrage', page: 120 },
  { id: 'nogier-leclercq-2021', title: 'UX Design & Ergonomie des Interfaces (7e édition)', author: 'Jean-François Nogier, Jules Leclercq', year: 2021, type: 'ouvrage', page: 120 },
  { id: 'lallemand-gronier-2018', title: 'Méthodes de Design UX', author: 'Carine Lallemand, Guillaume Gronier', year: 2018, type: 'ouvrage', page: 120 },
  // Cognition et charge cognitive
  { id: 'sweller-1988', title: 'Cognitive Load During Problem Solving (Cognitive Science, vol. 12, n°2)', author: 'John Sweller', year: 1988, type: 'article scientifique', page: 120 },
  { id: 'kahneman-2011', title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', year: 2011, type: 'ouvrage', page: 120 },
  { id: 'wickens-2021', title: 'Engineering Psychology and Human Performance', author: 'Christopher Wickens', year: 2021, type: 'ouvrage', page: 120 },
  // Interfaces homme-machine automobile
  { id: 'stanton-salmon-2016', title: 'Human Factors in the Automotive Domain', author: 'Neville Stanton, Paul Salmon', year: 2016, type: 'ouvrage', page: 120 },
  { id: 'stanton-2014', title: 'Driver Behaviour and Training', author: 'Neville Stanton', year: 2014, type: 'ouvrage', page: 120 },
  { id: 'burnett-2009', title: 'Human-Machine Interaction in Vehicles', author: 'Gary Burnett', year: 2009, type: 'ouvrage', page: 120 },
  { id: 'green-2008', title: 'Driver Distraction, Telematics Design and Workload Managers', author: 'Paul Green', year: 2008, type: 'ouvrage', page: 121 },
  // Normes et recommandations
  { id: 'iso-15005', title: 'ISO 15005 — Ergonomic Principles for Transport Information and Control Systems', author: 'International Organization for Standardization', year: 2002, type: 'norme', page: 121 },
  { id: 'nhtsa-guidelines', title: 'Driver Distraction Guidelines', author: 'National Highway Traffic Safety Administration', year: 2013, type: 'norme', page: 121 },
  { id: 'sae-j2364', title: 'Driver Distraction Guidelines — SAE J2364', author: 'SAE International', year: 2013, type: 'norme', page: 121 },
  { id: 'iso-9241-11', title: 'ISO 9241-11:2018 — Ergonomics of human-system interaction, Usability', author: 'International Organization for Standardization', year: 2018, type: 'norme', page: 121 },
  // Références UX automobile (constructeurs)
  { id: 'tesla-hig', title: 'Human Interface Guidelines', author: 'Tesla', year: 2026, type: 'constructeur', page: 121 },
  { id: 'renault-openr', title: 'OpenR Link Documentation', author: 'Renault', year: 2026, type: 'constructeur', page: 121 },
  { id: 'mbux-studies', title: 'MBUX Interface Studies', author: 'Mercedes-Benz', year: 2026, type: 'constructeur', page: 121 },
  { id: 'porsche-pcm', title: 'Driver-Centered Cockpit Design (Porsche Communication Management)', author: 'Porsche', year: 2026, type: 'constructeur', page: 121 },
  // Webographie sélective
  { id: 'web-renault-openr', title: 'Renault Group – OpenR Link et interfaces embarquées', author: 'Renault Group', year: 2026, type: 'site', page: 122, url: 'https://www.renault.fr' },
  { id: 'web-tesla-ui', title: 'Tesla – Interface utilisateur Model 3 et Model Y', author: 'Tesla', year: 2026, type: 'site', page: 122 },
  { id: 'web-mazda-hcd', title: 'Mazda Europe – Human Centric Design', author: 'Mazda', year: 2026, type: 'site', page: 122 },
  { id: 'web-porsche-pcm', title: 'Porsche Communication Management (PCM)', author: 'Porsche', year: 2026, type: 'site', page: 122 },
  { id: 'web-nhtsa-visual', title: 'Visual-Manual Driver Distraction Guidelines for In-Vehicle Electronic Devices', author: 'NHTSA', year: 2013, type: 'norme', page: 122 },
  { id: 'web-nng-cognitive-load', title: 'UX et charge cognitive', author: 'Nielsen Norman Group', year: 2026, type: 'site', page: 122 },
  { id: 'web-ux-collective', title: 'Automotive UX Articles', author: 'UX Collective', year: 2026, type: 'site', page: 122 },
  { id: 'web-car-ux', title: 'car-ux.com', author: 'UX Automotive', year: 2026, type: 'site', page: 122, url: 'https://car-ux.com/' },
  // Vidéographie sélective
  { id: 'video-berthoz', title: 'La Simplexité — conférences sur la cognition, la perception et la simplexité', author: 'Alain Berthoz', year: 2011, type: 'vidéo', page: 123 },
  // Entretiens
  { id: 'entretien-experts-2026', title: 'Entretiens qualitatifs experts UX automobile (3 experts, anonymisés)', author: 'Dorra Ben Aissa', year: 2026, type: 'entretien', page: 77 },
]

export const dashboardMetrics = {
  vehiculesEtudies: 42,
  periodesCouvertes: 4,
  constructeursCompares: 6,
  dimensionsUx: 7,
  participantsQuestionnaire: 31,
  expertsInterroges: 3,
  scenariosAdaptatifs: 7,
  recommandations: 5,
  sources: bibliography.length,
  avancementProjetDoctoral: 'à compléter',
}
