import { Routes, Route } from 'react-router-dom'
import { RootLayout } from './layouts/RootLayout'
import { Home } from './pages/Home'
import { RecherchePage } from './pages/recherche/RecherchePage'
import { CadreTheorique } from './pages/recherche/CadreTheorique'
import { Methodologie } from './pages/recherche/Methodologie'
import { EvolutionHistorique } from './pages/encyclopedie/EvolutionHistorique'
import { Comparaison } from './pages/encyclopedie/Comparaison'
import { ResultatsConducteurs } from './pages/recherche/ResultatsConducteurs'
import { Experts } from './pages/recherche/Experts'
import { Discussion } from './pages/recherche/Discussion'
import { Hypotheses } from './pages/recherche/Hypotheses'
import { Principes } from './pages/interface-adaptative/Principes'
import { Commandes } from './pages/interface-adaptative/Commandes'
import { Scenarios } from './pages/interface-adaptative/Scenarios'
import { Personas } from './pages/interface-adaptative/Personas'
import { Prototype } from './pages/interface-adaptative/Prototype'
import { Evaluation } from './pages/interface-adaptative/Evaluation'
import { ProjetTheseEvolution } from './pages/projet-these/Evolution'
import { Contributions } from './pages/Contributions'
import { DashboardRecherche } from './pages/DashboardRecherche'
import { EthiqueTransparence } from './pages/EthiqueTransparence'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<RecherchePage />} />
        <Route path="/recherche/cadre-theorique" element={<CadreTheorique />} />
        <Route path="/recherche/methodologie" element={<Methodologie />} />
        <Route path="/encyclopedie/evolution" element={<EvolutionHistorique />} />
        <Route path="/encyclopedie/comparaison" element={<Comparaison />} />
        <Route path="/recherche/resultats-conducteurs" element={<ResultatsConducteurs />} />
        <Route path="/recherche/experts" element={<Experts />} />
        <Route path="/recherche/discussion" element={<Discussion />} />
        <Route path="/recherche/hypotheses" element={<Hypotheses />} />
        <Route path="/interface-adaptative/principes" element={<Principes />} />
        <Route path="/interface-adaptative/commandes" element={<Commandes />} />
        <Route path="/interface-adaptative/scenarios" element={<Scenarios />} />
        <Route path="/interface-adaptative/personas" element={<Personas />} />
        <Route path="/interface-adaptative/prototype" element={<Prototype />} />
        <Route path="/interface-adaptative/evaluation" element={<Evaluation />} />
        <Route path="/projet-these/evolution" element={<ProjetTheseEvolution />} />
        <Route path="/contributions" element={<Contributions />} />
        <Route path="/dashboard-recherche" element={<DashboardRecherche />} />
        <Route path="/ethique-et-transparence" element={<EthiqueTransparence />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
