import express from 'express';
import cors from "cors";
import { config } from "dotenv";
config()
import articles from "./routes/articles.js";

const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/", articles);
app.get("/api/hello/", (req, res) => {
  res.json({
      message: "Hello World"
  });
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});