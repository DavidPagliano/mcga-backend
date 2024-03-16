import express, { Express, Response } from 'express';
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRouter from './routes/user.route';
import clientRouter from './routes/client.route';
import productRouter from './routes/product.route';

import { FRONTEND_URL, PORT } from "./config";
const app: Express = express();
const ACCEPTED_ORIGINS = [
  PORT,
  FRONTEND_URL,
]
dotenv.config();
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: (origin, callback) => { //Dentro de la función origin, se verifica si el origen (la URL del sitio web desde donde se originó la solicitud) 
    

    if (ACCEPTED_ORIGINS.includes(origin!)) {
      return callback(null, true) // Si esta incluido en la lista ACCEPTED_ORIGINS, se permite la solicitud
    }

    if (!origin) {
      /*
        Si el origen no está en la lista ACCEPTED_ORIGINS, 
        pero es una solicitud sin origen (como una solicitud desde un servidor o una aplicación que no está en un navegador), 
        también se permite la solicitud llamando a callback(null, true).
      */ 
      return callback(null, true) 
    }
    /* 
      Si el origen no está en la lista ACCEPTED_ORIGINS y no es una solicitud sin origen, 
      se llama a callback(new Error('Not allowed by CORS')), 
      lo que indica que la solicitud no está permitida por CORS.
    */

    return callback(new Error('Not allowed by CORS'))
  }
}))

app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/product', productRouter);
app.get('/', (req, res: Response) => {
    res.status(200).send({
      message: `Server is up ✅ - Environment: ${PORT}` ,
      welcome: 'Welcome to the system',
      error: false,
    });
});
  
export default app;