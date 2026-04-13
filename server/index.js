const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
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
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
