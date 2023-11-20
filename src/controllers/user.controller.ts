import { Request, Response } from 'express';
import user from '../models/user';

const userController = {
  getUsers: async (_req: Request, res: Response) => {
    const allUser = await user.find({});
    return res.status(200).json({
      status: 200,
      total: allUser.length,
      data: allUser,
    });
  },

  createUser: async (req: Request, res: Response) => {
    try {
      const newUser = new user({ ...req.body });

      const addUser = await newUser.save();

      if (addUser) {
        return res.status(201).json({
          message: 'Usuario creado exitosamente.',
          data:addUser,
          error: false,
        });
      }
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },
};

export default userController;