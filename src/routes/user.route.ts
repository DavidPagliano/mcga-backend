import { Router } from 'express';

import userController from '../controllers/user.controller';

const userRouter = Router();

//GET - http://localhost/user/

userRouter.get('/', userController.getUsers);

//POST - http://localhost/user/create

userRouter.post('/users/create',userController.createUser);

export default userRouter;