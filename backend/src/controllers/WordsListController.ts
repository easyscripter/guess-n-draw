import { Request, Response } from "express";
import WordsList from "../models/wordsList";
export const WordsListController = {
  getWordsList: async (req: Request, res: Response) => {
    const { name } = req.params;
    const wordsLists = await WordsList.findOne({ name });
    res.send({ wordsLists });
  },
  getWordsLists: async (req: Request, res: Response) => {
    const wordsLists = await WordsList.find();
    res.send({ wordsLists });
  },
  createWordsList: async (req: Request, res: Response) => {
    const { name, words } = req.body;
    const wordsLists = await WordsList.create({ name, words });
    res.send({ wordsLists });
  },
  updateWordsList: async (req: Request, res: Response) => {
    const { name, words } = req.body;
    const wordsLists = await WordsList.findOneAndUpdate({ name }, { words });
    res.send({ wordsLists });
  },
};
