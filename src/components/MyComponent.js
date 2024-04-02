// 2 cach dinh nghia component
// class component vs function component

import React, { useState } from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

const MyComponent = () => {
  const listUsersDefault = [
    { id: 1, name: "HTH", age: "10" },
    { id: 2, name: "TBL", age: "20" },
    { id: 3, name: "LQA", age: "30" },
  ];

  const [listUsers, setListUsers] = useState(listUsersDefault);

  const handleAddNewUser = (userObj) => {
    setListUsers([...listUsers, userObj]);
  };

  const handleDeleteUser = (userId) => {
    setListUsers(listUsers.filter((item) => item.id !== userId));
  };

  return (
    <>
      <AddUserInfo handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </>
  );
};

export default MyComponent;
