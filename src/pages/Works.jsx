import { useState } from "react";
import WorkList from "../components/WorkList";

export default function Works() {
  const [showExercices, setShowExercices] = useState(false);
  const [showCases, setShowCases] = useState(false);
  const [showProjects, setShowProjects] = useState(true);
  return (
    <section className="Works">
      <h1>Travaux et projets</h1>
      <p>Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé certains lors de ma formation chez The Hacking Project, et d'autres sont des projets personnels.</p>
      <button className={showProjects ? 'active' : ''} onClick={() => setShowProjects((showProjects) => !showProjects)}>
        Projets
      </button>
      <button className={showCases ? 'active' : ''} onClick={() => setShowCases((showCases) => !showCases)}>
        Études de cas
      </button>
      <button className={showExercices ? 'active' : ''} onClick={() => setShowExercices((showExercices) => !showExercices)}>
        Exercices
      </button>
      {showExercices && <WorkList filter={{name:'category', value: 'exercices'}}/>}
      {showCases && <WorkList filter={{name:'category', value: 'cases'}}/>}
      {showProjects && <WorkList filter={{name:'category', value: 'projects'}}/>}
    </section>
  );
}
