export type WordsList = {
  id: number;
  name: string;
  words: string[];
};

export type WordsListResponse = {
  wordsLists: WordsList[];
};
