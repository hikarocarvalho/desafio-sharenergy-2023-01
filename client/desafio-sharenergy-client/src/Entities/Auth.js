import ApiCrud from "../Api/ApiCrud";
const Auth = {
  crud: {
    base: ApiCrud("challenge-server:3000/", "auth"),
    login: (data) => Auth.crud.base.create("auth", data),
  },
  setToken: (token) => {
    localStorage.setItem("auth", token);
  },
};

export default Auth;
