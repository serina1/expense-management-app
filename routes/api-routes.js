const db = require("../model/expenseModel")
const router = require("express").Router();


router.get("/allclaims", (req, res) => {
  db.Expense.find({
    title:{ $regex: new RegExp(req.query.q, 'i')}
  })
  .then(expenses => res.json(expenses))
  .catch(err => res.status(422).end());
})

module.exports = router;
    
