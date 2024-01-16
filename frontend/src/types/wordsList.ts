export type WordsList = {
  _id: string;
  name: string;
  words: string[];
};

export type WordsListResponse = {
  wordsLists: WordsList[];
};
