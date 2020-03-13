const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 8080;
const app = express();
const databaseUrl = "expensemanagementapp";
const userRouter = require("./routes/api/user");
const authRouter = require("./routes/api/auth")
const expenseRouter = require("./routes/api/expenses")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl,
  { useNewUrlParser: true }
);

app.use("/users", userRouter);
app.use("/auth", authRouter);
app.use("/expenses", expenseRouter);

// Production is for heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// app.use(logger("dev"));
// app.use(express.static("public"));

// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});