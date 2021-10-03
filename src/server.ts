import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

// https://dev.to/rogeriorioli/iniciando-um-projeto-nodejs-express-com-typescript-4bfl
// https://www.youtube.com/watch?v=aTf8QTjw4RE
// https://www.youtube.com/watch?v=rCeGfFk-uCk

app.listen(3002);