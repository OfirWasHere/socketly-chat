import express, { type Request, type Response } from "express";
import { createServer } from "http";
import { appConfig } from "./src/app/appConfig.js";
import { Server } from "socket.io";


const app = express();
const server = createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.send("<h1>Hello world</h1>");
});

server.listen(appConfig.port, () => {
  console.log(`Server running at http://localhost:${appConfig.port}`);
});
