const path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "."));
    });
  
    app.get("/stats", function(req, res) {
      res.sendFile(path.join(__dirname, ""));
    });
  
    app.get("/listExpense", function(req, res) {
      res.sendFile(path.join(__dirname, ""));
    });
  };
