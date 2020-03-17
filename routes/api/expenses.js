//const expenseController = require("../../controllers/expensesController");
const router = require("express").Router();
let Expense = require("../../models/expenseModel")
let User = require("../../models/userModel");

//router.route("/").get(expenseController.findAll);

router.route("/").get((req, res) => {
    Expense.find()
      .then(expenses => res.json(expenses))
      .catch(err => {
        console.log(err)
        res.status(500).json({err})});
  });
  
  router.route("/add").post((req, res) => {
    console.log(req.body)
    const title = req.body.title;
    const date = Date.parse(req.body.date);
    const category = req.body.category;
    const clienttocharge = req.body.clienttocharge;
    const amount = Number(req.body.amount);
    const notes = req.body.notes; 
  
    const newExpense = new Expense({ 
      title,
      date,
      category,
      clienttocharge, 
      amount, 
      notes
    });
  
    newExpense
      .save()
      .then(() => res.json("Expense added!"))
      .catch(err => res.status(500).json("Error: " + err));

      // User.findById(req.session._id)
      //       .then(function(user) {
      //           // push new post into users.posts array from model setup**:
      //           user.expenses.push(newExpense);
      //           user.save();
      //           return res.json(newExpense);
      //       })
  });

  router.route('/:id').get((req, res) => {
    console.log(req.params)
    Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(500).json("Error:" + err))
  });

  router.route('/:id').delete ((req, res) => {
    Expense.findByIdAndDelete(req.params.id)
    .then(() => res.json("Expense Deleted"))
    .catch(err => res.status(500).json("Error:" + err))
  });
  
  router.route('/update/:id').post ((req, res) => {
    Expense.findById(req.params.id)
    .then(expense => {

      expense.title = req.body.title,
      expense.date = Date.parse(req.body.date);
      expense.category = req.body.category;
      expense.clienttocharge = req.body.clienttocharge;
      expense.amount = Number (req.body.amount);
      expense.notes = req.body.notes
    

      expense.save()
     .then(() => res.json("Expense updated")) 
     .catch(err => res.status(500).json("Error:" + err));
    
    })
    
    .catch(err => res.status(500).json("Error:" + err));

      
  });

module.exports = router;
