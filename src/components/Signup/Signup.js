import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message"

import { registerUser, reset } from "../../actions/AuthActions";
import styles from "../../assets/authForms.module.css";

const Signup = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    const userData = {
      username: data.username,
      password1: data.password1,
      password2: data.password2
    }
    dispatch(registerUser(userData))
    reset()
  }
 
  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.title}>Create An Account</h2>
      <div className={styles.body}>
        <div>
          <label className={styles.label} htmlFor="username">
            Username{" "}
          </label>
          <input
            className={styles.field}
            type="text"
            placeholder="username" {...register("username", { required: true })}
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="password1">
            Password{" "}
          </label>
          <input
            className={styles.field}
            placeholder="password" {...register("password1", { required: true })}
            type="password"
          />
        </div>
        <div>
          <label className={styles.label} htmlFor="password2">
            Confirm Password{" "}
          </label>
          <input
            className={styles.field}
            type="password"
            placeholder="confirm password"
            {...register("password2", {
              required: true,
              validate: (val) => {
                if (watch('password1') != val) {
                  return "Passwords didn't match"
                  console.log("Passwords didn't match")
                }
              },
             })}
          />
          <ErrorMessage errors={errors} name="password2" />

          <ErrorMessage
            errors={errors}
            name="password1"
            render={({ message }) => <p>{message}</p>}
          />
        </div>
      </div>
      <div>
        <button className={styles.btn} type="submit">
          Create Account
        </button>
      </div>
      <span className={styles.span}>
        Already have an account?{" "}
        <NavLink className={styles.link} to={"/signin"}>
          Sign in
        </NavLink>
      </span>
    </form>
  );
};

export default Signup;
