import ApiConfig from "./ApiConfig";
import { toast } from "react-toastify";

const ApiCrud = (baseurl, entityName) => ({
  create: (url, data) =>
    ApiConfig(baseurl)
      .withOutAutenticate.post(url, data)
      .then((response) => {
        toast(`Now you create the ${entityName}!`);
        return response;
      })
      .catch((error) => {
        toast(`Error to create the ${entityName}!`);
        return error;
      }),
  getById: (url, id) =>
    ApiConfig(baseurl).withOutAutenticate.get(url + "/" + id),
  getAll: (url) => ApiConfig(baseurl).withOutAutenticate.get(url),
  update: (url, data, id) =>
    ApiConfig(baseurl)
      .withOutAutenticate.patch(url + "/" + id, data)
      .then((response) => {
        toast(`Now you have updated the ${entityName}!`);
        return response;
      })
      .catch((error) => {
        toast(`Error to update the ${entityName}!`);
        return error;
      }),
  delete: (url, id) =>
    ApiConfig(baseurl)
      .withOutAutenticate.delete(url + "/" + id)
      .then((response) => {
        toast(`Now you have deleted the ${entityName}!`);
        return response;
      })
      .catch((error) => {
        toast(`Error to delete the ${entityName}!`);
        return error;
      }),
});

export default ApiCrud;
