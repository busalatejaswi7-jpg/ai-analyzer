import { useState } from "react";

import API from "../services/api";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const [role, setRole] =
    useState("Frontend Developer");

  const [jobDesc, setJobDesc] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState(null);

  const upload = async () => {

    if (!file) {

      alert("Please select a resume");

      return;

    }

    const formData = new FormData();

    formData.append("resume", file);

    formData.append("role", role);

    formData.append("jobDesc", jobDesc);

    try {

      setLoading(true);

      const token =
        localStorage.getItem("token");

      const res = await API.post(
        "/resume/upload",
        formData,
        {
          headers: {
            Authorization:
              `Bearer ${token}`
          }
        }
      );

      setResult(res.data);

    } catch (err) {

      console.log(err);

      alert("Upload failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="resume-page">

      <div className="resume-header">

        <h1>Resume Analyzer</h1>

        <p>
          Upload your resume and get
          ATS analysis and AI feedback.
        </p>

      </div>

      <div className="resume-card">

        <div className="upload-box">

          <select
            className="role-select"
            value={role}
            onChange={(e) =>
              setRole(e.target.value)
            }
          >

            <option>
              Frontend Developer
            </option>

            <option>
              Backend Developer
            </option>

            <option>
              Full Stack Developer
            </option>

          </select>

          <textarea
            className="job-desc"
            placeholder="Paste Job Description Here..."
            value={jobDesc}
            onChange={(e) =>
              setJobDesc(e.target.value)
            }
          />

          <input
            type="file"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          <button
            className="dashboard-btn"
            onClick={upload}
          >
            {
              loading
                ? "Analyzing..."
                : "Upload Resume"
            }
          </button>

        </div>

        {
          result && (

            <div className="analysis-box">

              <div className="ats-card">

                <h2>ATS Score</h2>

                <div className="ats-score">
                  {result.atsScore}%
                </div>

                <h3>
                  Job Match:
                  {result.matchScore}%
                </h3>

                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{
                      width:
                        `${result.atsScore}%`
                    }}
                  ></div>

                </div>

              </div>

              <div className="mini-card">

                <h3>AI Summary</h3>

                <p className="resume-text">
                  {result.summary}
                </p>

              </div>

              <div className="analysis-grid">

                <div className="mini-card">

                  <h3>Strengths</h3>

                  <div className="badge-wrap">

                    {
                      result.strengths?.map(
                        (item, index) => (

                          <span
                            className="skill-badge good"
                            key={index}
                          >
                            {item}
                          </span>

                        )
                      )
                    }

                  </div>

                </div>

                <div className="mini-card">

                  <h3>Missing Skills</h3>

                  <div className="badge-wrap">

                    {
                      result.missingSkills?.map(
                        (item, index) => (

                          <span
                            className="skill-badge bad"
                            key={index}
                          >
                            {item}
                          </span>

                        )
                      )
                    }

                  </div>

                </div>

              </div>

              <div className="mini-card">

                <h3>AI Suggestions</h3>

                <ul>

                  {
                    result.suggestions?.map(
                      (item, index) => (

                        <li key={index}>
                          {item}
                        </li>

                      )
                    )
                  }

                </ul>

              </div>

              <div className="mini-card">

                <h3>Extracted Resume Text</h3>

                <p className="resume-text">
                  {result.extractedText}
                </p>

              </div>

            </div>

          )
        }

      </div>

    </div>

  );
}

export default ResumeUpload;