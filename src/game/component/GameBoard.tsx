import type { GameState } from "../types/game";

interface GameBoardProps {
  gameState: GameState;
  onCatchKiwi: () => void;
}

function GameBoard({ gameState, onCatchKiwi }: GameBoardProps) {
  const { kiwiPosition } = gameState;

  return (
    <section className="game-board" aria-label="Kiwi Catch game">
      <button
        type="button"
        className="game-board__kiwi"
        style={{
          left: `${kiwiPosition.x}%`,
          top: `${kiwiPosition.y}%`,
        }}
        onClick={onCatchKiwi}
        aria-label="Catch kiwi"
      >
        🥝{" "}
      </button>{" "}
    </section>
  );
}

export default GameBoard;
