import axios from "axios";

const accessToken = localStorage.getItem("auth");

const ApiConfig = (url) => ({
  // use with authenticate routes
  withAutenticate: axios.create({
    baseURL: url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    responseType: "json",
  }),
  // use with not authenticate routes
  withOutAutenticate: axios.create({
    baseURL: url,
    responseType: "json",
  }),
});

export default ApiConfig;
