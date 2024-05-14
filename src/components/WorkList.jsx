import { useState } from "react";
import { useEffect } from "react";
import WorkCard from "./WorkCard";
import works_all_fields from "../data/works_all_fields.json";

export default function WorkList({ filter }) {
  // let filter_params = "";
  const { name, value } = filter;

  

  const [works, setWorks] = useState(works_all_fields.data);
  useEffect(() => {
    const data = works_all_fields.data.filter(
      (w) => w.attributes.category.data.attributes.name == `${value}`
    );
    setWorks(data);
  }, [filter]);
  // FETCH
  // let filter_params = "";
  // filter_params = `&filters[${name}][name][$eq]=${value}`;
  // const api_key = import.meta.env.VITE_STRAPI_KEY;
  // const api_url = import.meta.env.VITE_STRAPI_URL;

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "User-Agent": "insomnia/9.1.1",
  //     Authorization: `Bearer ${api_key}`,
  //   },
  // };

  // const url = `${api_url}/works?populate=*${filter_params}`;

  // useEffect(() => {
  //   fetch(url, options)
  //     .then((response) => response.json())
  //     .then((response) => setWorks(response.data))
  //     .catch((err) => console.error(err));
  // }, [filter]);

  return (
    <section className="WorkList">
      {works &&
        works.map((work) => (
          <WorkCard workdata={work.attributes} key={work.id} />
        ))}
    </section>
  );
}
