import express from 'express';
import cors from "cors";
/*import { config } from "dotenv";
config()*/
import articles from "./routes/articles.js";
import { METHODS } from 'http';

const PORT = 8000;
const app = express();

app.use(cors(
  {
    origin: ["flowmoro-frontend.vercel.app", "www.flowmoro.com", "flowmoro.com"],
    methods:  ["GET", "POST"],
    credentials: true

  }
));
app.use(express.json());

app.use("/", articles);
/*app.get("/", (req, res) => {
  res.json("Hello");
});*/

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});