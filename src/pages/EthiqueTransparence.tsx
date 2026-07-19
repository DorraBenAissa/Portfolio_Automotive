const sections = [
  {
    title: 'Méthode',
    body: 'La recherche croise une revue de littérature, une analyse historique, un benchmark constructeurs, un questionnaire quantitatif conducteur et des entretiens qualitatifs experts (voir la page Méthodologie).',
  },
  {
    title: 'Limites',
    body: 'Échantillon limité, diversité partielle des profils, absence de tests en situation réelle de conduite, prototype conceptuel, absence d’accès aux données internes des constructeurs. Les résultats ne sont pas généralisables sans validation complémentaire.',
  },
  {
    title: 'Rôle de l’IA dans le projet',
    body: 'Le simulateur d’interface adaptative présenté sur ce site est une démonstration front-end fondée sur une logique de règles déterministe, et non un système d’intelligence artificielle réel. Aucun modèle prédictif n’a été entraîné sur des données de conduite réelles.',
  },
  {
    title: 'Protection des participants',
    body: 'Les réponses individuelles au questionnaire ne sont jamais publiées ; seules des statistiques agrégées et vérifiées sont présentées.',
  },
  {
    title: 'Anonymisation',
    body: 'Les experts interrogés sont désignés par défaut sous forme anonymisée (« Expert A », « Expert B »…) tant que leur autorisation explicite de publication n’est pas confirmée.',
  },
  {
    title: 'Droits des images',
    body: 'Aucune photographie d’expert n’est publiée sans autorisation explicite. Les visuels de véhicules sont utilisés à des fins d’illustration académique.',
  },
  {
    title: 'Données réelles vs. données de démonstration',
    body: 'Les personas, storyboards et scénarios du volet « Interface adaptative » sont des extensions de démonstration conçues pour ce portfolio. Les résultats du questionnaire et les statistiques citées sont, elles, issues du mémoire — et marquées « à compléter » lorsqu’elles ne sont pas encore intégrées.',
  },
  {
    title: 'Résultats vs. propositions',
    body: 'Une distinction est maintenue entre les résultats issus du terrain (questionnaire, entretiens) et les propositions de conception qui en découlent, qui restent des recommandations UX et non des normes officielles.',
  },
  {
    title: 'Absence d’affiliation',
    body: 'Ce site n’est affilié à aucune des marques ou entreprises étudiées ou mentionnées (Tesla, Mercedes-Benz, Renault, Porsche, BYD, NIO, Valeo, Stellantis, Forvia). Les analyses comparatives sont des lectures UX indépendantes réalisées par Dorra Ben Aissa.',
  },
]

export function EthiqueTransparence() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-stone-500 dark:text-stone-400 mb-3">Éthique et transparence</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Éthique et transparence</h1>
      <p className="mt-4 text-stone-600 dark:text-stone-300 max-w-2xl">
        Cette page explicite les principes qui encadrent la publication de contenus scientifiques et de
        démonstration sur cette plateforme.
      </p>

      <div className="mt-10 space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-stone-200 dark:border-stone-800 p-6">
            <h2 className="font-semibold mb-2">{s.title}</h2>
            <p className="text-sm text-stone-600 dark:text-stone-300">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
