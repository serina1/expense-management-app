const router = require("express").Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
let User = require("../../models/userModel");
const auth = require("../../middleware/auth");

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/signup").post((req, res) => {
  const { body } = req;
  let { firstname, lastname, email, password } = body;

  if (!firstname) {
    return res.send({
      success: false,
      message: "Error: First name cannot be blank"
    });
  }
  if (!lastname) {
    return res.send({
      success: false,
      message: "Error: Last name cannot be blank"
    });
  }
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

  User.find(
    {
      email: email
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: "Error: Email address is already in use."
        });
      }

      const newUser = new User();

      newUser.firstname = firstname;
      newUser.lastname = lastname;
      newUser.email = email;
      newUser.password = newUser.generateHash(password);
      newUser.save().then(user => {
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
    }
  );
});

router.route("/login", auth).post((req, res) => {
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
