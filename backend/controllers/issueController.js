const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

//Create issue
async function createIssue(req, res) {
  const { title, description } = req.body;
  const { id } = req.params;

  try {
    const issue = new Issue({
      title,
      description,
      repository: id,
    });

    await issue.save();

    res.status(201).json(issue);
  } catch (err) {
    console.error("Error during issue creation : ", err.message);
    res.status(500).send("Server error");
  }
}

const updateIssueById = (req, res) => {
  res.send("Issue updated!");
};

const deleteIssueById = (req, res) => {
  res.send("Issue deleted!");
};

const getAllIssues = (req, res) => {
  res.send("All Issues Fetched!");
};

const getIssueById = (req, res) => {
  res.send("Issue Details Fetched !");
};

module.exports = {
  createIssue,
  updateIssueById,
  deleteIssueById,
  getAllIssues,
  getIssueById,
};
