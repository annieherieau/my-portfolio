import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import works_all_fields from "../data/works_all_fields.json";

import MakdownDisplay from "../components/MakdownDisplay";
import IconList from "../components/IconList";


export default function WorkPage({ theme }) {
  const { workSlug } = useParams();
  const [currentWork, setCurrentWork] = useState(null);
  const works = works_all_fields.data;

  useEffect(() => {
    const foundWork = works.find((work) => work.attributes.slug === workSlug);
    setCurrentWork(foundWork.attributes);
  }, [workSlug]);

  if (currentWork) {
    return (
      <main id="top" className={theme}>
        <section className="WorkPage">
          <div className="d-flex justify-content-between align-items-center">
          <h1>{currentWork.title}</h1>
          <IconList data={currentWork.icons.data}/>
          </div>
        
          <p>{currentWork.description}</p>
          <div className="row gap-0">
            <div className="col-md-4">
              <img className="cover-img" src={currentWork.image} />
            </div>
            <div className="col-md-8">
              <MakdownDisplay content={currentWork.content} />
            </div>
          </div>
        </section>
      </main>
    );
  } else {
    return (
      <main id="top" className={theme}>
        <section className="WorkPage">
          <p>Aucun résultat ne correspond</p>
        </section>
      </main>
    );
  }
}
