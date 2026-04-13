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
      setResult(res.data.message); // or suggestions
    } catch (err) {
      alert("Upload failed ❌");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Resume Analyzer 📄</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={upload}>Upload</button>

      <h3>Analysis Result:</h3>
      <p>{result}</p>
    </div>
  );
}

export default ResumeUpload;