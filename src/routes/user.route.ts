import { Router } from 'express';
import userController from '../controllers/user.controller';

const userRouter = Router();

//GET - http://localhost:3000/user/
userRouter.get('/', userController.getUsers);

//GET - http://localhost:3000/user/:codigo
userRouter.get('/:codigo', userController.getByUser);

//POST - http://localhost:3000/user/create
userRouter.post('/create',userController.createUser);

//PUT - http://localhost:3000/user/update/:codigo
userRouter.put('/update/:codigo', userController.updateUser);

//DELETE - http://localhost:3000/user/delete/:codigo
userRouter.delete('/delete/:codigo', userController.deleteUser);

export default userRouter;