import axios from "axios";

export default {
  saveUser: function(userData) {
    return axios.post("/users", userData);
  },
  createExpense: function(userData) {
    return axios.post("/expenses/add", userData);
  },
  signinUser: function(userData) {
    return axios.post("/users/signin", userData);
  }
};

