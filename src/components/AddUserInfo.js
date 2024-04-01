import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "",
    age: "",
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  //JSX - viet code js trong html
  render() {
    return (
      <div>
        My name is {this.state.name} and I come from {this.state.address},{" "}
        {this.state.age} years old.
        <div>
          <form onSubmit={(event) => this.handleOnSubmit(event)}>
            <label>Your Name:</label>
            <input
              value={this.state.name}
              type="text"
              onChange={(event) => {
                this.handleOnChangeName(event);
              }}
            />
            <label>Your Age:</label>
            <input
              value={this.state.age}
              type="text"
              onChange={(event) => {
                this.handleOnChangeAge(event);
              }}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUserInfo;
