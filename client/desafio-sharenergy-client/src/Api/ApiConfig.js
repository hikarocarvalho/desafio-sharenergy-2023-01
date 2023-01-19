import axios from "axios";

const accessToken = localStorage.getItem("auth");

const ApiConfig = {
  // use with authenticate routes
  withAutenticate: axios.create({
    baseURL: "http://localhost:3000/",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    responseType: "json",
  }),
  // use with not authenticate routes
  withOutAutenticate: axios.create({
    baseURL: "http://localhost:3000/",
    responseType: "json",
  }),
};

export default ApiConfig;
