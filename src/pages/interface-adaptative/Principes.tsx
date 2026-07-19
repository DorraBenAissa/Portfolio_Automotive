import { designPrinciples } from '../../data/principles'
import { usePageTitle } from '../../hooks/usePageTitle'

export function Principes() {
  usePageTitle('Principes de conception')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Interface adaptative / Principes</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Principes de conception</h1>
      <p className="mt-4 text-dim">
        Quatre principes fondamentaux traduisent le cadre théorique de la simplexité en règles de
        conception concrètes pour une interface automobile adaptative.
      </p>

      <div className="mt-10 space-y-5">
        {designPrinciples.map((p) => (
          <article key={p.id} className="rounded-2xl border border-line p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <span className="shrink-0 h-8 w-8 rounded-full bg-paper text-ink text-sm font-medium flex items-center justify-center">
                {p.order}
              </span>
              <h2 className="font-semibold text-lg">{p.title}</h2>
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {p.points.map((pt) => (
                <li key={pt} className="flex items-start gap-2 text-sm text-dim">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted shrink-0" aria-hidden="true" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
