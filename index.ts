import express, { Request, Response } from "express";
import { createServer } from "node:http";

const app = express();
const server = createServer(app);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello world</h1>");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
