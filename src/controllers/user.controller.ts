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
  getByUser: async(_req:Request, res: Response) => {
    try {
      const userFound = await user.findById(_req.params.id);
      if (!userFound) return res.status(204).json({
        status: 204,
        data: userFound,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
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
  updateUser: async (req: Request, res: Response) => {
    try {
      const userUpdated = await user.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!userUpdated) return res.status(204).json({
        message: 'Usuario actualizado exitosamente.',
        data: userUpdated,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
    
  },
  deleteUser: async (req: Request, res: Response) => {
    try {
      const userFound = await user.findByIdAndDelete(req.params.id);
      if (!userFound) return res.status(204).json({
        message: 'Usuario eliminado exitosamente.',
        data: userFound,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  }
};

export default userController;