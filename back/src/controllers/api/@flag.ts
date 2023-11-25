import { json, Request, Response, Router } from "express";

const router = Router();
const controller = { controller: "@flag" };
type responseType = "success" | "failure";

router.post("/submit", json(), (req: Request, res: Response) => {
  const response: responseType = "failure";

  res.json({
    ...controller,
    status: 200,
    data: response,
  });
});

export { router };
