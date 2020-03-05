const express = require("express");
const mongoose = require("mongoose");
const path = require("path")


const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require("./routes");

// app.get("/routes", (req, res) => {
//   const data = {
//   title:"hello",
//    name:"test",
//    category:"test"
//   }
// })

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }


// app.use(logger("dev"));
// app.use(express.static("public"));

const databaseUrl = "expensemanagementapp";

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/" + databaseUrl,
  { useNewUrlParser: true }
);
app.use( apiRoutes)

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

  