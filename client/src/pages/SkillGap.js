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
    <div style= {{ textAlign: "center", marginTop: "50px" }}>
      <h2>Skill Gap Analyzer </h2>

      <input
        placeholder="Enter Role (e.g. Frontend Developer)"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <br /><br />

      <button onClick={analyze}>Analyze</button>

      <h3>Missing Skills:</h3>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillGap;