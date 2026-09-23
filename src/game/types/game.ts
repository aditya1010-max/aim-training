export type GameStatus = "idle" | "playing" | "finished";

export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  status: GameStatus;
  score: number;
  timeRemaining: number;
  targetPosition: Position;
}
