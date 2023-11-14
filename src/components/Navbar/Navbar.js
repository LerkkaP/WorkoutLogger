import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import Signup from "../Signup/Signup";
import Signin from "../Signin/Signin";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Workouts from "../Workouts/Workouts";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        {user.user && <NavLink to={"/"}>Workouts</NavLink>}
        <NavLink to={"/signin"}>Sign in</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
      </div>

      <Routes>
        {user.user ? (
          <Route path="/" element={<Workouts />} />
        ) : (
          <Route path="/signin" element={<Signin />} />
        )}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Navbar;
