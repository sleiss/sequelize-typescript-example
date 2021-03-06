import {Router} from 'express';
import {Actor} from '../models/Actor';

export const actors = Router();

actors.post('/', async (req, res, next) => {
  try {
    const actor = await Actor.create({firstName: "Firstname", lastName: "Lastname"});
    res.status(201).json(actor);
  } catch (e) {
    next(e);
  }
});