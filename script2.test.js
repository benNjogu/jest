// const fetch = require("node-fetch");
// const getPeoplePromise = require("./script2");

import fetch from "node-fetch";
import { getPeoplePromise } from "./script2";

const api = "https://swapi.dev/api/people";

it("calls swapi to get people", () => {
  getPeoplePromise(fetch).then((data) => {
    expect(data.count).toEqual(87);
  });
});
