import { useCallback, useEffect, useState } from "react";

import { GAME_CONFIG } from "../config/gameConfig";
import { INITIAL_GAME_STATE } from "../state/initialGameState";
import type { GameState } from "../types/game";
import { generateRandomTargetPosition } from "../utils/gameUtils";

export function useGame() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);

  const startGame = useCallback(() => {
    setGameState({
      ...INITIAL_GAME_STATE,
      status: "playing",
    });
  }, []);

  const hitTarget = useCallback(() => {
    setGameState((currentState) => {
      if (currentState.status !== "playing") {
        return currentState;
      }

      return {
        ...currentState,
        score: currentState.score + GAME_CONFIG.pointsPerHit,
        targetPosition: generateRandomTargetPosition(),
      };
    });
  }, []);

  const restartGame = useCallback(() => {
    startGame();
  }, [startGame]);

  useEffect(() => {
    if (gameState.status !== "playing") {
      return;
    }

    const timer = window.setInterval(() => {
      setGameState((currentState) => {
        if (currentState.timeRemaining <= 1) {
          return {
            ...currentState,
            status: "finished",
            timeRemaining: 0,
          };
        }

        return {
          ...currentState,
          timeRemaining: currentState.timeRemaining - 1,
        };
      });
    }, 1000);

    return () => {
      window.clearInterval(timer);
    };
  }, [gameState.status]);

  return {
    gameState,
    startGame,
    hitTarget,
    restartGame,
  };
}
