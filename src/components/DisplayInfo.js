import React from "react";
import "./DisplayInfo.scss";
import logo from "../logo.svg";
class DisplayInfo extends React.Component {
  constructor(props) {
    console.log(">> call constructor");
    super(props);
    //babel compiler
    this.state = {
      isShowListUser: true,
    };
  }

  componentDidMount() {
    console.log(">> call componentDidMount");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(">> call componentDidUpdate", this.props, prevProps);

    if (this.props.listUsers !== prevProps.listUsers) {
      if (this.props.listUsers.length === 5) {
        alert("You have 5 user!");
      }
    }
  }

  handleShowHide = (event) => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    console.log("call me Render");
    // destructuring array/obj
    const { listUsers } = this.props;

    return (
      //props => properties
      <div className="display-info-container">
        <img src={logo} alt="" />
        <div>
          <span
            onClick={(event) => {
              this.handleShowHide(event);
            }}
          >
            {this.state.isShowListUser === true
              ? "Hide list users:"
              : "Show list users:"}
          </span>
        </div>

        {this.state.isShowListUser && (
          <>
            {listUsers.map((user, index) => {
              return (
                <div className={+user.age > 18 ? "red" : "green"} key={user.id}>
                  <div>My name is {user.name}</div>
                  <div>My age is {user.age}</div>
                  <div>
                    <button
                      onClick={() => this.props.handleDeleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
