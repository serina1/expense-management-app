const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
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


module.exports = mongoose.model("Expense", ExpenseSchema);