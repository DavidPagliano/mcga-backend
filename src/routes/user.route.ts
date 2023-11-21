import { Router } from 'express';

import userController from '../controllers/user.controller';

const userRouter = Router();

//GET - http://localhost/user/

userRouter.get('/', userController.getUsers);

//GET - http://localhost/user/
userRouter.get('/:1d', userController.getByUser);

//POST - http://localhost/user/create
userRouter.post('/users/create',userController.createUser);

//PUT - http://localhost/user/update
userRouter.put('/user/update', userController.updateUser);

//DELETE - http://localhost/user/delete
userRouter.delete('/user/delete', userController.deleteUser);



export default userRouter;