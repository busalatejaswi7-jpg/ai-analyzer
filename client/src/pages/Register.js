import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await API.post("/auth/register", form);

      alert("Registration Successful");

      navigate("/");

    } catch (err) {

      console.log(err.response?.data || err.message);

      alert("Registration Failed");

    }
  };

  return (

    <div className="login-page">

      <div className="login-left">

        <h1>Create Account</h1>

        <p>
          Start analyzing resumes with AI
          and unlock smart career insights.
        </p>

      </div>

      <div className="login-right">

        <div className="login-card-new">

          <h2>Register 🚀</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Enter Name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
            />

            <input
              type="email"
              placeholder="Enter Email"
              value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value,
                })
              }
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={(e) =>
                setForm({
                  ...form,
                  password: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="login-btn"
            >
              Register
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Register;