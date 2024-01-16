import { Router } from "express";
import { GameSessionController } from "./controllers/GameSessionController";
import { WordsListController } from "./controllers/WordsListController";

const router = Router();

router.post("/create-session", (req, res) => {
  GameSessionController.createGameSession(req, res);
});

router.get("/get-session/:roomId", (req, res) => {
  GameSessionController.getGameSession(req, res);
});

router.put("/update-session", (req, res) => {
  GameSessionController.updateGameSession(req, res);
});

router.post("/add-user-in-session", (req, res) => {
  GameSessionController.addUserInGameSession(req, res);
});

router.get("/words-lists", (req, res) => {
  WordsListController.getWordsLists(req, res);
});

export default router;
