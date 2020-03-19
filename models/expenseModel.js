const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({

  title: {
    type: String,
    required: true
  },
  date: {
    type: Date, 
    required: true
  },
  category: {
    type: String,
    required: true
  },
  clienttocharge: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  notes: {
    type: String
  },
  creator: {
    type: String
  }
});


const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
