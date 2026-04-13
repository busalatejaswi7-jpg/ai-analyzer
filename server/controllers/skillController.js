const Skill = require("../models/Skill");
const User = require("../models/User");

exports.getSkillGap = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const roleData = await Skill.findOne({ role: user.targetRole });

    if (!roleData) {
      return res.status(404).json({ msg: "Role not found" });
    }

    const missingSkills = roleData.requiredSkills.filter(
      skill => !user.skills.includes(skill)
    );

    res.json({
      yourSkills: user.skills,
      requiredSkills: roleData.requiredSkills,
      missingSkills
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};