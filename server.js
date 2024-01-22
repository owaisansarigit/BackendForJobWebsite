const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const allRoutes = require("./Routes/Routes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const User = require("./Models/Users");

main()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/jobwebsite", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mysecret", 
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());



passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", allRoutes);
