import type { LeaderboardEntry } from "../types/leaderboard";

interface LeaderboardProps {
  entries: LeaderboardEntry[];
}

function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <section className="leaderboard" aria-labelledby="leaderboard-title">
      <h2 id="leaderboard-title">Leaderboard</h2>

      {entries.length === 0 ? (
        <p>No scores yet.</p>
      ) : (
        <ol className="leaderboard__list">
          {entries.map((entry) => (
            <li key={entry.id} className="leaderboard__entry">
              <span>{entry.playerName}</span>
              <strong>{entry.score}</strong>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export default Leaderboard;
