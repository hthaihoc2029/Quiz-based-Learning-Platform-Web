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

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        <AddUserInfo handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
