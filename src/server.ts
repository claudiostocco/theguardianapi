import express from 'express';
import cors from 'cors';

import { routes } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(routes);

// https://dev.to/rogeriorioli/iniciando-um-projeto-nodejs-express-com-typescript-4bfl

// MONGODB_URL=mongodb+srv://pi_user:paNb2g9x6lCKNEKG@cluster0.bosi2.mongodb.net/theguardian?retryWrites=true&w=majority
// MONGODB_URI_1=mongodb+srv://pi_user:paNb2g9x6lCKNEKG@cluster0.bosi2.mongodb.net/theguardian


app.listen(3002);