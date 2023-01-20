import ApiCrud from "../Api/ApiCrud";

const Users = {
  url: "https://randomuser.me/",
  getUsers: (values) => {
    let options = "";
    if (values !== []) {
      values.forEach((value) => {
        options += "&" + value;
      });
    }
    return ApiCrud(Users.url, "Users").getById(
      "api",
      "?inc=name,email,login,dob,picture&seed=abc&" + options
    );
  },
  userListSetPayload: (apiResponse) => {
    const userResultList = [];
    apiResponse.data.results.forEach((element) => {
      let userData = [
        {
          dataTitle: "Nome Completo",
          dataValue: element.name.first + " " + element.name.last,
        },
        { dataTitle: "Email", dataValue: element.email },
        {
          dataTitle: "Username",
          dataValue: element.login.username,
        },
        {
          dataTitle: "Idade",
          dataValue: element.dob.age,
        },
        {
          dataTitle: "photo",
          dataValue: element.picture.thumbnail,
        },
      ];
      userResultList.push(userData);
    });
    return userResultList;
  },
  filterResult: (result, searchValue) => {
    let filteredResult = { data: { results: [] } };
    result.data.results.forEach((user) => {
      if (filteredResult.data.results.length < 4) {
        if (
          (
            user.name.first.toLowerCase() +
            " " +
            user.name.last.toLowerCase()
          ).includes(searchValue) ||
          user.email.toLowerCase().includes(searchValue) ||
          user.login.username.toLowerCase().includes(searchValue)
        ) {
          filteredResult.data.results.push(user);
        }
      }
    });
    return filteredResult;
  },
};

export default Users;
