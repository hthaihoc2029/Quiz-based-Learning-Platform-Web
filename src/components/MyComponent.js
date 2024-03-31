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
    this.setState({
      name: "Huynh Thai Hoc",
      age: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    });
  }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        My name is {this.state.name} and I come from {this.state.address},{" "}
        {this.state.age} years old.
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <input
              type="text"
              onChange={(event) => {
                this.handleOnChangeInput(event);
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default MyComponent;
