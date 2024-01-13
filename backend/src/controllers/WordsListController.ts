import { Request, Response } from "express";
import WordsList from "../models/wordsList";
export const WordsListController = {
  getWordsList: async (req: Request, res: Response) => {
    const { name } = req.params;
    const wordLists = await WordsList.findOne({ name });
    res.send({ wordLists });
  },
  getWordsLists: async (req: Request, res: Response) => {
    const wordLists = await WordsList.find();
    res.send({ wordLists });
  },
  createWordsList: async (req: Request, res: Response) => {
    const { name, words } = req.body;
    const wordLists = await WordsList.create({ name, words });
    res.send({ wordLists });
  },
  updateWordsList: async (req: Request, res: Response) => {
    const { name, words } = req.body;
    const wordLists = await WordsList.findOneAndUpdate({ name }, { words });
    res.send({ wordLists });
  },
};
