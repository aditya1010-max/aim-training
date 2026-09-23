import GameBoard from "./game/component/GameBoard";
import { useGame } from "./game/hooks/useGame";
import "./App.css";

function App() {
  const { gameState, startGame, catchKiwi } = useGame();

  return (
    <main className="app">
      {" "}
      <h1>Aim Training</h1>
      <p>
        Score: {gameState.score} · Time: {gameState.timeRemaining}
      </p>
      <button type="button" onClick={startGame}>
        Start Game
      </button>
      <GameBoard gameState={gameState} onCatchKiwi={catchKiwi} />
    </main>
  );
}

export default App;
