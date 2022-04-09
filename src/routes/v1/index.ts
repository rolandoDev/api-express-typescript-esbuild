import express, { Request, Response, Router } from "express";
const routes: Router = express.Router();
const helloRoute = require('./hello');

routes.get('/', (req: Request, res: Response) => {
  res.json({item: 'Welcome API DB2...'});
});
routes.use('/hello', helloRoute);
export { routes };
