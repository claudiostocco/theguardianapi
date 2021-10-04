import { Router } from "express";

export const collectionPlacesRouter = Router();

collectionPlacesRouter.get('/', async (req, res) => {
    return res.status(200).json({rua: 'Teste'});
});