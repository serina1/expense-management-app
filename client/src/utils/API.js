import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/users", userData);
  },
  createExpense: function(userData) {
    return axios.post("/expenses/add", userData);
  },
  signupUser: function(userData) {
    return axios.post("/users/signup", userData);
  },
  loginuser: function(userData) {
    return axios.post("/users/login", userData);
  }
};

