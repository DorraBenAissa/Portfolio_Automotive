import { experts } from '../../data/experts'
import { expertThemes, expertMatrix } from '../../data/expertThemes'
import { DataStatusBadge } from '../../components/StatusBadge'
import { ArticleSidebar } from '../../components/ArticleTools'
import { usePageTitle } from '../../hooks/usePageTitle'

const sections = [
  { id: 'profils', label: 'Profils des experts' },
  { id: 'themes', label: 'Thèmes des discussions' },
  { id: 'matrice', label: 'Matrice de synthèse' },
]

export function Experts() {
  usePageTitle('Paroles d’experts')
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <ArticleSidebar sections={sections} pageTitle="Paroles d’experts" />
      <p className="text-sm font-medium text-muted mb-3">Recherche / Paroles d’experts</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Paroles d’experts</h1>
      <p className="mt-4 text-dim max-w-2xl">
        Des entretiens qualitatifs ont été menés auprès de spécialistes du design d’interaction, de l’UX
        et de l’IHM automobile. Seuls les contenus vérifiés et autorisés sont publiés.
      </p>

      <div className="mt-6 rounded-xl border border-amber-800 bg-amber-950/40 p-4 text-sm text-amber-200">
        Aucune citation directe n’est inventée : les entretiens de ce mémoire sont en cours d’intégration et
        de vérification. Les profils s’affichent sous forme anonymisée (« Expert A », « Expert B »…) tant que
        l’autorisation de publication n’est pas confirmée.
      </div>

      <section id="profils" className="mt-12">
        <h2 className="text-lg font-semibold mb-6">Profils des experts</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {experts.map((e) => (
            <div key={e.id} className="rounded-2xl border border-line p-5">
              <div className="h-12 w-12 rounded-full bg-surface flex items-center justify-center text-sm font-medium mb-3">
                {e.displayLabel.split(' ').pop()}
              </div>
              <h3 className="font-medium">{e.identityVisibility === 'public' && e.name ? e.name : e.displayLabel}</h3>
              <p className="text-sm text-muted">{e.role ?? 'Rôle à confirmer'}</p>
              <p className="text-xs text-muted mt-1">{e.domain}</p>
              <div className="mt-3">
                <DataStatusBadge status={e.status} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="themes" className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Thèmes des discussions</h2>
        <div className="space-y-8">
          {expertThemes.map((t) => (
            <article key={t.theme} className="rounded-2xl border border-line p-6 sm:p-8">
              <h3 className="font-semibold text-lg">{t.theme}</h3>

              {t.questions.length > 0 && (
                <ul className="mt-4 space-y-1.5">
                  {t.questions.map((q) => (
                    <li key={q} className="text-sm italic text-dim">« {q} »</li>
                  ))}
                </ul>
              )}

              {t.synthesis && (
                <div className="mt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted mb-1">
                    Synthèse (reformulation de Dorra Ben Aissa)
                  </p>
                  <p className="text-sm text-dim">{t.synthesis}</p>
                </div>
              )}

              {t.points.length > 0 && (
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
                  {t.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-dim">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="matrice" className="mt-14">
        <h2 className="text-lg font-semibold mb-2">Matrice de synthèse des experts</h2>
        <p className="text-sm text-muted mb-6">
          Les formulations marqu&eacute;es &laquo; &Agrave; v&eacute;rifier &raquo; restent des pistes de r&eacute;vision jusqu&apos;&agrave; leur confirmation dans le m&eacute;moire source.
        </p>
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left">
              <tr>
                {['Thème', 'Expert A', 'Expert B', 'Expert C', 'Convergence', 'Divergence', 'Implication UX', "Statut"].map((h) => (
                  <th key={h} className="px-4 py-2.5 font-medium whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {expertMatrix.map((row) => (
                <tr key={row.theme} className="border-t border-line">
                  <td className="px-4 py-2.5 font-medium whitespace-nowrap">{row.theme}</td>
                  <td className={`px-4 py-2.5 italic ${
                    row.theme === "Automobile et smartphone" ? "font-medium text-rose-300" : "text-muted"
                  }`}>{row.expertA}</td>
                  <td className="px-4 py-2.5 text-muted italic">{row.expertB}</td>
                  <td className="px-4 py-2.5 text-muted italic">{row.expertC}</td>
                  <td className="px-4 py-2.5 text-muted italic">{row.convergence}</td>
                  <td className="px-4 py-2.5 text-muted italic">{row.divergence}</td>
                  <td className="px-4 py-2.5 text-muted italic">{row.uxImplication}</td>
                  <td className="px-4 py-2.5 whitespace-nowrap">
                    <span className={`inline-flex rounded-full border px-2 py-0.5 text-[11px] font-medium ${
                      row.status === "v\u00e9rifi\u00e9"
                        ? "border-emerald-800 bg-emerald-950 text-emerald-300"
                        : "border-rose-800 bg-rose-950/50 text-rose-300"
                    }`}>
                      {row.status === "v\u00e9rifi\u00e9" ? "V\u00e9rifi\u00e9" : "\u00c0 v\u00e9rifier"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
