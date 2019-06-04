import express from 'express';
import asyncWrapper from '../utils/asyncWrapper';

import {findOne, findAll, create, update, deleteData } from '../services/users'; 

const router = express.Router();

router.get(
  '/',
  asyncWrapper(async (req, res) => {
    const users = findAll();
    res.json(users);
  })
);

router.get(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`getting user with id ${req.params.id}`);
    const user = findOne(req.params.id);
    res.json(user);
  })
);

router.post(
  '/',
  asyncWrapper(async (req, res) => {
    const user = req.body;
    const createdUser = create(user);
    res.json(createdUser);
  })
);

router.put(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`updating user with id ${req.params.id}`);
    const user = req.body;
    const updatedUser = update(req.params.id, user);
    res.json(updatedUser);
  })
);

router.delete(
  '/:id',
  asyncWrapper(async (req, res) => {
    console.log(`deleting user with id ${req.params.id}`);
    deleteData(req.params.id);
    res.status(200).end();
  })
);

export default router;
