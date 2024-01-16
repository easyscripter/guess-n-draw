import GameSession from "../models/gameSession";
import { Request, Response } from "express";
export const GameSessionController = {
  getGameSession: async (req: Request, res: Response) => {
    const { roomId } = req.params;
    const gameSession = await GameSession.findOne({ roomId });
    res.send({ gameSession });
  },
  createGameSession: async (req: Request, res: Response) => {
    const { roomId, players, state, timePerWord, wordsListId } = req.body;
    const gameSession = await GameSession.create({
      roomId,
      players,
      state,
      timePerWord,
      wordsListId,
    });
    res.send({ gameSession });
  },
  updateGameSession: async (req: Request, res: Response) => {
    const { roomId, players, state, timePerWord, wordsListId } = req.body;
    const gameSession = await GameSession.findOneAndUpdate(
      { roomId },
      { players, state, timePerWord, wordsListId }
    );
    res.send({ gameSession });
  },
  addUserInGameSession: async (req: Request, res: Response) => {
    const { roomId, name } = req.body;
    const gameSession = await GameSession.findOneAndUpdate(
      { roomId },
      { $push: { players: name } }
    );
    res.send({ gameSession });
  },
};
