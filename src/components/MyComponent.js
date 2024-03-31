// 2 cach dinh nghia component
// class component vs function component

import React from "react";
import UserInfo from "./UserInfo";
import DisplayInfo from "./DisplayInfo";

// inherit React.Component
class MyComponent extends React.Component {
  //JSX - viet code js trong html
  render() {
    return (
      <div>
        <UserInfo />
        <br />
        <br />
        <DisplayInfo name="HTHds" age="30" />
      </div>
    );
  }
}

export default MyComponent;
