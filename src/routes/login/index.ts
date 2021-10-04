import { Router } from "express";

export const loginRouter = Router();

loginRouter.get('/:email/:password', (req, res) => {
    if ((req.params.email === 'claudiostocco@gmail.com') && (req.params.password === '123')) {
        return res.status(200).json({
            status: 200,
            name: 'Claudio Marcio Stocco',
        })    
    }
    return res.status(401).json({
        status: 401,
        message: 'Usuário ou senha inválidos!',
    });
});