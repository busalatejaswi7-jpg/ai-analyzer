import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <h2 className="logo">
          AI Analyzer
        </h2>

      </div>

      {/* CENTER */}

      <div className="navbar-center">

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/applications"
        >
          Applications
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/skill-gap"
        >
          Skill Gap
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          to="/resume"
        >
          Resume
        </NavLink>

      </div>

      {/* RIGHT */}

      <div className="navbar-right">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

  );
}

export default Navbar;