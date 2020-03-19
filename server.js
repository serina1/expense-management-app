const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const PORT = process.env.PORT || 8080;
const app = express();
const userRouter = require("./routes/api/user");
const authRouter = require("./routes/api/auth");
const expenseRouter = require("./routes/api/expenses");

// Bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB Config
const db = config.get("mongoURI");

// Connect to Mongo
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

// Use routes
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/expenses", expenseRouter);

// Production is for heroku deployment
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
