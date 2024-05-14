import { useState } from "react";
import WorkList from "./WorkList";
import { Button, ButtonGroup } from "react-bootstrap";

export default function Works() {
  const [showExercices, setShowExercices] = useState(false);
  const [showCases, setShowCases] = useState(false);
  const [showProjects, setShowProjects] = useState(true);

  const displayWorks = (setShow) => {
    setShowProjects(false);
    setShowCases(false);
    setShowExercices(false);
    setShow(true);
  };

  return (
    <section id="works">
      <h1>Travaux et projets</h1>
      <p>
        Vous pourrez trouver ci-dessous la liste de mes projets. J'en ai réalisé
        certains lors de ma formation chez The Hacking Project, et d'autres sont
        des projets personnels.
      </p>
      <ButtonGroup>
        <Button
          className={showProjects ? "btn-primary" : "btn-secondary"}
          onClick={() => displayWorks(setShowProjects)}
        >
          Projets
        </Button>
        <Button
          className={showCases ? "btn-primary" : "btn-secondary"}
          onClick={() => displayWorks(setShowCases)}
        >
          Études de cas
        </Button>
        <Button
          className={showExercices ? "btn-primary" : "btn-secondary"}
          onClick={() => displayWorks(setShowExercices)}
        >
          Exercices
        </Button>
      </ButtonGroup>

      {showProjects && <h2>Projets</h2>}
      {showProjects && (
        <WorkList filter={{ name: "category", value: "projects" }} />
      )}
      {showCases && <h2>Études de cas</h2>}
      {showCases && <WorkList filter={{ name: "category", value: "cases" }} />}
      {showExercices && <h2>Exercices</h2>}
      {showExercices && (
        <WorkList filter={{ name: "category", value: "exercices" }} />
      )}
    </section>
  );
}
