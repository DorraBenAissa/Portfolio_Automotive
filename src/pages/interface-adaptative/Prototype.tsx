import { Link } from 'react-router-dom'
import { prototypeArchitectureLayers, prototypeScreens } from '../../data/prototype'
import { usePageTitle } from '../../hooks/usePageTitle'
import { assetUrl } from '../../lib/assets'

const prototypeScreenImages: Record<string, { src: string; alt: string; caption: string }> = {
  "ecran-ville": {
    src: assetUrl("prototype-ville-crepuscule.png"),
    alt: "Vue int\u00e9rieure d\u2019une conduite urbaine au cr\u00e9puscule",
    caption: "Vue int\u00e9rieure d\u2019une conduite urbaine au cr\u00e9puscule",
  },
  "ecran-autoroute": {
    src: assetUrl("prototype-autoroute.png"),
    alt: "Sc\u00e9nario de conduite sur autoroute",
    caption: "Sc\u00e9nario 2 : conduite sur autoroute",
  },
  "ecran-stationnement": {
    src: assetUrl("prototype-stationnement.png"),
    alt: "Interface de tableau de bord automobile futuriste",
    caption: "Interface de tableau de bord automobile futuriste",
  },
  "ecran-urgence": {
    src: assetUrl("prototype-urgence.png"),
    alt: "Sc\u00e9nario d\u2019urgence sur un tableau de bord automobile",
    caption: "Sc\u00e9nario d\u2019urgence : tableau de bord",
  },
}

export function Prototype() {
  usePageTitle('Prototype')
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
      <p className="text-sm font-medium text-muted mb-3">Interface adaptative / Prototype</p>
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Prototype</h1>
      <p className="mt-4 text-dim max-w-2xl">
        Le prototype traduit les principes de conception et les scénarios adaptatifs en une architecture
        d’interface concrète, démontrable directement dans le navigateur.
      </p>

      <div className="mt-6 flex justify-center">
        <img
          src={assetUrl('logo-renault-flow.png')}
          alt="Renault Flow, ultimate simplexity"
          className="h-auto w-full max-w-2xl"
        />
      </div>

      <figure className="mx-auto mt-8 max-w-xl overflow-hidden rounded-lg border border-line-2 bg-surface">
        <img
          src={assetUrl('guide-style-renault.png')}
          alt="Guide de style typographique Renault"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">
          Guide de style typographique Renault
        </figcaption>
      </figure>

      <figure className="mx-auto mt-4 max-w-xl overflow-hidden rounded-lg border border-line-2 bg-surface">
        <img
          src={assetUrl('guide-couleurs-renault.png')}
          alt="Guide de couleurs ethique Renault"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">
          Guide de couleurs Renault : approche &eacute;thique
        </figcaption>
      </figure>

      <figure className="mx-auto mt-4 max-w-xl overflow-hidden rounded-lg border border-line-2 bg-surface">
        <img
          src={assetUrl('direction-artistique-renault.png')}
          alt="Direction artistique du tableau de bord Renault"
          className="h-auto w-full"
        />
        <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">
          Direction artistique du tableau de bord Renault
        </figcaption>
      </figure>

      <div className="mt-8 rounded-2xl border-2 border-paper p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-semibold">Mode démonstration interactif</h2>
          <p className="text-sm text-dim mt-1">
            Manipulez le contexte de conduite et observez l’interface se réorganiser en temps réel.
          </p>
        </div>
        <Link
          to="/interface-adaptative/scenarios"
          className="shrink-0 rounded-full bg-paper text-ink px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Lancer le simulateur →
        </Link>
      </div>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Architecture du concept</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {prototypeArchitectureLayers.map((l) => (
            <div key={l.id} className="rounded-xl border border-line p-5">
              <h3 className="font-medium mb-1">{l.title}</h3>
              <p className="text-sm text-dim">{l.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Vue d&apos;ensemble du concept</h2>
        <figure className="overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-concept-renault.png')} alt="Int&eacute;rieurs futuristes de voiture concept Renault" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Int&eacute;rieurs futuristes de voiture concept Renault</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-interieur-electrique.png')} alt="Int&eacute;rieur futuriste d&apos;un v&eacute;hicule &eacute;lectrique" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Int&eacute;rieur futuriste d&apos;un v&eacute;hicule &eacute;lectrique</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-dashboard-moderne.png')} alt="Tableau num&eacute;rique d&apos;une voiture moderne" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Tableau num&eacute;rique d&apos;une voiture moderne</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('presentation-concept-renault.png')} alt="Pr&eacute;sentation du concept int&eacute;rieur Renault" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Pr&eacute;sentation du concept int&eacute;rieur Renault</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-interieur-minimaliste.png')} alt="Int&eacute;rieur de v&eacute;hicule minimaliste moderne" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Int&eacute;rieur de v&eacute;hicule minimaliste moderne</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-simplexe.png')} alt="Concept int&eacute;rieur Renault : tableau de bord simplexe" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Concept int&eacute;rieur Renault : tableau de bord simplexe</figcaption>
        </figure>
        <figure className="mt-4 overflow-hidden rounded-lg border border-line-2 bg-surface">
          <img src={assetUrl('prototype-interieur-immersif.png')} alt="Conception d&apos;int&eacute;rieur automobile immersive et intuitive" className="h-auto w-full" />
          <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">Conception d&apos;int&eacute;rieur automobile immersive et intuitive</figcaption>
        </figure>
      </section>

      <section className="mt-14">
        <h2 className="text-lg font-semibold mb-6">Écrans du prototype</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {prototypeScreens.map((s) => {
            const image = prototypeScreenImages[s.id]

            return image ? (
              <figure key={s.id} className="overflow-hidden rounded-lg border border-line-2 bg-surface">
                <div className="aspect-[3/2]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-contain"
                  />
                </div>
                <figcaption className="border-t border-line px-4 py-3 text-sm font-medium">
                  {image.caption}
                </figcaption>
              </figure>
            ) : (
              <div
                key={s.id}
                className="aspect-[3/2] rounded-lg border-2 border-dashed border-line-2 flex items-center justify-center text-sm text-muted"
              >
                {s.label}
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
