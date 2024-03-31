import React from "react";

class DisplayInfo extends React.Component {
  render() {
    // destructuring array/obj
    const { listUsers } = this.props;

    return (
      //props => properties
      <div>
        {listUsers.map((user) => {
          return (
            <div key={user.id}>
              <div>My name is {user.name}</div>
              <div>My age is {user.age}</div>
              <hr />
            </div>
          );
        })}

        {/* <div>My name is {name}</div>
        <div>My age is {age}</div> */}
      </div>
    );
  }
}

export default DisplayInfo;
