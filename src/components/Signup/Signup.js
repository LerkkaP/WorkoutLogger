import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";

import { registerUser } from "../../actions/AuthActions";
import styles from "../../assets/authForms.module.css";

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
    <div className={styles.form}>
      <h2 className={styles.title}>Create An Account</h2>
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
        <div>
          <label className={styles.label} htmlFor="password1">
            Password{" "}
          </label>
          <input
            className={styles.field}
            type="password"
            name="password1"
            placeholder="Password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="password2">
            Confirm Password{" "}
          </label>
          <input
            className={styles.field}
            type="password"
            name="password2"
            placeholder="Confirm Password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
      </div>
      <div>
        <button className={styles.btn} onClick={handleRegister} type="submit">
          Create Account
        </button>
      </div>
      <span className={styles.span}>
        Already have an account?{" "}
        <NavLink className={styles.link} to={"/signin"}>
          Sign in
        </NavLink>
      </span>
    </div>
  );
};

export default Signup;
