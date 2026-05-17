import { log } from "console";
import fs from "fs";
import path from "path";

const sourceDir = "files_to_move";
const targetDir = "moved_files";
const log_file = "moved_files.txt";

const file_mover = () => {
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir);
  }
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }
  const processItem = (fileName: string) => {
    const oldPath = path.join(sourceDir, fileName);
    if (!fs.existsSync(oldPath)) {
      return;
    }
    let newPath = path.join(targetDir, fileName);
    if (fs.existsSync(newPath)) {
      const ext = path.extname(fileName);
      const baseName = path.basename(fileName, ext);
      let counter = 1;
      while (fs.existsSync(newPath)) {
        newPath = path.join(targetDir, `${baseName}_${counter}${ext}`);
        counter++;
      }
    }
    fs.renameSync(oldPath, newPath);
    log(`${fileName} moved from ${sourceDir} to ${targetDir}`);
    fs.appendFileSync(
      log_file,
      `${fileName} moved from ${sourceDir} to ${targetDir}\n`,
    );
  };
  const files = fs.readdirSync(sourceDir);
  for (const file of files) {
    processItem(file);
  }
  fs.watch(sourceDir, (eventType, filename) => {
    if (eventType === "rename" && filename) {
      processItem(filename);
    }
  });
};

file_mover();
