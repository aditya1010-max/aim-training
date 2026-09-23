import type { Position } from "../types/game";

const POSITION_PADDING = 10;

export function generateRandomTargetPosition(): Position {
  const x = POSITION_PADDING + Math.random() * (100 - POSITION_PADDING * 2);

  const y = POSITION_PADDING + Math.random() * (100 - POSITION_PADDING * 2);

  return {
    x,
    y,
  };
}
