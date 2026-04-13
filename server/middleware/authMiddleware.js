const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const header = req.header("Authorization");

  if (!header) {
    return res.status(401).json({ msg: "No token, access denied" });
  }

  
  if (!header.startsWith("Bearer ")) {
    return res.status(401).json({ msg: "Invalid token format" });
  }


  const token = header.split(" ")[1];

  try {
    const verified = jwt.verify(token, "secretkey");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).json({ msg: "Invalid token" });
  }
};