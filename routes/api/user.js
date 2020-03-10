const router = require("express").Router();
//const userController = require("../../controllers/expensesController");
let User = require("../../models/userModel");
let UserSession = require("../../models/userSessionModel");

// router.route("/").get(userController.findAll);

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
      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: "Error: Server error"
          });
        }
        return res.send({
          success: true,
          message: "User added!"
        });
      });
    }
  );
});

router.route("/signin").post((req, res) => {
  const { body } = req;
  let { firstname, lastname, email, password } = body;

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
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: "Error: Server error"
        });
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      }

      const user = users[0];
      if (!user.validPassword(password)) {
        return res.send({
          success: false,
          message: "Error: Invalid"
        });
      }

      new userSession
    }
  );
});

module.exports = router;
