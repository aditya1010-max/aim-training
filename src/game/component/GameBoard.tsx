import type { GameState } from "../types/game";

interface GameBoardProps {
  gameState: GameState;
  onHitTarget: () => void;
}

function GameBoard({ gameState, onHitTarget }: GameBoardProps) {
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
        onClick={onHitTarget}
        aria-label="Hit target"
      >
        <svg viewBox="0 0 100 100" aria-hidden="true">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="15" />
          <circle cx="50" cy="50" r="5" />
        </svg>
      </button>
    </section>
  );
}

export default GameBoard;
