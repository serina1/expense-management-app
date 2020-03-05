const expenseController = require("../../controllers/expensesController")
const router = require("express").Router();


router.route("/")
.get(expenseController.findAll)

module.exports = router;
    