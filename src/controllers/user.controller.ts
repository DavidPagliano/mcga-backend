import { Request, Response } from 'express';
import user from '../models/user';

const userController = {
  getUsers: async (_req: Request, res: Response) => {
    try {
      const allUser = await user.find({});
      return res.status(200).json({
        status: 200,
        total: allUser.length,
        data: allUser,
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
  getByUser: async(_req:Request, res: Response) => {
    try {
      // Cambio el id de mongo DB por el codigo para usar de busqueda
      const userCodigo: number = parseInt(_req.params.Codigo);

      const userFound = await user.findOne({ Codigo: userCodigo });
      if (!userFound) {
        return res.status(404).json({
          message: 'Usuario no encontrado',
          error: true,
        });
      }
  
      res.status(200).json({
        status: 200,
        data: userFound,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  },
  createUser: async (req: Request, res: Response) => {
    try {

      const {email, password, termsConditions} = req.body;
      const newUser = new user({ ...req.body });
      const addUser = await newUser.save();
      
      if(email && password && termsConditions) {
        if (addUser) {
          return res.status(201).json({
            message: 'Usuario creado exitosamente.',
            data:addUser,
            error: false,
          });
        }
      }
      
    } catch (error) {
      console.log(error);
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
      const userCodigo: number = parseInt(req.params.Codigo);

      // Verificar si los campos requeridos están presentes en el cuerpo de la solicitud
      const {email, password, termsConditions} = req.body;
      if (!email || !password || !termsConditions) {
        return res.status(400).json({
          message: 'Se requieren todos los campos: email, password, termsConditions',
          error: true,
        });
      }

      // Actualizar el usuario utilizando findOneAndUpdate
      const userUpdated = await user.findOneAndUpdate({Codigo: userCodigo}, req.body, {
        new: true,
      });

      // Verificar si el usuario se actualizó correctamente
      if (!userUpdated) {
        return res.status(404).json({
          message: 'Usuario no encontrado',
          error: true,
        });
      }

      // Devolver una respuesta exitosa con el usuario actualizado
      return res.status(200).json({
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
      const userCodigo: number = parseInt(req.params.Codigo);
      // Eliminar el usuario utilizando findByIdAndDelete
      const userFound = await user.findOneAndDelete({Codigo: userCodigo});

      // Verificar si se encontró y eliminó el usuario correctamente
      if (!userFound) {
        return res.status(404).json({
          message: 'Usuario no encontrado',
          error: true,
        });
      }

      // Devolver una respuesta exitosa indicando que el usuario ha sido eliminado
      return res.status(200).json({
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