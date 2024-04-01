// 2 cach dinh nghia component
// class component vs function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

// inherit React.Component
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "HTH", age: "10" },
      { id: 2, name: "TBL", age: "20" },
      { id: 3, name: "LQA", age: "30" },
    ],
  };

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
