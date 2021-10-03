import { Request, Response, Router } from "express";

import { find } from '../services/database/find';
import { insert } from '../services/database/insert';
import { update } from '../services/database/update';
import { remove } from '../services/database/delete';

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
    });
});

usersRouter.get('/:email', async (req, res) => {
    console.log(req.params.email);
    if (req.params.email) {
        const email = req.params.email;
        const user = await find('users', { email });
        return res.status(user?.success ? 200 : 500).json(user);
    }
    return res.status(200).json({
        success: false,
        searched: null,
        error: 'Invalid parameter request',
    });
});

usersRouter.post('/', async (req: Request, res: Response) => {
    if (req.body) {
        const user = req.body;
        if ((user) && user.email) {
            const inserted = await insert('users', {email: user.email}, user);
            return res.status(inserted?.success ? 201 : 500).json(inserted);
        }
    }
    return res.status(400).json({
        success: false,
        inserted: null,
        error: 'Invalid request body',
    });
});

usersRouter.put('/:email', async (req: Request, res: Response) => {
    if ((req.params['email']) && (req.body)) {
        const user = req.body;
        if (user) {
            const updated = await update('users', {email: req.params['email']}, user);
            return res.status(updated?.success ? 200 : 500).json(updated);
        }
    }
    return res.status(400).json({
        success: false,
        updated: null,
        error: 'Invalid parameters or request body',
    });
});

usersRouter.delete('/:email', async (req: Request, res: Response) => {
    if (req.params['email']) {
        const deleted = await remove('users', {email: req.params['email']});
        return res.status(deleted?.success ? 200 : 500).json(deleted);
    }
    return res.status(400).json({
        success: false,
        updated: null,
        error: 'Invalid request parameters',
    });
});