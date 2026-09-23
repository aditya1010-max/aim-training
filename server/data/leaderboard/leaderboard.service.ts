import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

export interface LeaderboardEntry {
  id: string;
  playerName: string;
  score: number;
  createdAt: string;
}

const MAX_LEADERBOARD_SIZE = 50;

const leaderboardPath = path.resolve(
  process.cwd(),
  "server/data/leaderboard.json",
);

let leaderboard: LeaderboardEntry[] = [];

export async function loadLeaderboard(): Promise<void> {
  const file = await fs.readFile(leaderboardPath, "utf-8");

  if (!file.trim()) {
    leaderboard = [];
    return;
  }

  leaderboard = (JSON.parse(file) as LeaderboardEntry[])
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_LEADERBOARD_SIZE);
}

export function getLeaderboard(): LeaderboardEntry[] {
  return [...leaderboard];
}

export async function addLeaderboardEntry(
  playerName: string,
  score: number,
): Promise<LeaderboardEntry[]> {
  const entry: LeaderboardEntry = {
    id: randomUUID(),
    playerName,
    score,
    createdAt: new Date().toISOString(),
  };

  leaderboard = [...leaderboard, entry]
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_LEADERBOARD_SIZE);

  await fs.writeFile(
    leaderboardPath,
    JSON.stringify(leaderboard, null, 2),
    "utf-8",
  );

  return [...leaderboard];
}
