import mongoose, { Schema } from "mongoose";
import WordsList from "./wordsList";

export interface GameSession extends Document {
  roomId: string;
  timePerWord: number;
  wordsListId: number;
  players: string[];
  state: string;
}

const GameSessionSchema = new mongoose.Schema({
  roomId: {
    type: String,
    required: true,
  },
  timePerWord: {
    type: Number,
    required: true,
  },
  wordsListId: {
    type: Schema.Types.ObjectId,
    ref: WordsList,
  },
  players: {
    type: [String],
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

export default mongoose.model<GameSession>("GameSession", GameSessionSchema);
