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

  handleClick(event) {
    console.log(">> clicked");
    console.log(event);

    //merge State => react Class
    // unuse var in state unchange
    this.setState({
      name: "Huynh Thai Hoc",
      age: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    });
  }
  // Using arrow function when call normal function
  handleOnMouseOver(event) {
    // console.log(this.state.name);
  }

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        My name is {this.state.name} and I come from {this.state.address},{" "}
        {this.state.age} years old.
        <div>
          <button
            onClick={(event) => {
              this.handleClick(event);
            }}
          >
            Click me!
          </button>
          <button
            onMouseOver={(event) => {
              this.handleOnMouseOver(event);
            }}
          >
            Hover me!
          </button>
        </div>
      </div>
    );
  }
}

export default MyComponent;
