import { useMemo, useState } from 'react'
import { drivingScenarios, storyboardSequence, defaultDrivingContext, type DrivingContext } from '../../data/workflows'
import { storyboards } from '../../data/storyboards'
import { computeInterfaceState } from '../../lib/ruleEngine'
import { usePageTitle } from '../../hooks/usePageTitle'
import { assetUrl } from '../../lib/assets'

const storyboardFields: { key: keyof typeof storyboards[number]; stepLabel: string }[] = [
  { key: 'situation', stepLabel: 'Situation' },
  { key: 'detects', stepLabel: 'Détection' },
  { key: 'softwareDoes', stepLabel: 'Adaptation' },
  { key: 'sees', stepLabel: 'Interaction (ce que voit le conducteur)' },
  { key: 'aiRecommends', stepLabel: 'Décision (recommandation IA)' },
  { key: 'driverValidates', stepLabel: 'Résultat (validation conducteur)' },
]

function ToggleRow<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: T
  options: { value: T; label: string }[]
  onChange: (v: T) => void
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <span className="text-sm text-dim">{label}</span>
      <div className="flex rounded-full border border-line-2 p-0.5">
        {options.map((o) => (
          <button
            key={o.value}
            onClick={() => onChange(o.value)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              value === o.value ? 'bg-paper text-ink' : 'text-muted'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function Scenarios() {
  usePageTitle('Scénarios adaptatifs')
  const [context, setContext] = useState<DrivingContext>(defaultDrivingContext)
  const state = useMemo(() => computeInterfaceState(context), [context])

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Interface adaptative / Scénarios</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Scénarios adaptatifs</h1>
      <p className="mt-4 text-dim max-w-2xl">
        Sept modes de conduite illustrent comment l’interface hiérarchise l’information selon le contexte,
        sans jamais retirer au conducteur le contrôle des décisions critiques.
      </p>

      <section className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {drivingScenarios.map((s) => (
          <div key={s.id} className="rounded-2xl border border-line p-5">
            <h3 className="font-medium">{s.label}</h3>
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">Priorité</p>
            <p className="text-sm text-dim">{s.priorityInfo.join(', ') || '—'}</p>
            {s.reducedInfo.length > 0 && (
              <>
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted">Réduit</p>
                <p className="text-sm text-dim">{s.reducedInfo.join(', ')}</p>
              </>
            )}
            <p className="mt-3 text-xs text-muted italic">{s.driverControl}</p>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-2xl border-2 border-paper p-6 sm:p-8">
        <h2 className="text-lg font-semibold mb-1">Simulateur — moteur de règles contextuelles</h2>
        <p className="text-sm text-muted mb-6">
          Démonstration front-end sans IA réelle : une logique déterministe illustre comment l’interface
          s’adapterait au contexte choisi.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8">
          <ToggleRow
            label="Type de route"
            value={context.roadType}
            onChange={(v) => setContext((c) => ({ ...c, roadType: v }))}
            options={[{ value: 'ville', label: 'Ville' }, { value: 'autoroute', label: 'Autoroute' }]}
          />
          <ToggleRow
            label="Météo"
            value={context.weather}
            onChange={(v) => setContext((c) => ({ ...c, weather: v }))}
            options={[{ value: 'sec', label: 'Sec' }, { value: 'pluie', label: 'Pluie' }]}
          />
          <ToggleRow
            label="Luminosité"
            value={context.lightLevel}
            onChange={(v) => setContext((c) => ({ ...c, lightLevel: v }))}
            options={[{ value: 'jour', label: 'Jour' }, { value: 'nuit', label: 'Nuit' }]}
          />
          <ToggleRow
            label="Trafic"
            value={context.trafficDensity}
            onChange={(v) => setContext((c) => ({ ...c, trafficDensity: v }))}
            options={[{ value: 'fluide', label: 'Fluide' }, { value: 'dense', label: 'Dense' }]}
          />
          <ToggleRow
            label="État du conducteur"
            value={context.driverState}
            onChange={(v) => setContext((c) => ({ ...c, driverState: v }))}
            options={[{ value: 'attentif', label: 'Attentif' }, { value: 'fatigué', label: 'Fatigué' }]}
          />
          <ToggleRow
            label="Criticité"
            value={context.criticalityLevel}
            onChange={(v) => setContext((c) => ({ ...c, criticalityLevel: v }))}
            options={[{ value: 'normal', label: 'Normal' }, { value: 'urgence', label: 'Urgence' }]}
          />
        </div>

        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          <div className="rounded-xl bg-emerald-950/40 border border-emerald-900 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-400 mb-2">Priorité</p>
            <ul className="space-y-1 text-sm text-emerald-200">
              {state.priority.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
          <div className="rounded-xl bg-amber-950/40 border border-amber-900 p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-amber-400 mb-2">Secondaire</p>
            <ul className="space-y-1 text-sm text-amber-200">
              {state.secondary.length > 0 ? state.secondary.map((i) => <li key={i}>{i}</li>) : <li className="italic opacity-60">Aucune</li>}
            </ul>
          </div>
          <div className="rounded-xl bg-surface border border-line p-4">
            <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Masqué</p>
            <ul className="space-y-1 text-sm text-dim">
              {state.hidden.length > 0 ? state.hidden.map((i) => <li key={i}>{i}</li>) : <li className="italic opacity-60">Aucune</li>}
            </ul>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          <p><span className="font-medium">Modalité recommandée :</span> {state.modality}</p>
        </div>

        {(state.proposedAutomations.length > 0 || state.needsConfirmation.length > 0) && (
          <div className="mt-2 grid sm:grid-cols-2 gap-4 text-sm">
            {state.proposedAutomations.length > 0 && (
              <p><span className="font-medium">Automatisations proposées :</span> {state.proposedAutomations.join(', ')}</p>
            )}
            {state.needsConfirmation.length > 0 && (
              <p><span className="font-medium">Nécessite confirmation :</span> {state.needsConfirmation.join(', ')}</p>
            )}
          </div>
        )}

        <div className="mt-6 rounded-xl border border-line p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted mb-2">Pourquoi l’interface s’adapte ?</p>
          <ul className="space-y-1 text-sm text-dim">
            {state.explanations.map((e) => <li key={e}>— {e}</li>)}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-lg font-semibold mb-2">Storyboards</h2>
        <p className="text-sm text-muted mb-6">
          Séquence : {storyboardSequence.map((s) => s.label).join(' → ')}
        </p>
        <figure className="mb-8 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img
            src={assetUrl('storyboard-cockpit-renault.png')}
            alt="Storyboard de conception d'un cockpit automobile Renault"
            className="h-auto w-full"
          />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">
            Storyboard de conception d&apos;un cockpit Renault
          </figcaption>
        </figure>
        <div className="space-y-6">
          {storyboards.map((sb) => (
            <article key={sb.id} className="rounded-2xl border border-line p-6 sm:p-8">
              <h3 className="font-semibold text-lg mb-4">{sb.title}</h3>
              <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm">
                {storyboardFields.map((f) => (
                  <div key={f.key}>
                    <dt className="font-medium text-muted mb-1">{f.stepLabel}</dt>
                    <dd className="text-dim">{sb[f.key]}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 pt-4 border-t border-dashed border-line-2 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <p><span className="font-medium text-emerald-400">Bénéfice UX :</span> {sb.uxBenefit}</p>
                <p><span className="font-medium text-rose-400">Risque potentiel :</span> {sb.risk}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
