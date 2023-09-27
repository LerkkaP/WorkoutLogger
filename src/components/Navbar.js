import { Routes, Route, NavLink } from "react-router-dom";

import Signup from "./Signup";
import Workouts from "./Workouts";

const Navbar = () => {
  return (
    <div>
      <div>
        <NavLink to={"/"}>Workouts</NavLink>
        <NavLink to={"/signup"}>Signup</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Workouts />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default Navbar;
