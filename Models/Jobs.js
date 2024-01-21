const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  positionName: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  jobPipeline: {
    type: String,
  },
  location: {
    type: String,
    required: true,
  },
  contractDetails: {
    type: String,
    required: true,
  },
  minSalary: {
    type: String,
    required: true,
  },
  maxSalary: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    default: "Rs",
  },
  frequency: {
    type: String,
    required: true,
  },
  skillRequired: {
    type: String,
    default: "",
  },
  internResponsibilities: {
    type: String,
    default: "",
  },
  skillAssessment1: {
    type: String,
    default: "",
  },
  skillAssessment2: {
    type: String,
    default: "",
  },
  skillAssessment3: {
    type: String,
    default: "",
  },
  skillsToCheck: {
    type: String,
    default: "",
  },
  platformQualification: {
    type: String,
    default: "",
  },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
