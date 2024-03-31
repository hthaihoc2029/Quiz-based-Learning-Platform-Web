// 2 cach dinh nghia component
// class component vs function component

import React from "react";

// inherit React.Component
class MyComponent extends React.Component {
  state = {
    name: "Thai Hoc",
    address: "Phu Yen",
    age: 26,
  };

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        My name is {this.state.name} and I come from {this.state.address},{" "}
        {this.state.age} years old.
      </div>
    );
  }
}

export default MyComponent;
