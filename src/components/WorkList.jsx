import { useState } from "react";
import { useEffect } from "react";
import WorkCard from "./WorkCard";

export default function WorkList({ filter }) {
  let filter_params = "";
  if (filter) {
    const { name, value } = filter;
    filter_params = `&filters[${name}][name][$eq]=${value}`;
  }

  const [works, setWorks] = useState(null);

  const api_key = import.meta.env.VITE_STRAPI_KEY;
  const api_url = import.meta.env.VITE_STRAPI_URL;

  const options = {
    method: "GET",
    headers: {
      "User-Agent": "insomnia/9.1.1",
      Authorization: `Bearer ${api_key}`,
    },
  };

  const url = `${api_url}/works?populate=*${filter_params}`;

  useEffect(() => {
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setWorks(response.data))
      .catch((err) => console.error(err));
  }, [filter]);

  return (
    <section className="WorkList">
      {works &&
        works.map((work) => (
          <WorkCard workdata={work.attributes} key={work.id} />
        ))}
    </section>
  );
}
