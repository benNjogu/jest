import fetch from "node-fetch";

const api = "https://swapi.dev/api/people";

export const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data);

      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeopleAsync = async (fetch) => {
  const res = await fetch(api);
  const data = await res.json();

  return {
    count: data.count,
    results: data.results,
  };
};

getPeoplePromise(fetch);
