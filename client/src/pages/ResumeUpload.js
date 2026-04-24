import { useState } from "react";
import API from "../services/api";

function ResumeUpload() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState("");

  const upload = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await API.post("/resume/upload", formData);
      setResult(res.data.message);
    } catch (err) {
      alert("Upload failed ❌");
    }
  };

  return (
    <div className="page">
      <div className="card center-card">
        <h2>Resume Analyzer 📄</h2>

        <div className="form-row">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>

        <button className="btn" onClick={upload}>Upload</button>

        <h3>Analysis Result:</h3>
        <p className="result-box">{result}</p>
      </div>
    </div>
  );
}

export default ResumeUpload;
