import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav-link" to="/dashboard">Dashboard</Link>
      <Link className="nav-link" to="/applications">Applications</Link>
      <Link className="nav-link" to="/skill-gap">Skill Gap</Link>
      <Link className="nav-link" to="/resume">Resume</Link>
    </div>
  );
}

export default Navbar;
