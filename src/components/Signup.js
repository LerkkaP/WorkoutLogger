import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerUser } from "../actions/AuthActions";

const Signup = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleRegister = () => {
    const userData = {
      username: username,
      password1: password1,
      password2: password2,
    };
    dispatch(registerUser(userData));
    setUsername("");
    setPassword1("");
    setPassword2("");
  };

  return (
    <div className="form">
      <h2>Create An Account</h2>
      <div className="form-body">
        <div className="username">
          <label className="form__label" htmlFor="username">
            Username{" "}
          </label>
          <input
            className="form__input"
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <label className="form__label" htmlFor="password1">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            name="password1"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div className="confirm-password">
          <label className="form__label" htmlFor="password2">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </div>
      <div className="register">
        <button className="btn" onClick={handleRegister}>
          Create Account
        </button>
      </div>
      <span>
        Already have an account? <NavLink to={"/signin"}>Sign in</NavLink>
      </span>
    </div>
  );
};

export default Signup;
