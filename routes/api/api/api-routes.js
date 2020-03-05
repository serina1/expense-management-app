const db = require("../../../model/expenseModel")
const router = require("express").Router();


router.get("/api/allclaims", (req, res) => {
  db.find({
    title:{ $regex: new RegExp(req.query.q, 'i')}
  })
  .then(expenses => res.json(expenses))
  .catch(err => res.status(422).end());
})

module.exports = router;
    
