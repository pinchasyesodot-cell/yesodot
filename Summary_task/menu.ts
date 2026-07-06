import input from "analiza-sync";
import {
  createDir,
  createFile,
  createFileInDir,
  deleteDir,
  deleteFile,
  deleteFileInDir,
  mergeFiles,
  writeToFile,
} from "./files.js";

const menu = [
  "מחיקה של קובץ",
  "יצירה של קובץ",
  "כתיבת טקסט לקובץ",
  "יצירת תיקייה",
  "מחיקת תיקייה",
  "יצירת קובץ בתיקיה",
  "מחיקת קובץ מתיקיה",
  "איחוד קבצים",
  "יציאה",
];

const showMenu = () => {
  menu.forEach((choice, i) => {
    console.log(`${i + 1}. ${choice}`);
  });
};

export const mainMenu = () => {
  let exit = false;
  while (!exit) {
    showMenu();
    const userChoice: string = input("בחר פעולה: ");
    switch (userChoice) {
      case "1":
        deleteFile(input("הכנס שם קובץ למחיקה: "));
        break;
      case "2":
        createFile(input("הכנס שם קובץ ליצירה: "));
        break;
      case "3":
        writeToFile(
          input("הכנס שם קובץ לכתיבה: "),
          input("הכנס טקסט לכתיבה: "),
        );
        break;
      case "4":
        createDir(input("הכנס שם תיקייה ליצירה: "));
        break;
      case "5":
        deleteDir(input("הכנס שם תיקייה למחיקה: "));
        break;
      case "6":
        createFileInDir(
          input("הכנס שם תיקייה ליצירת קובץ בתוכה: "),
          input("הכנס שם קובץ ליצירה: "),
        );
        break;
      case "7":
        deleteFileInDir(
          input("הכנס שם תיקייה למחיקת קובץ מתוכה: "),
          input("הכנס שם קובץ למחיקה: "),
        );
        break;
      case "8":
        mergeFiles(
          input("הכנס שם קובץ 1 לאיחוד: "),
          input("הכנס שם קובץ 2 לאיחוד: "),
        );
        break;
      case "9":
        exit = true;
        break;
      default:
        console.log("בחירה לא חוקית, נסה שוב.");
    }
  }
};
