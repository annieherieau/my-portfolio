export default function FetchWorks(filter) {
  const api_key = import.meta.env.VITE_STRAPI_KEY;
  const api_url = import.meta.env.VITE_STRAPI_URL;
  const filter_params = 'filters[category][name][$eq]'
  const options = {
    method: "GET",
    headers: {
      "User-Agent": "insomnia/9.1.1",
      Authorization: `Bearer ${api_key}`,
    },
  };

  fetch(`${api_url}/works${filter_params}=${filter}`, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
