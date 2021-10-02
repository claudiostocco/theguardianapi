import { Request, Response, Router } from "express";

import { find } from '../services/database/find';
import { insert } from '../services/database/insert';

export const usersRouter = Router();

usersRouter.get('/', async (req, res) => {
    const users = await find('users', {});
    if (users) {
        return res.status(users.success ? 201 : 500).json(users);
    }
    return res.status(500).json({
        success: false,
        searched: null,
        error: 'Users list shearching error',
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

usersRouter.post('/', async (req: Request, res: Response) => {
    if (req.body) {
        const user = JSON.parse(req.body);
        if (user) {
            const inserted = await insert('users', 'email', user);
            return res.status(inserted?.success ? 201 : 500).json(inserted);
        }
    }
    return res.status(400).json({
        success: false,
        inserted: null,
        error: 'Invalid request body',
    });
})