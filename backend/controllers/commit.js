const fs = require("fs").promises;
const path = require("path");

async function commitRepo() {
  console.log("Commit command called");
}

module.exports = { commitRepo };
