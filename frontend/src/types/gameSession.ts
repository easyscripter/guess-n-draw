export type GameSessionRequest = {
  roomId: string;
  players: string[];
  timePerWord: number;
  wordsListId: number;
  state: string;
};
