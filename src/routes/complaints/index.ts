import { Router } from "express";

export const complaintsRouter = Router();

complaintsRouter.get('/', (req, res) => {
    return res.status(200).json({email: 'teste'});
});