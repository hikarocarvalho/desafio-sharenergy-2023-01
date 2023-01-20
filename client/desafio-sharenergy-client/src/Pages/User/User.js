import Search from "../../Components/Search/Search";
import List from "../../Components/ListComponents/List/List";
import "./User.css";
import { useEffect, useState } from "react";
import Users from "../../Entities/Users";

export default function User() {
  const [userList, setUserList] = useState({ page: 1, results: 4 });

  const next = () => {
    Users.getUsers([
      "page=" + (userList.page + 1),
      "results=" + userList.results,
    ])
      .then((response) =>
        setUserList({
          ...userList,
          dataList: Users.userListSetPayload(response),
          page: userList.page + 1,
        })
      )
      .catch((error) => console.log(error));
  };

  const back = () => {
    if (userList.page > 1) {
      Users.getUsers([
        "page=" + (userList.page - 1),
        "results=" + userList.results,
      ])
        .then((response) =>
          setUserList({
            ...userList,
            dataList: Users.userListSetPayload(response),
            page: userList.page - 1,
          })
        )
        .catch((error) => console.log(error));
    }
  };

  const searchUser = (event) => {
    event.preventDefault();
    let searchValue = event.target.inputSearchValue.value.toLowerCase();
    Users.getUsers(["results=500"])
      .then((response) => {
        setUserList({
          ...userList,
          dataList: Users.userListSetPayload(
            Users.filterResult(response, searchValue)
          ),
          page: 1,
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (!userList.dataList) {
      Users.getUsers(["page=" + userList.page, "results=" + userList.results])
        .then((response) =>
          setUserList({
            ...userList,
            dataList: Users.userListSetPayload(response),
          })
        )
        .catch((error) => console.log(error));
    }
  }, [userList]);

  return (
    <section className="user page">
      <Search onSubmit={searchUser} />
      {userList.dataList ? (
        <List dataList={userList.dataList} next={next} back={back} />
      ) : (
        ""
      )}
    </section>
  );
}
