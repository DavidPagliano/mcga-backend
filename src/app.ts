import express, { Express, Response } from 'express';
import userRouter from './routes/user.route';
import personRouter from './routes/person.route';
const app: Express = express();
app.use(express.json());


app.use('/user', userRouter);
app.use('/person', personRouter);
app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: 'Server is up ✅ - Environment: ' + process.env.ENV,
      welcome: 'Welcome to the system',
      data: undefined,
      error: false,
    });
});
  
export default app;