import { useCallback, useEffect, useState } from "react";

import "./App.css";
import GameBoard from "./game/component/GameBoard";
import Leaderboard from "./game/component/Leaderboard";
import { useGame } from "./game/hooks/useGame";
import type { LeaderboardEntry } from "./game/types/leaderboard";
import { getLeaderboard, submitScore } from "./game/utils/leaderboardApi";

function App() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  useEffect(() => {
    getLeaderboard()
      .then((entries) => {
        setLeaderboard(entries);
      })
      .catch((error: unknown) => {
        console.error("Failed to load leaderboard:", error);
      });
  }, []);

  const handleGameFinished = useCallback(async (score: number) => {
    try {
      const updatedLeaderboard = await submitScore("Player", score);

      setLeaderboard(updatedLeaderboard);
    } catch (error: unknown) {
      console.error("Failed to submit score:", error);
    }
  }, []);

  const { gameState, startGame, hitTarget, lastScore } = useGame({
    onGameFinished: handleGameFinished,
  });

  return (
    <main className="app">
      <h1>Aim Training</h1>

      <p>
        Score: {gameState.score} · Time: {gameState.timeRemaining}
      </p>

      <button type="button" onClick={startGame}>
        Start Game
      </button>

      {lastScore !== null && <p>Final Score: {lastScore}</p>}

      <div className="game-layout">
        <GameBoard gameState={gameState} onHitTarget={hitTarget} />

        <Leaderboard entries={leaderboard} />
      </div>
    </main>
  );
}

export default App;
