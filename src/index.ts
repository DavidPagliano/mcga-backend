import dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import user from './models/user';
import Person from './models/person';
import product from './models/product';
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
    if (isExistCollection == 'user' || isExistCollection == 'people' || isExistCollection == 'products') {
      console.log({ level: 'info', message: 'Create collections in ' + db.connection.db.databaseName });
      user.createCollection();
      Person.createCollection();
      product.createCollection();
      console.log({ level: 'info', message: '✅ user collection created'});
      console.log({ level: 'info', message: '✅ person collection created'});
      console.log({ level: 'info', message: '✅ product collection created'});
    } else {
      console.log({ level: 'infow', message: '✅ The collections exist in: ' + db.connection.db.databaseName });
    }
    //listing your port
    app.listen(port, () => {
      console.log({
        level: 'info',
        message: `Server listening on port ${port}`,
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