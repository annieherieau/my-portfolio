import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../data/works.json";
import { useLocation } from "react-router-dom";

export default function WorkPage() {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(undefined);
  const filter = useLocation().pathname.split("/")[2];
  const works = data[filter];

  useEffect(() => {
    const foundWork = works.find((work) => work.slug === workSlug);
    setCurrentWork(foundWork);
  }, [workSlug]);

  if (!currentWork) {
    return (
      <section className="WorkPage">
        <p>Aucun résultat ne correspond</p>
      </section>
    );
  }
  return (
    <section className="WorkPage">
      <h1>{currentWork.title}</h1>
      <p>{currentWork.author}</p>
      <p>{currentWork.description}</p>
    </section>
  );
}
