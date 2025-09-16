const express = require("express");
const repoController = require("../controllers/repoController");

const repoRouter = express.Router();

repoRouter.post("/repo/create", repoController.createRepository);
repoRouter.get("/repo/all", repoController.getAllRepositories);
repoRouter.get("/repo/:id", repoController.fetchRepositoryById);
repoRouter.get("/repo/:name", repoController.fetchRepositoryByName);
repoRouter.get("/repo/:userID", repoController.fetchRepositoryForCurrentUser);
repoRouter.put("/repo/:id", repoController.updateRepopsitoryById);
repoRouter.patch("/repo/toggle/:id", repoController.toggleVisibilityById);
repoRouter.delete("/repo/delete/:id", repoController.deleteRepopsitoryById);

module.exports = repoRouter;
