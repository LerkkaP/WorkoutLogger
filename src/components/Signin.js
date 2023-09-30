import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div className="form">
      <h2>Sign in</h2>
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="signin">
        <button onClick={handleLogin} className="btn" type="submit">
          Sign in
        </button>
      </div>
      <span>
        Don't have an account? <NavLink to={"/signup"}>Create account</NavLink>
      </span>
    </div>
  );
};

export default Signin;
