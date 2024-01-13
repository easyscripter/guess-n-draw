import mongoose, { Schema } from "mongoose";

export interface WordsList extends Document {
  name: string;
  words: string[];
}

const WordsListSchema = new mongoose.Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
    required: true,
  },
  words: {
    type: [String],
    required: true,
  },
});

export default mongoose.model<WordsList>("WordsList", WordsListSchema);
