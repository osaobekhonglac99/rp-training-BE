import express, { Express, Request, Response } from "express";
import cors from "cors";
import { postVideo } from "./api";

const app: Express = express();
const port = 3030;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

app.post("/buff-time", async (req: Request, res: Response) => {
  try {
    const { id, csrf } = req.body;
    const data = await postVideo(id, csrf);

    res.send({ data });
  } catch (error) {}
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
