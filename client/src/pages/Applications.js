import { useEffect, useState } from "react";
import API from "../services/api";

function Applications() {
  const [apps, setApps] = useState([]);
  const [form, setForm] = useState({
    company: "",
    role: "",
  });

  useEffect(() => {
    fetchApps();
  }, []);

  const fetchApps = async () => {
    const res = await API.get("/applications");
    setApps(res.data);
  };

  const addApp = async (e) => {
    e.preventDefault();
    console.log(form);
    await API.post("/applications", form);
    setForm({ company: "", role: "" });
    fetchApps();
  };

  const deleteApp = async (id) => {
    await API.delete(`/applications/${id}`);
    fetchApps();
  };

  const updateStatus = async (id, status) => {
    await API.put(`/applications/${id}`, { status });
    fetchApps();
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Applications</h2>

        <form onSubmit={addApp} className="form-row">
          <input
            placeholder="Company"
            value={form.company}
            onChange={(e) =>
              setForm({ ...form, company: e.target.value })
            }
          />

          <input
            placeholder="Role"
            value={form.role}
            onChange={(e) =>
              setForm({ ...form, role: e.target.value })
            }
          />

          <button className="btn">Add</button>
        </form>

        <div className="apps-list">
          {apps.map((app) => (
            <div key={app._id} className="app-item">
              <h4 className="app-meta">{app.company} - {app.role}</h4>

              <select
                value={app.status}
                onChange={(e) =>
                  updateStatus(app._id, e.target.value)
                }
              >
                <option>Applied</option>
                <option>Interview</option>
                <option>Selected</option>
                <option>Rejected</option>
              </select>

              <button
                className="btn btn-danger"
                onClick={() => deleteApp(app._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Applications;
