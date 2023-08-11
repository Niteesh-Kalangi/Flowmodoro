import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import { config } from "dotenv";
config();


/*const connectionString = process.env.ATLAS_URI;
class Database {
  constructor() {
    this._connect();
  }
  _connect() {
    mongoose
      .connect(connectionString)
      .then(() => {
        console.log('Database connection successful');
      })
      .catch((err) => {
        console.error('Database connection failed');
      });
  }
}

export default new Database();
*/
const connectionString = "mongodb+srv://niteesh8175:W4B2zcEPAIyahqEL@cluster0.pgnevai.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("mediastack_news_articles");
console.log(db.listCollections);

export default db;