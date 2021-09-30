import { Router } from "express";

export const usersRouter = Router();

usersRouter.get('/', (req, res) => {
    return res.status(200).json({
        _id: '1212313321321',
        name: 'Claudio Marcio Stocco',
        email: 'claudiostocco@gmail.com',
    })
});

usersRouter.get('/:email', (req, res) => {
    console.log(req.params.email);
    return res.status(200).json({
        _id: '1212313321321',
        name: 'Claudio Marcio Stocco',
        email: 'claudiostocco@gmail.com',
    })
});