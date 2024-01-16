export type GameSessionRequest = {
  roomId: string;
  players: string[];
  timePerWord: number;
  wordsListId: string;
  state: string;
};

export type UpdateGameSessionRequest = {
  roomId: string;
  players?: string[];
  state?: string;
  timePerWord?: number;
  wordsListId?: string;
};

export type AddUserInGameSessionRequest = {
  roomId: string;
  name: string;
};
