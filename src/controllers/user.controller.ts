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
      const userCodigo: number = parseInt(_req.params.codigo);

      const userFound = await user.findOne({ codigo: userCodigo });
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

      const {codigo, email, password} = req.body;
      const newUser = new user({ ...req.body });
      const addUser = await newUser.save();
      
      if(codigo && email && password) {
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
      const userCodigo: number = parseInt(req.params.codigo);

      // Verificar si los campos requeridos están presentes en el cuerpo de la solicitud
      const {codigo, email, password} = req.body;
      if (!codigo || !email || !password ) {
        return res.status(400).json({
          message: 'Se requieren todos los campos: email, password, termsConditions',
          error: true,
        });
      }

      // Actualizar el usuario utilizando findOneAndUpdate
      const userUpdated = await user.findOneAndUpdate({codigo: userCodigo}, req.body, {
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
      const userCodigo: number = parseInt(req.params.codigo);
      // Eliminar el usuario utilizando findByIdAndDelete
      const userFound = await user.findOneAndDelete({codigo: userCodigo});

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