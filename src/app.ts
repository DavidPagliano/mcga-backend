import express, { Express, Response } from 'express';

const app: Express = express();
app.use(express.json());

app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: 'Server is up ✅ - Environment: ' + process.env.ENV,
      data: undefined,
      error: false,
    });
});
  
export default app;