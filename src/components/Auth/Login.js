import { useState } from "react";
import "./Login.scss";
import { Button } from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async () => {
    // validate
    //submit api
    let res = await postLogin(email, password);
    console.log(">>check res:", res);

    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <>
      <div className="login-container">
        <div className="header">
          {" "}
          <span>Don't have an account yet?</span>
          <button>Sign up</button>
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
            <button onClick={() => handleLogin()} className="btnSubmit">
              Login to BKQuiz
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
