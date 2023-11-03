import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import styles from "../../assets/authForms.module.css";
import { loginUser } from "../../actions/AuthActions";
import { useForm } from "react-hook-form";
import { Button, TextField } from "@mui/material";


const Signin = () => {
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
      password: data.password,
    };
    console.log(userData)
    //dispatch(loginUser(userData));
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h2>Sign in</h2>
      <div className={styles.body}>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="username"
            type="text"
            {...register("username", { required: "Username is required" })}
            error={!!errors.username}
            helperText={errors.username && errors.username.message}
          />
        </div>
        <div style={{ marginBottom: "16px" }}>
          <TextField
            fullWidth
            label="password"
            type="password"
            {...register("password", { required: "Password is is required" })}
            error={!!errors.password}
            helperText={errors.password && errors.password.message}
            />
        </div>
      </div>
      <div>
        <Button className={styles.btn} type="submit" variant="contained" color="primary">
          Sign in
        </Button>
      </div>
      <span className={styles.span}>
        Don't have an account?{" "}
        <NavLink className={styles.link} to={"/signup"}>
          Create account
        </NavLink>
      </span>
    </form>
  );
};

export default Signin;
