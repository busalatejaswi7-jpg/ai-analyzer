import { useState } from "react";
import API from "../services/api";

function SkillGap() {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState([]);

  const analyze = async () => {
    try {
      const res = await API.post("/skills/analyze", { role });
      setSkills(res.data.missingSkills);
    } catch (err) {
      alert("Error analyzing skills ");
    }
  };

  return (
    <div className="page">
      <div className="card center-card">
        <h2>Skill Gap Analyzer</h2>

        <div className="form-row">
          <input
            placeholder="Enter Role (e.g. Frontend Developer)"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </div>

        <button className="btn" onClick={analyze}>Analyze</button>

        <h3>Missing Skills:</h3>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillGap;
