import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/dashboard">Dashboard</NavLink>
      <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/applications">Applications</NavLink>
      <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/skill-gap">Skill Gap</NavLink>
      <NavLink className={({ isActive }) => `nav-link${isActive ? " active" : ""}`} to="/resume">Resume</NavLink>
    </div>
  );
}

export default Navbar;
