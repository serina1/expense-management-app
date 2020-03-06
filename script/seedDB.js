const mongoose = require("mongoose");
const db = require("../../model/expenseModel");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/expensemanagementapp"
);

const expensesSeed = [{ title: "hello", name: "test", category: "test" }];

const userSeed = [
  {
    firstname: "first name",
    lastname: "second name",
    email: "email",
    password: "password"
  }
];

db.insert({})
  .then(() => db.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
