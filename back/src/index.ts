import config from './config';
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { router as apiRouter } from './routes/api';

const app: Application = express();
const port = config.server.port;

const corsOptions = {
  credentials: true,
  origin: true,
  optionsSuccessStatus: 200,
};

app.use(express.static('public'));
app.use(cors(corsOptions));

app.get('/', (req: Request, res: Response) => {
  res.send('CTF Server running here');
});

app.use('/api', apiRouter);

app.listen(port, function () {
  console.log(`App is listening on port ${port} !`);
});
