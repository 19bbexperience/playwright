const fs = require("fs");
const path = require("path");

const targets = ["playwright-report", "test-results"];

function removeTarget(relPath) {
  const p = path.join(process.cwd(), relPath);
  if (!fs.existsSync(p)) {
    console.log(`Not found: ${relPath}`);
    return;
  }
  try {
    fs.rmSync(p, { recursive: true, force: true });
    console.log(`Removed: ${relPath}`);
  } catch (err) {
    console.error(`Failed to remove ${relPath}:`, err.message || err);
    process.exitCode = 1;
  }
}

for (const t of targets) removeTarget(t);

console.log("Clean complete.");
