const fs = require("fs").promises;
const path = require("path");
const { v4: uuidV4 } = require("uuid");

async function commitRepo(message) {
  const repoPath = path.resolve(process.cwd(), ".gitclonehub");
  const stagedPath = path.join(repoPath, "Staging");
  const commitPath = path.join(repoPath, "commits");

  try {
    const commitID = uuidV4();
    const commitDir = path.join(commitPath, commitID);
    await fs.mkdir(commitDir, { recursive: true });

    const files = await fs.readdir(stagedPath);
    for (const file of files) {
      await fs.copyFile(
        path.join(stagedPath, file),
        path.join(commitDir, file)
      );
    }
    await fs.writeFile(
      path.join(commitDir, "commit.json"),
      JSON.stringify({ message, date: new Date().toISOString() })
    );
    console.log(`Commit ${commitID} created with message : ${message}`);
  } catch (err) {
    console.error("Error committing files : ", err);
  }
}

module.exports = { commitRepo };
