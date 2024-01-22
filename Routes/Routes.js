const express = require("express");
const router = express.Router();
const Job = require("../Models/Jobs");
const User = require("../Models/Users");
const passport = require("passport");
router.use(express.json());

router.get("/", async (req, res) => {
  try {
    let jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    console.error("Error fetching jobs:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/createjob", async (req, res) => {
  try {
    let data = await Job.create(req.body);
    res.json({ msg: "Job Created" });
  } catch (error) {
    res.json({ msg: "Job Not Created", error: error });
  }
});

router.post("/register", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    let newUser = await new User({
      username: email,
      name: name,
      email: email,
    });
    let registeredUser = await User.register(newUser, password);
    await registeredUser.save();
    res.json({ msg: "Success !" });
  } catch (e) {
    console.log(e.message);
    res.json({ msg: `Error ${e.message}` });
  }
});

router.post("/login", (req, res) => {});

module.exports = router;
