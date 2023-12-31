import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser } from "../../actions/AuthActions";
import styles from "../../assets/authForms.module.css";
import { Button, TextField } from "@mui/material";

import { validPassword } from "../../utils/Regex";

const Signup = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.auth.message);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    const userData = {
      username: data.username,
      password1: data.password1,
      password2: data.password2,
    };
    dispatch(registerUser(userData));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Create An Account</h2>
      <div className={styles.body}>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username || !!notification}
            helperText={
              (errors.username && errors.username.message) || notification || ""
            }
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="password"
            type="password"
            {...register("password1", {
              required: "Password is required",
              validate: (val) => {
                if (!validPassword.test(val)) {
                  return "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit and one special character.";
                }
              },
            })}
            error={!!errors.password1}
            helperText={errors.password1 && errors.password1.message}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            type="password"
            label="confirm password"
            {...register("password2", {
              required: "Password confirmation is required",
              validate: (val) => {
                if (watch("password1") !== val) {
                  return "Passwords don't match";
                }
              },
            })}
            error={!!errors.password2}
            helperText={errors.password2 && errors.password2.message}
          />
        </div>
      </div>
      <div>
        <Button
          className={styles.btn}
          type="submit"
          variant="contained"
          color="primary"
        >
          Create Account
        </Button>
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
