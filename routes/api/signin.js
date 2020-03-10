const router = require("express").Router();
//const userController = require("../../controllers/expensesController");
let User = require("../../models/userModel");

app.post('/api/account/signup'), (req, res, next) => {
    const { body } = req;
    const {firstname, lastname, email, password} = body;

    if (!firstname) {
        return res.end({
            success: false,
            message: 'Error: First name cannot be blank'
        });
    }
    if (!lastname) {
        return res.end({
            success: false,
            message: 'Error: Last name cannot be blank'
        });
    }
    if (!email) {
        return res.end({
            success: false,
            message: 'Error: Email cannot be blank'
        });
    }
    if (!password) {
        return res.end({
            success: false,
            message: 'Error: Password cannot be blank'
        });
    }

    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, previousUsers) => {
        if (err) {
            return res.end({
                success: false;
                message: 'Error: Server error'
            });
        } else if (previousUsers.length > 0) {
            return res.end({
                success: false;
                message: 'Error: Email address is already in use.'
            });
        }

        const newUser = new User();

        newUser.firstname = firstname;
        newUser.lastname = lastname;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.save((err, user) => {
            if (err) {
                return res.end({
                    success:false,
                    message: 'Error: Server error'
                });
            }
            return res.end({
                success: true,
                message: 'User added!'
        })
    })
    })
}

module.exports = router;