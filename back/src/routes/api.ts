import { Router } from "express";
import { router as flagController } from "../controllers/api/@flag";
import { router as teamController } from "../controllers/api/@scoreboard";
import { router as statusController } from "../controllers/api/@status";

const router = Router();

router.get("/", (req, res) => {
  res.send("API endpoint lives here");
});

router.use("/@flag", flagController);
router.use("/@team", teamController);
router.use("/@status", statusController);

export { router };
