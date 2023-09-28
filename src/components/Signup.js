const Signup = () => {
  return (
    <div className="form">
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
          />
        </div>
      </div>
      <div className="register">
        <button className="btn" type="submit">
          Register
        </button>
      </div>
    </div>
  );
};

export default Signup;
