import { Router } from 'express';

import userController from '../controllers/user.controller';

const userRouter = Router();

//GET - http://localhost:3000/user/

userRouter.get('/', userController.getUsers);

//GET - http://localhost:3000/user/
userRouter.get('/:1d', userController.getByUser);

//POST - http://localhost/user/create
userRouter.post('/user/create',userController.createUser);

//PUT - http://localhost:3000/user/update
userRouter.put('/user/update', userController.updateUser);

//DELETE - http://localhost:3000/user/delete
userRouter.delete('/user/delete', userController.deleteUser);



export default userRouter;