import { Routes, Route, NavLink } from "react-router-dom";

import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import Workouts from "../Workouts/Workouts";

const Navbar = () => {
  return (
    <div>
      <div>
        <NavLink to={"/"}>Workouts</NavLink>
        <NavLink to={"/signin"}>Sign in</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Workouts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default Navbar;
