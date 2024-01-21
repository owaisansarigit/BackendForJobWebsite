const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const allRoutes = require("./Routes/Routes");
const cors = require("cors");
require('dotenv').config();
const app = express();

main()
    .then((result) => {
      console.log("Connected !");
    })
    .catch((err) => {
      console.log("Error in Connection !" + err);
    });
  async function main() {
    await mongoose.connect(process.env.MongoURL);
  }
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: "mysecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use("/", allRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


