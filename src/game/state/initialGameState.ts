import type { GameState } from "../types/game";
import { GAME_CONFIG } from "../config/gameConfig";

export const INITIAL_GAME_STATE: GameState = {
  status: "idle",
  score: 0,
  timeRemaining: GAME_CONFIG.duration,
  kiwiPosition: {
    x: 50,
    y: 50,
  },
};
