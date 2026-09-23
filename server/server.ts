import express from "express";

import {
  addLeaderboardEntry,
  getLeaderboard,
  loadLeaderboard,
} from "./data/leaderboard/leaderboard.service";

import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  "https://aim-training.buildkiwi.space",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error("Not allowed by CORS"));
    },
  }),
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api/leaderboard", (_req, res) => {
  res.json(getLeaderboard());
});

app.post("/api/leaderboard", async (req, res) => {
  const { playerName, score } = req.body;

  if (typeof playerName !== "string" || typeof score !== "number") {
    res.status(400).json({
      message: "Invalid leaderboard entry",
    });

    return;
  }

  const leaderboard = await addLeaderboardEntry(playerName, score);

  res.status(201).json(leaderboard);
});

loadLeaderboard()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error: unknown) => {
    console.error("Failed to load leaderboard:", error);
    process.exit(1);
  });
