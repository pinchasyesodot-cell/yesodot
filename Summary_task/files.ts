import fs from "fs";
import path from "path";

export const deleteFile = (fileName: string): void => {
  fs.rmSync(fileName);
};

export const createFile = (fileName: string): void => {
  fs.writeFileSync(fileName, "");
};

export const writeToFile = (fileName: string, text: string): void => {
  fs.writeFileSync(fileName, text);
}

export const createDir = (dirName: string): void => {
    fs.mkdirSync(dirName);
}

export const deleteDir = (dirName: string): void => {
    fs.rmSync(dirName, { recursive: true });
}

export const createFileInDir = (dirName: string, fileName: string): void => {
    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
    const filePath = path.join(dirName, fileName);
    fs.writeFileSync(filePath, "");
}

export const deleteFileInDir = (dirName: string, fileName: string): void => {
    const filePath = path.join(dirName, fileName);
    fs.rmSync(filePath);
}

export const mergeFiles = (file1: string, file2: string): void => {
    const dataInFile2 = fs.readFileSync(file2, "utf-8");
    fs.appendFileSync(file1, '\r\n' + dataInFile2);
    fs.rmSync(file2);
}