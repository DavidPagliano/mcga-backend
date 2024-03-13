import dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import User from './models/user';
import Client from './models/client';
import Product from './models/product';
import app from './app';
dotenv.config();

//Settings
const MONGODB_URL = 'mongodb+srv://admin:Admin1234@cluster0.kr3qxkt.mongodb.net/db-mcga-system?retryWrites=true&w=majority';
const port = 3000 || 8080;


//Conect DB mongo Atlas and create per first time all collections of the schemas and models
mongoose
  .connect(MONGODB_URL)
  .then((db) => {
    console.clear();
    console.log({ level: 'info', message: '✅ Database '+ db.connection.db.databaseName +' connected'});
    
    const isExistCollection = db.connection.db.collection.name; //I ask if the collection name exist in the db
    if (isExistCollection == 'user' || isExistCollection == 'client' || isExistCollection == 'product') {
      console.log({ level: 'info', message: 'Create collections in ' + db.connection.db.databaseName });
      User.createCollection();
      Client.createCollection();
      Product.createCollection();
      console.log({ level: 'info', message: '✅ user collection created'});
      console.log({ level: 'info', message: '✅ client collection created'});
      console.log({ level: 'info', message: '✅ product collection created'});
    } else {
      console.log({ level: 'infow', message: '✅ The collections exist in: ' + db.connection.db.databaseName });
    }
    //listing your port
    app.listen(port, () => {
      console.log({
        level: 'info',
        message: `Server listening on port:  http://localhost:${port}`,
        label: 'server',
      });
    });
  })
  .catch((error) =>
    console.log({
      level: 'error',
      message: '🔴 Database error: ',
      errorData: error,
      label: 'mongo',
    }),
  );