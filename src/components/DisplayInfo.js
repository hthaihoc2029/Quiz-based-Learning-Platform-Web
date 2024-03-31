import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // destructuring array/obj
    const { age, name } = this.props;

    return (
      //props => properties
      <div>
        <div>My name is {name}</div>
        <div>My age is {age}</div>
      </div>
    );
  }
}

export default DisplayInfo;
