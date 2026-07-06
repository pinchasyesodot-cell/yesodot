import fs from "fs";
import path from "path";

export const deleteFile = (fileName: string): void => {
  if (!fs.existsSync(fileName)) {
    console.error("File does not exist.");
    return;
  }
  fs.rmSync(fileName);
};

export const createFile = (fileName: string): void => {
  if (fs.existsSync(fileName)) {
    console.error("File already exists.");
    return;
  }
  fs.writeFileSync(fileName, "");
};

export const writeToFile = (fileName: string, text: string): void => {
  if (!fs.existsSync(fileName)) {
    console.error("File does not exist.");
    return;
  }
  fs.writeFileSync(fileName, text);
};

export const createDir = (dirName: string): void => {
  fs.mkdirSync(dirName, { recursive: true });
};

export const deleteDir = (dirName: string): void => {
  fs.rmSync(dirName, { recursive: true , force: true });
};

export const createFileInDir = (dirName: string, fileName: string): void => {
  if (!fs.existsSync(dirName)) {
    fs.mkdirSync(dirName);
  }
  const filePath = path.join(dirName, fileName);
  if (fs.existsSync(filePath)) {
    console.error("File already exists.");
    return;
  }
  fs.writeFileSync(filePath, "");
};

export const deleteFileInDir = (dirName: string, fileName: string): void => {
  const filePath = path.join(dirName, fileName);
  if (!fs.existsSync(filePath)) {
    console.error("File does not exist.");
    return;
  }
  fs.rmSync(filePath);
};

export const mergeFiles = (file1: string, file2: string): void => {
  if (!fs.existsSync(file1) || !fs.existsSync(file2)) {
    console.error("One or both files do not exist.");
    return;
  }
  const dataInFile1 = fs.readFileSync(file1, "utf-8");
  try {
    const dataInFile2 = fs.readFileSync(file2, "utf-8");
    fs.appendFileSync(file1, "\r\n" + dataInFile2);
    fs.rmSync(file2);
    console.log(`Files ${file1} and ${file2} have been merged successfully.`);
  } catch (error) {
    console.error("An error occurred while merging the files:", error);
    fs.writeFileSync(file1, dataInFile1);
    throw error;
  }
};
