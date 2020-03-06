const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  category: {
    type: String
  }
});

const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
