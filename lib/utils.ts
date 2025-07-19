import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function abbreviateWords(inputString: string) {
  const lines = inputString.split("\n");
  const abbreviatedLines = lines.map((line) => {
    const words = line.split(" ");

    const abbreviatedWords = words.map((word) => {
      const firstChar = word.charAt(0);

      let restOfWord = "";

      if (word.length >= 1) {
        restOfWord = "_".repeat(word.length - 1);
      }

      return firstChar + restOfWord;
    });

    return abbreviatedWords.join(" ");
  });

  const result = abbreviatedLines.join("\n");

  return result;
}

function isSpecialCharacter(str: string) {
  // Use a regular expression to check if the string contains only special characters
  return /^[^a-zA-Z0-9]+$/.test(str);
}

export function firstWordsOfLines(inputString: string): string {
  // Split the input string into an array of lines
  const lines = inputString.split("\n");

  // Map over the array and get the first word of each line
  const firstWords = lines.map((line) => {
    // Trim leading and trailing whitespaces from each line
    const trimmedLine = line.trim();

    // Split the line into an array of words
    const words = trimmedLine.split(" ");

    if (isSpecialCharacter(words[0]))
      return words[0] + " " + words[1];
    return words.length > 0 ? words[0] : ""; // Check if there is at least one word
  });

  // Join the first words into a new string with newline characters
  const result = firstWords.join("\n");

  return result;
}

export function compareStringsAndOutputPercentage(
    referenceString: string,
    targetString: string
): {
    percentage: number;
    modifiedString: string;
    resultWords: { word: string; isCorrect: boolean }[];
} {
    const normalizeString = (input: string) =>
        input
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\sĐđ]/g, "")
            .replace(/[\u2022-]/g, "")
            .replace(/\s+/g, " ")
            .replaceAll("đ", "d")
            .replaceAll("Đ", "D")
            .toLowerCase();

    const normalizedReferenceString =
        normalizeString(referenceString);
    const normalizedTargetString =
        normalizeString(targetString);

    // console.log(normalizedReferenceString);
    // console.log(normalizedTargetString);

    const wordsReference = normalizedReferenceString
        .split(" ")
        .filter((word) => word !== "");
    const wordsTarget = normalizedTargetString
        .split(" ")
        .filter((word) => word !== "");

    // console.log(wordsReference);
    // console.log(wordsTarget);

    const commonWords = wordsReference.filter((word) =>
        wordsTarget.includes(word)
    );

    // console.log(commonWords);

    const percentageSimilarity =
        (commonWords.length /
            Math.max(
                wordsReference.length,
                wordsTarget.length
            )) *
        100;

    const resultWords = wordsReference.map((word) => ({
        word,
        isCorrect: wordsTarget.includes(word),
    }));

    const modifiedString = resultWords
        .map((item) =>
            item.isCorrect
                ? item.word
                : item.word.toUpperCase()
        )
        .join(" ")
        .replaceAll("đ", "d");

    return {
        percentage: parseFloat(
            percentageSimilarity.toFixed(2)
        ),
        modifiedString,
        resultWords,
    };
}

export function splitString(inputString: string): string[] {
  const pattern = /[\n]/g; // Dấu ":" hoặc "."
  const splittedStrings = inputString.split(pattern);
  const result: string[] = [];

  for (let i = 0; i < splittedStrings.length; i++) {
    const current = splittedStrings[i].trim();

    if (current) {
      result.push(current);
    }
  }

  return result;
}