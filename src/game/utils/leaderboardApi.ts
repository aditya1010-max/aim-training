import type { LeaderboardEntry } from "../types/leaderboard";

const API_URL = `${import.meta.env.VITE_API_URL}/api/leaderboard`;

export async function getLeaderboard(): Promise<LeaderboardEntry[]> {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to load leaderboard");
  }

  return response.json() as Promise<LeaderboardEntry[]>;
}

export async function submitScore(
  playerName: string,
  score: number,
): Promise<LeaderboardEntry[]> {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      playerName,
      score,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit score");
  }

  return response.json() as Promise<LeaderboardEntry[]>;
}
