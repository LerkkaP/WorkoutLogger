const Signin = () => {
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
      </div>
      <div className="signin">
        <button className="btn" type="submit">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Signin;
