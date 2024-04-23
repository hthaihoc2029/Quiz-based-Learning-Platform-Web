import { useState } from "react";
import "./Login.scss";
import { ImSpinner6 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import "nprogress/nprogress.css";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = async () => {
    // validate
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid Email");
      return;
    }
    if (!password) {
      toast.error("Invalid Password");
      return;
    }
    //submit api

    setIsLoading(true);

    let res = await postLogin(email, password);

    if (res && res.EC === 0) {
      dispatch(doLogin(res));
      toast.success(res.EM);
      setIsLoading(false);
      navigate("/");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="header">
          {" "}
          <span>Don't have an account yet?</span>
          <button onClick={() => navigate("/register")}>Sign up</button>
        </div>
        <div className="title col-4 mx-auto">BK Quiz</div>
        <div className="welcome col-4 mx-auto">Hello, who's this?</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <span className="forgot-password">Forgot password?</span>
          <div>
            <button
              disabled={isLoading}
              onClick={() => handleLogin()}
              className="btnSubmit"
            >
              {isLoading === true && <ImSpinner6 className="loaderIcon" />}{" "}
              <span>Login to BKQuiz</span>
            </button>
          </div>
          <div className="text-center">
            <span
              className="back"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              &#60; &#60; Go to HomePage
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
