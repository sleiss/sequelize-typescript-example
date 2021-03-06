import * as express from 'express';
import {actors} from './routes/actors';

export const app = express();

app.use('/actors', actors);