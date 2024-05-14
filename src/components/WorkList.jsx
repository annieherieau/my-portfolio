import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function WorkList({ filter }) {
  const { name, value } = filter;
  const [works, setWorks] = useState(null);

  const api_key = import.meta.env.VITE_STRAPI_KEY;
  const api_url = import.meta.env.VITE_STRAPI_URL;
  const filter_params = `filters[${name}][name][$eq]`;
  const options = {
    method: "GET",
    headers: {
      "User-Agent": "insomnia/9.1.1",
      Authorization: `Bearer ${api_key}`,
    },
  };

  const url = `${api_url}/works?${filter_params}=${value}`;

  fetch(url, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return (
    <section className="WorkList">
      <h2>{value}</h2>
      {/* {works.map((work) => (
        <p key={work.slug}>
          <Link to={`/work/${filter}/${work.slug}`}>{work.title}</Link>
        </p>
      ))} */}
    </section>
  );
}
