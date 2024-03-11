import { Router } from 'express';

import userController from '../controllers/user.controller';
const userRouter = Router();

//GET - http://localhost:3000/user/

userRouter.get('/', userController.getUsers);

//GET - http://localhost:3000/user/:id
userRouter.get('/:id', userController.getByUser);

//POST - http://localhost:3000/user/create
userRouter.post('/create',userController.createUser);

//PUT - http://localhost:3000/user/update/:id
userRouter.put('/update/:id', userController.updateUser);

//DELETE - http://localhost:3000/user/delete/:id
userRouter.delete('/delete/:id', userController.deleteUser);



export default userRouter;