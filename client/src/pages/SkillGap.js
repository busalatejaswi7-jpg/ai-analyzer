function SkillGap() {

  const skills = [
    "React",
    "Node.js",
    "MongoDB",
    "Docker",
    "AWS",
    "System Design"
  ];

  return (

    <div className="skill-page">

      <div className="skill-header">

        <h1>Skill Gap Analyzer</h1>

        <p>
          AI-detected missing skills based on
          your resume and target role.
        </p>

      </div>

      <div className="skill-grid">

        {
          skills.map((skill, index) => (

            <div
              className="skill-card"
              key={index}
            >

              <h2>{skill}</h2>

              <p>
                Recommended to improve your
                ATS score and job matching.
              </p>

            </div>

          ))
        }

      </div>

      <div className="roadmap-card">

        <h2>Suggested Learning Roadmap 🚀</h2>

        <ul>

          <li>Learn React Projects</li>

          <li>Build REST APIs with Node.js</li>

          <li>Practice MongoDB CRUD</li>

          <li>Learn Docker Basics</li>

          <li>Study AWS Deployment</li>

        </ul>

      </div>

    </div>

  );
}

export default SkillGap;