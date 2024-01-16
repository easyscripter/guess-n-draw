import axios, { AxiosInstance } from "axios";
import {
  AddUserInGameSessionRequest,
  GameSessionRequest,
  UpdateGameSessionRequest,
} from "../types/gameSession";
import { WordsListResponse } from "../types/wordsList";

class ApiService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_API_HOST,
    });
  }
  createGameSession = async (session: GameSessionRequest) => {
    const { data } = await this.axiosInstance.post<GameSessionRequest>(
      "/create-session",
      session
    );
    return data;
  };
  getWordsLists = async () => {
    const { data } = await this.axiosInstance.get<WordsListResponse>(
      "/words-lists"
    );
    return data;
  };
  updateGameSession = async (session: UpdateGameSessionRequest) => {
    const { data } = await this.axiosInstance.put<UpdateGameSessionRequest>(
      "/update-session",
      session
    );
    return data;
  };
  addUserInGameSession = async (values: AddUserInGameSessionRequest) => {
    const { data } = await this.axiosInstance.post<AddUserInGameSessionRequest>(
      "/add-user-in-session",
      values
    );
    return data;
  };
}

export default new ApiService();
