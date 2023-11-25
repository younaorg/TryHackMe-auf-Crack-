import { json, Request, Response, Router } from "express";
import { byTeam } from "../../functions/game";
import { game } from "../../providers/game.provider";

const router = Router();
const controller = { controller: "@scoreboard" };

router.get("/get", json(), (req: Request, res: Response) => {
  const { teamId } = req.body;
  const flagsForTeam = game.pool.filter(byTeam(teamId));

  res.json({
    ...controller,
    status: 200,
    data: flagsForTeam,
  });
});

export { router };
