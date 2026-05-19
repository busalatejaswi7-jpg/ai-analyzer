import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/");

  };

  return (

    <div className="dashboard-page">

      {/* TOP */}

      <div className="dashboard-top">

        <div>
          <h1>Dashboard</h1>
          <p>
            Welcome back. Here's your AI resume analytics.
          </p>
        </div>

      </div>

      {/* STATS */}

      <div className="stats-grid">

        <div className="stat-card">
          <h2>82%</h2>
          <p>ATS Score</p>
        </div>

        <div className="stat-card">
          <h2>12</h2>
          <p>Applications</p>
        </div>

        <div className="stat-card">
          <h2>5</h2>
          <p>Skill Gaps</p>
        </div>

        <div className="stat-card">
          <h2>AI</h2>
          <p>Resume Ready</p>
        </div>

      </div>

      {/* MAIN CONTENT */}

      <div className="dashboard-content">

        {/* LEFT */}

        <div className="dashboard-left">

          <div className="dashboard-card">

            <h2>Resume Analysis</h2>

            <p>
              Your resume matches 82% of ATS requirements.
              Improve keyword optimization and project descriptions.
            </p>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/resume")}
            >
              Analyze Resume
            </button>

          </div>

          <div className="dashboard-card">

            <h2>Skill Gap Analysis</h2>

            <p>
              Missing skills detected:
              React, Node.js, MongoDB, System Design.
            </p>

            <button
              className="dashboard-btn"
              onClick={() => navigate("/skill-gap")}
            >
              View Skill Gaps
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="dashboard-right">

          <div className="dashboard-card">

            <h2>Quick Actions</h2>

            <div className="quick-actions">

              <button
                className="dashboard-btn"
                onClick={() => navigate("/applications")}
              >
                Applications
              </button>

              <button
                className="dashboard-btn"
                onClick={() => navigate("/resume")}
              >
                Upload Resume
              </button>

              <button
                className="dashboard-btn logout-red"
                onClick={logout}
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Dashboard;