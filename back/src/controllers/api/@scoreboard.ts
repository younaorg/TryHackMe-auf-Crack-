import { json, Request, Response, Router } from "express";
import { Team } from "../../interfaces";
import { game } from "../../providers/game.provider";
import { byTeamAndSolved } from "../../functions/game";

const router = Router();
const controller = { controller: "@scoreboard" };

router.get("/get", json(), (req: Request, res: Response) => {
  const scores: Team[] = [];
  // eslint-disable-next-line no-plusplus
  for (let index = 0; index < 2; index++) {
    scores.push({ id: index, score: game.pool.filter(byTeamAndSolved(index)).length });
  }

  res.json({
    ...controller,
    status: 200,
    data: scores,
  });
});

export { router };
