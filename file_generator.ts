import fs from "fs/promises";
import path from "path";

const createWords = (count: number): string => {
  let allWords: string[] = [];
  for (let i = 0; i < count; i++) {
    let word = "";
    const wordLength = Math.floor(Math.random() * 6) + 3;
    for (let j = 0; j < wordLength; j++) {
      const charCode = Math.floor(Math.random() * 26) + 97;
      word += String.fromCharCode(charCode);
    }
    allWords.push(word);
  }
  return allWords.join(" ");
};

const file_generator = async (
  numberOfFiles: number,
  numberOfWords: number,
): Promise<void> => {
  const dirName = "created_files";
  await fs.mkdir(dirName, { recursive: true });
  let currentWordCount = numberOfWords;
  for (let i = 0; i < numberOfFiles; i++) {
    const fileName = `file${i + 1}.txt`;
    const filePath = path.join(dirName, fileName);
    const fileContent = createWords(currentWordCount);
    await fs.writeFile(filePath, fileContent);
    console.log(`file name:${fileName} | word Content:${currentWordCount}`);
    currentWordCount *= 2;
  }
};

const inputFiles = parseInt(process.argv[2]);
const inputWords = parseInt(process.argv[3]);
file_generator(inputFiles, inputWords);
