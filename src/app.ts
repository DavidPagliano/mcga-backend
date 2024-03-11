import express, { Express, Response } from 'express';
import cors from 'cors';
import userRouter from './routes/user.route';
import personRouter from './routes/person.route';
import productRouter from './routes/product.route';
const app: Express = express();
const ACCEPTED_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:5173',
]
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    

    if (ACCEPTED_ORIGINS.includes(origin!)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
}))

app.use('/user', userRouter);
app.use('/person', personRouter);
app.use('/product', productRouter);
app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: 'Server is up ✅ - Environment: ' + process.env.ENV,
      welcome: 'Welcome to the system',
      error: false,
    });
});
  
export default app;