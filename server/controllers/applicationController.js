const Application = require("../models/Application");


exports.addApplication = async (req, res) => {
  try {
    const newApp = new Application({
      ...req.body,
      userId: req.user.id
    });

    await newApp.save();
    res.json(newApp);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
exports.getApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id });
    res.json(apps);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateApplication = async (req, res) => {
  try {
    const app = await Application.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(app);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.deleteApplication = async (req, res) => {
  try {
    await Application.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};