//defining methods for expense controller
const db = require ("../model/expenseModel");


module.exports = {
    findAll: function(req, res) {
    db.Expense
        .find(req.query)
        .then(dbModel => res.json(dbModel))
    }
}