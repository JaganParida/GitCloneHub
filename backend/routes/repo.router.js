const express = require("express");
const repoController = require("../controllers/repoController");

const repoRouter = express.Router();

repoRouter.get("/repo/create", repoController.createRepository);
repoRouter.post("/repo/all", repoController.signup);
repoRouter.post("/repo/:id", repoController.login);
repoRouter.get("/repo/:name", repoController.getUserProfile);
repoRouter.put("/updateProfile", repoController.updateUserProfile);
repoRouter.delete("/deleteProfile", repoController.deleteUserProfile);

module.exports = repoRouter;
