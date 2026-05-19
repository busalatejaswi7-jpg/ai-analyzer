function Applications() {

  const jobs = [

    {
      company: "Google",
      role: "Frontend Developer",
      status: "Applied"
    },

    {
      company: "Amazon",
      role: "MERN Stack Intern",
      status: "Interview"
    },

    {
      company: "Microsoft",
      role: "Software Engineer",
      status: "Rejected"
    },

    {
      company: "Netflix",
      role: "React Developer",
      status: "Shortlisted"
    }

  ];

  return (

    <div className="applications-page">

      <div className="applications-header">

        <h1>Applications Tracker</h1>

        <p>
          Track your job applications and
          monitor your interview progress.
        </p>

      </div>

      <div className="applications-grid">

        {
          jobs.map((job, index) => (

            <div
              className="application-card"
              key={index}
            >

              <h2>{job.company}</h2>

              <p>{job.role}</p>

              <span className={`status ${job.status}`}>
                {job.status}
              </span>

            </div>

          ))
        }

      </div>

    </div>

  );
}

export default Applications;