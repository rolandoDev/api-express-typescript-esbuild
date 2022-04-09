
import {Response, Request} from 'express';
import { config } from '../utils/config';
const auth = (req: Request, res: Response, next: Function)=> {
    const apiKey = req.header('x-api-key');
    if(apiKey === config.API_KEY) {
        return next();
    } else {
        return res.status(400).json({error: 'Acceso denegado'}).end();
    }
};
export { auth};