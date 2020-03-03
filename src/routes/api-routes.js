const Expenses = require("../expenseModel")


module.exports = function(app) {


    // get list of expenses
    app.get("/api/listExpense", (req, res) => {
        Expenses.find()
          .then(dbexpensesapp => {
            res.json(dbexpensesapp);
          })
          .catch(err => {
            res.json(err);
          });
      });
    }
