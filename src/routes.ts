import { Router } from 'express';

import { loginRouter } from './login';
import { usersRouter } from './users';

export const routes = Router();

// app.get('/', (req: Request, res: Response) => {
routes.get('/', (req, res) => {
    return res.send(`
        <html>
          <p style="font-size: 1.4rem"><span style="font-size: 2rem; font-style: bold">The Guardian API</span> is a service of access MongoDB database and provide data for mobile app created as prototype of the Projeto Integrador 6!</p>
          <ul>
            <li><strong>/login</strong> -> Recurso para manipular a tabela user do banco de dados</li>
          <ul>
          <br>
          <h2>This project is developed by the team 4N.58 Cerqueira César</h2>
        </html>
    `);
});

routes.get('/version', (req, res) => res.json({version: '1.0.0'}));

routes.use('/login', loginRouter);
routes.use('/users', usersRouter);