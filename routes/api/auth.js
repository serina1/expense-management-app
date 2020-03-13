const router = require("express").Router();
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let User = require("../../models/userModel");

router.route("/").post((req, res) => {
  const { body } = req;
  let { email, password } = body;

  if (!email) {
    return res.send({
      success: false,
      message: "Error: Email cannot be blank"
    });
  }
  if (!password) {
    return res.send({
      success: false,
      message: "Error: Password cannot be blank"
    });
  }

  email = email.toLowerCase();

  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // validate password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;
          res.json({
            token,
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        }
      );
    });
  });
});

module.exports = router;
