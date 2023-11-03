import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { registerUser, reset } from "../../actions/AuthActions";
import styles from "../../assets/authForms.module.css";
import { Button, TextField } from "@mui/material";

const Signup = () => {
  const dispatch = useDispatch();
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
            label="Username"
            placeholder="username"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username && errors.username.message}
            sx={{ input: { color: 'white' } }}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label={"Password"}
            placeholder="password"
            type="password"
            {...register("password1", { required: "Password is required" })}
            error={!!errors.password1}
            helperText={errors.password1 && errors.password1.message}
            sx={{ input: { color: 'white' } }}
          />
        </div>
        <div>
          <TextField
            fullWidth
            type="password"
            placeholder="confirm password"
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
            sx={{ input: { color: 'white' } }}
          />
        </div>
      </div>
      <div>
        <Button className={styles.btn} type="submit" variant="contained" color="primary">
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
