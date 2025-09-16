const createRepository = (req, res) => {
  res.send("Repository created!");
};

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
