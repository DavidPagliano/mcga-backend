import express, { Express, Response } from 'express';
import userRouter from './routes/user.route';
const app: Express = express();
app.use(express.json());


app.use('/users', userRouter);
app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: 'Server is up ✅ - Environment: ' + process.env.ENV,
      data: undefined,
      error: false,
    });
});
  
export default app;