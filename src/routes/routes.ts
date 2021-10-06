import { Router } from 'express';

import { loginRouter } from './login';
import { usersRouter } from './users';
import { collectionPlacesRouter } from './collectionPlaces';
import { complaintsRouter } from './complaints';

export const routes = Router();

// app.get('/', (req: Request, res: Response) => {
routes.get('/', (req, res) => {
    return res.send(`
        <html>
          <p style="font-size: 1.4rem"><span style="font-size: 2rem; font-style: bold">The Guardian API</span> is a service of access MongoDB database and provide data for mobile app created as prototype of the Projeto Integrador 6!</p>
          <ul style="font-size: 1.2rem">
            <li><strong>/login</strong> => Recurso para validar o login no App, passando o email e asenha do usuário.</li>
            <li><strong>/users</strong> => Recurso para manipular a tabela "users" do banco de dados, é possível cadastrar (POST), alterar (PUT) e listar (GET) usuários.</li>
            <li><strong>/collectionPlaces</strong> => Recurso para manipular a tabela "collectionPlaces" do banco de dados, é possível cadastrar (POST), alterar (PUT) e listar (GET) locais de coleta de lixo.</li>
            <li><strong>/complaints</strong> => Recurso para manipular a tabela "complaints" do banco de dados, é possível cadastrar (POST), alterar (PUT) e listar (GET) denúncias.</li>
          <ul>
          <br>
          <h2>This project is developed by the team 4N.58 Cerqueira César</h2>
        </html>
    `);
});

routes.get('/version', (req, res) => res.json({version: '1.0.0'}));

routes.use('/login', loginRouter);
routes.use('/users', usersRouter);
routes.use('/collectionPlaces', collectionPlacesRouter);
routes.use('/complaints', complaintsRouter);