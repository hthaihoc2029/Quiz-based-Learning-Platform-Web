// 2 cach dinh nghia component
// class component vs function component

import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfo from "./AddUserInfo";

// inherit React.Component
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "HTH", age: "10" },
      { id: 2, name: "TBL", age: "20" },
      { id: 3, name: "LQA", age: "30" },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = this.state.listUsers;
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  //JSX - viet code js trong html
  render() {
    return (
      <>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </>
    );
  }
}

export default MyComponent;
