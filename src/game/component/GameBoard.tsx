import type { GameState } from "../types/game";

interface GameBoardProps {
  gameState: GameState;
  onhitTarget: () => void;
}

function GameBoard({ gameState, onhitTarget }: GameBoardProps) {
  const { targetPosition } = gameState;

  return (
    <section className="game-board" aria-label="target Catch game">
      <button
        type="button"
        className="game-board__target"
        style={{
          left: `${targetPosition.x}%`,
          top: `${targetPosition.y}%`,
        }}
        onClick={onhitTarget}
        aria-label="Catch target"
      >
        🥝{" "}
      </button>{" "}
    </section>
  );
}

export default GameBoard;
