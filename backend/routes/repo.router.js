const express = require("express");
const repoController = require("../controllers/repoController");

const repoRouter = express.Router();

repoRouter.get("/allUsers", repoController.getAllUsers);
repoRouter.post("/signup", repoController.signup);
repoRouter.post("/login", repoController.login);
repoRouter.get("/userProfile", repoController.getUserProfile);
repoRouter.put("/updateProfile", repoController.updateUserProfile);
repoRouter.delete("/deleteProfile", repoController.deleteUserProfile);

module.exports = repoRouter;
