import mongoose from "mongoose";
import { MONGODB_URI } from "./config";
import User from './models/user';
import Client from './models/client';
import Product from './models/product';

export const connectDB = async () => {
  try {
    //Conect DB mongo Atlas and create per first time all collections of the schemas and models
    await mongoose.connect(MONGODB_URI)
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
      })
    console.log("MongoDB is connected");
  } catch (error) {
    console.error(error);
  }
};