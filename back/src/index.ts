import cors from "cors";
import express, { Application, Request, Response } from "express";
import config from "./config";
import { createGame } from "./functions/game";
import { game, setGame } from "./providers/game.provider";
import { router as apiRouter } from "./routes/api";

const app: Application = express();
const { port } = config.server;

const corsOptions = {
  credentials: true,
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(express.static("public"));
app.use(cors(corsOptions));

const gameUpdate = createGame("hpi", 10);
setGame(gameUpdate);

console.log(game);

app.get("/", (req: Request, res: Response) => {
  res.send("CTF Server running here");
});

app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`App is listening on port ${port} !`);
});
