import express from 'express';

import UserController from './controllers/UserController';

const userController = new UserController();

const routes = express.Router();

routes.get('/user', userController.index);
routes.post('/user', userController.create);
routes.delete('/user', userController.delete);

export default routes;