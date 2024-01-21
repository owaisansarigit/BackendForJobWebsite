const express = require("express");
const router = express.Router();
const Job = require("../Models/Jobs");
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

router.post('/login',async(req,res)=>{
  console.log(req.body);
  console.log("Login Req");
})

module.exports = router;
