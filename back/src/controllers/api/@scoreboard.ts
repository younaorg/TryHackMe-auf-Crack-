import { json, Request, Response, Router } from 'express';

const router = Router();
const controller = { controller: '@scoreboard' };
type responseType = "success" | "failure";

router.get('/get', json(), async (req: Request, res: Response) => {
    const response: responseType = "failure";

    res.json({
      ...controller,
      status: 200,
      data: response,
    });
});

export { router };
