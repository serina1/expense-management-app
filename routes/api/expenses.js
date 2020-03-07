//const expenseController = require("../../controllers/expensesController");
const router = require("express").Router();
let Expense = require("../../models/expenseModel")

//router.route("/").get(expenseController.findAll);

router.route("/").get((req, res) => {
    Expense.find()
      .then(expenses => res.json(expenses))
      .catch(err => res.status(400).json("Error: " + err));
  });
  
  router.route("/add").post((req, res) => {
    const title = req.body.title;
    const date = req.body.date;
    const category = req.body.category;
    const clienttocharge = req.body.clienttocharge;
    const amount = req.body.amount;
    const notes = req.body.notes; 
  
    const newExpense = new Expense({ title,date, category, clienttocharge, amount, notes});
  
    newExpense
      .save()
      .then(() => res.json("Expense added!"))
      .catch(err => res.status(400).json("Error: " + err));
  });
  

module.exports = router;
