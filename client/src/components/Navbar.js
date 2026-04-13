import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "20px",
      padding: "10px",
      background: "#222",
      color: "white"
    }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/applications">Applications</Link>
      <Link to="/skill-gap">Skill Gap</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}

export default Navbar;