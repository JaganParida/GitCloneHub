const mongoose = require("mongoose");
const Repository = require("../models/repoModel");
const User = require("../models/userModel");
const Issue = require("../models/issueModel");

//createNewRepo
async function createRepository(req, res) {
  const { owner, name, issues, content, description, visibility } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ error: "Repository name is required!" });
    }

    if (!mongoose.Types.ObjectId.isValid(owner)) {
      return res.status(400).json({ error: "Invalid User ID!" });
    }

    const newRepository = new Repository({
      name,
      description,
      visibility,
      owner,
      content,
      issues,
    });

    const result = await newRepository.save();

    res.status(201).json({
      message: "Repository created!",
      repositoryID: result._id,
    });
  } catch (err) {
    console.error("Error during repository creation : ", err.message);
    res.status(500).send("Server error");
  }
}

const getAllRepositories = (req, res) => {
  res.send("All Repositories fetched!");
};

const fetchRepositoryById = (req, res) => {
  res.send("Repository Details fetched!");
};

const fetchRepositoryByName = (req, res) => {
  res.send("Repository Details fetched!");
};

const fetchRepositoryForCurrentUser = (req, res) => {
  res.send("Repository for LOgged in user Fetched!");
};

const updateRepopsitoryById = (req, res) => {
  res.send("Repository updated!");
};

const toggleVisibilityById = (req, res) => {
  res.send("Visibility Toggled!");
};

const deleteRepopsitoryById = (req, res) => {
  res.send("Repository Deleted!");
};

module.exports = {
  createRepository,
  getAllRepositories,
  fetchRepositoryById,
  fetchRepositoryByName,
  fetchRepositoryForCurrentUser,
  updateRepopsitoryById,
  toggleVisibilityById,
  deleteRepopsitoryById,
};
