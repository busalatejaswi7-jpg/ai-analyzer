import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="page">
      <div className="card center-card">
        <h2>Dashboard</h2>

        <div className="dashboard-actions">
          <button className="btn" onClick={() => navigate("/applications")}>
            Applications
          </button>
          <button className="btn" onClick={() => navigate("/skill-gap")}>
            Skill Gap Analyzer
          </button>
          <button className="btn" onClick={() => navigate("/resume")}>
            Resume Analyzer
          </button>
        </div>

        <button className="btn btn-danger" onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default Dashboard;
