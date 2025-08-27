// promises
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "data.txt");

async function run() {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    console.log("File content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  } finally {
    console.log("Done");
  }
}

run();
