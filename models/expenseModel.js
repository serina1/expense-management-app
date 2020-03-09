const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date, 
    required: true 
  },
  category: {
    type: String
  },
  clienttocharge: {
    type: String
  },
  amount: {
    type: Number
  },
  notes: {
    type: String
  }
});


const Expense = mongoose.model("Expense", ExpenseSchema);

module.exports = Expense;
