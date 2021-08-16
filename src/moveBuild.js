const fse = require("fs-extra");

const srcDir = `./build`;
const destDir = `../docs`;

async function copyFiles() {
  try {
    await fse.copySync(srcDir, destDir, { overwrite: true });
    console.log("Successfully moved files");
  } catch (error) {
    console.log("Failed to move files");
    console.log(error);
  }
}

copyFiles();
