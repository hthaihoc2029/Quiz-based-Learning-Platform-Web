import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";
import { GoEye } from "react-icons/go";
import { FaEyeSlash } from "react-icons/fa";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async () => {
    if (email === "") {
      toast.error("Required email!");
      return;
    }
    if (password === "") {
      toast.error("Required password!");
      return;
    }

    // validate
    //submit api
    let res = await postRegister(email, password, username);
    console.log(">>check res:", res);

    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/login");
    }
    if (res && res.EC !== 0) {
      toast.error(res.EM);
    }
  };
  return (
    <>
      <div className="register-container">
        <div className="header">
          {" "}
          <span>Already have account?</span>
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
        <div className="title col-4 mx-auto">BK Quiz</div>
        <div className="welcome col-4 mx-auto">Start your journey</div>
        <div className="content-form col-4 mx-auto">
          <div className="form-group">
            <label>Email (*)</label>
            <input
              className="form-control"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password (*)</label>
            <div className="input-password">
              <input
                className="form-control"
                type={!showPassword ? "password" : "text"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {!showPassword && (
                <div className="iconShowHidePassword">
                  <GoEye
                    onClick={() => {
                      setShowPassword(true);
                    }}
                  />
                </div>
              )}
              {showPassword && (
                <div className="iconShowHidePassword">
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(false);
                    }}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              className="form-control"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div>
            <button onClick={() => handleRegister()} className="btnSubmit">
              Create BKQuiz account
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

export default Register;
