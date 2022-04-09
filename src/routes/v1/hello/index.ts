import express, { Application, Request, Response } from "express";
import { auth } from "../../../middlewares/auth";
const app: Application = express();

app.get('/', auth, (req: Request, res:Response) => {
  res.json({item: 'Hello page.2..'});
});

module.exports = app;