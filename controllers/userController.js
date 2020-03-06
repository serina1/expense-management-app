//defining methods for user controller
const db = require ("../models/userModel");


module.exports = {
    findAll: function(req, res) {
    db.User
        .find(req.query)
        .then(dbModel => res.json(dbModel))
    }
}