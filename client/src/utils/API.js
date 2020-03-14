import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  createExpense: function(expenseData) {
    return axios.post("/api/expenses/add", expenseData);
  },
  signupUser: function(userData) {
    return axios.post("/api/users/signup", userData);
  },
  loginuser: function(userData) {
    return axios.post("/api/users/login", userData);
  },
  getExpenses: function() {
    return axios.get("/api/expenses/");
  }
};

