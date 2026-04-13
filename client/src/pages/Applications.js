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
  <div
    style={{
      maxWidth: "600px",
      margin: "auto",
      padding: "20px",
      background: "#121212",
      color: "white",
      minHeight: "100vh"
    }}
  >
    <h2>Applications</h2>

    <form onSubmit={addApp} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Company"
        value={form.company}
        onChange={(e) =>
          setForm({ ...form, company: e.target.value })
        }
        style={{
          marginRight: "10px",
          padding: "8px",
          background: "#222",
          color: "white",
          border: "1px solid #555"
        }}
      />

      <input
        placeholder="Role"
        value={form.role}
        onChange={(e) =>
          setForm({ ...form, role: e.target.value })
        }
        style={{
          marginRight: "10px",
          padding: "8px",
          background: "#222",
          color: "white",
          border: "1px solid #555"
        }}
      />

      <button
        style={{
          padding: "8px 12px",
          background: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Add
      </button>
    </form>

    {apps.map((app) => (
      <div
        key={app._id}
        style={{
          border: "1px solid #444",
          padding: "12px",
          marginBottom: "12px",
          borderRadius: "8px",
          background: "#1e1e1e"
        }}
      >
        <h4>{app.company} - {app.role}</h4>

        <select
          value={app.status}
          onChange={(e) =>
            updateStatus(app._id, e.target.value)
          }
          style={{
            padding: "5px",
            background: "#333",
            color: "white",
            border: "1px solid #555"
          }}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>
        </select>

        <br /><br />

        <button
          onClick={() => deleteApp(app._id)}
          style={{
            background: "#e53935",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "5px"
          }}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
}

export default Applications;