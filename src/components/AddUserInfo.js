import React, { useState } from "react";

// class AddUserInfo extends React.Component {
//   state = {
//     name: "",
//     age: "",
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };

//   handleOnSubmit = (event) => {
//     event.preventDefault();

//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   //JSX - viet code js trong html
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I come from {this.state.address},{" "}
//         {this.state.age} years old.
//         <div>
//           <form onSubmit={(event) => this.handleOnSubmit(event)}>
//             <label>Your Name:</label>
//             <input
//               value={this.state.name}
//               type="text"
//               onChange={(event) => {
//                 this.handleOnChangeName(event);
//               }}
//             />
//             <label>Your Age:</label>
//             <input
//               value={this.state.age}
//               type="text"
//               onChange={(event) => {
//                 this.handleOnChangeAge(event);
//               }}
//             />
//             <button>Submit</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

const AddUserInfo = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();

    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  //JSX - viet code js trong html

  return (
    <div>
      My name is {name} and I am {age} years old.
      <div>
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <label>Your Name:</label>
          <input
            value={name}
            type="text"
            onChange={(event) => {
              handleOnChangeName(event);
            }}
          />
          <label>Your Age:</label>
          <input
            value={age}
            type="text"
            onChange={(event) => {
              handleOnChangeAge(event);
            }}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddUserInfo;
