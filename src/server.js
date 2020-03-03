const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const Expenses = require("../src/expenseModel");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./api-routes.js")(app);
require("./html-routes")(app);

app.use(logger("dev"));



app.use(express.static("public"));

const databaseUrl = "expense-management-app";


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl,
  { useNewUrlParser: true }
);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

  