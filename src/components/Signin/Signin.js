import { useState } from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import styles from "../../assets/authForms.module.css";

const Signin = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username);
    console.log(password);
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.title}>Sign in</h2>
      <div className={styles.body}>
        <div>
          <label className={styles.label} htmlFor="username">
            Username{" "}
          </label>
          <input
            className={styles.field}
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="password">
          <label className={styles.label} htmlFor="password1">
            Password{" "}
          </label>
          <input
            className={styles.field}
            type="password"
            name="password1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={handleLogin} className={styles.btn} type="submit">
          Sign in
        </button>
      </div>
      <span className={styles.span}>
        Don't have an account?{" "}
        <NavLink className={styles.link} to={"/signup"}>
          Create account
        </NavLink>
      </span>
    </div>
  );
};

export default Signin;
