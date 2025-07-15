// Function to normalize Vietnamese text by removing diacritical marks
export const normalizeVietnamese = (
    text: string
): string => {
    if (!text) return "";

    // Handle the special case of 'đ'/'Đ' first
    const textWithDReplaced = text
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");

    // We only remove accents.
    return (
        textWithDReplaced
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
            .toLowerCase()
            // Remove special characters (keep spaces and đĐ)
            .replace(/[^\w\sđĐ]/g, "")
    );
};

// Compare two Vietnamese strings ignoring diacritical marks
export const compareVietnamese = (
    str1: string,
    str2: string
): boolean => {
    return (
        normalizeVietnamese(str1) ===
        normalizeVietnamese(str2)
    );
};

// Compare words in two texts and return array of comparison results
export const compareTexts = (
    text1: string,
    text2: string
): {
    word: string;
    correct: boolean;
    expected: string;
}[] => {
    const getWords = (text: string) =>
        text.split(/\s+/).filter(Boolean);

    const wordsFromUser = getWords(text1);
    const cleanWordsFromOriginal = getWords(text2).filter(
        (w) => normalizeVietnamese(w).length > 0
    );

    let originalWordIndex = 0;

    return wordsFromUser.map((userWord) => {
        const isUserWordMeaningful =
            normalizeVietnamese(userWord).length > 0;

        if (isUserWordMeaningful) {
            const expected =
                cleanWordsFromOriginal[originalWordIndex] ||
                "";
            originalWordIndex++;
            return {
                word: userWord,
                correct: compareVietnamese(
                    userWord,
                    expected
                ),
                expected,
            };
        } else {
            // User typed punctuation like "-". This is not a meaningful word.
            // Mark it as incorrect.
            return {
                word: userWord,
                correct: false,
                expected: "",
            };
        }
    });
};
