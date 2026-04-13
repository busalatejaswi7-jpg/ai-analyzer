import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
   navigate("/");
  };
return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Dashboard </h2>
<button
  onClick={() => navigate("/applications")}
  style={{
    margin: "10px",
    padding: "10px 15px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }}
  onMouseEnter={(e) => (e.target.style.background = "#555")}
  onMouseLeave={(e) => (e.target.style.background = "#333")}
>
  Applications
</button>
      <button onClick={() => navigate("/skill-gap")}>
  Skill Gap Analyzer
</button>
<button onClick={() => navigate("/resume")}>
  Resume Analyzer
</button>

      <br /><br />

      <button onClick={logout}>Logout</button>
    </div>
  );
}

 
export default Dashboard;