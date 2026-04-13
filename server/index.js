const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});
const authRoutes = require("./routes/authRoutes");


app.use("/api/auth", authRoutes);
const testRoutes = require("./routes/testRoutes");

app.use("/api/test", testRoutes);
const applicationRoutes = require("./routes/applicationRoutes");

app.use("/api/applications", applicationRoutes);
const skillRoutes = require("./routes/skillRoutes");
app.use("/api/skills", skillRoutes);
const resumeRoutes = require("./routes/resumeRoutes");

app.use("/api/resume", resumeRoutes);
mongoose.connect("mongodb://127.0.0.1:27017/placementAI")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

app.listen(5000, () => console.log("Server running on port 5000"));