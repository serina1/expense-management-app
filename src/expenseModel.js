const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpenseSchema = new Schema(
    {

}
);

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;