import { Request, Response } from 'express';
import Client from '../models/client';

const clientController = {
  getClients: async (_req: Request, res: Response) => {
      try {
          const allClient = await Client.find({});
          return res.status(200).json({
          status: 200,
          total: allClient.length,
          data: allClient,
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
  getByClient: async(_req:Request, res: Response) => {
    try {
      const clientCodigo: number = parseInt(_req.params.Codigo);
      const clientFound = await Client.findOne({Codigo: clientCodigo});
      if (!clientFound) return res.status(404).json({
        message: 'Cliente no encontrado',
        error: true,
      });
      res.status(200).json({
        status: 200,
        data: clientFound,
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
  createClient: async (req: Request, res: Response) => {
    try {
      const {Nombre, Apellido,Email, Direccion, Telefono} = req.body;
    
      const newClient = new Client({ ...req.body });

      const addClient = await newClient.save();
      if(Nombre && Apellido && Email && Direccion && Telefono) {
        if (addClient) {
          return res.status(201).json({
            message: 'Cliente creada exitosamente.',
            data:addClient,
            error: false,
          });
        }
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
  updateClient: async (req: Request, res: Response) => {
    try {
      const clientCodigo: number = parseInt(req.params.Codigo);
      const {Nombre, Apellido, Email, Direccion, Telefono} = req.body; 
      
      if(!Nombre || !Apellido || !Email || !Direccion || !Telefono ) {
      return res.status(400).json({
        message: 'Se requieren todos los campos: Nombre, Apellido, Direccion, Fecha de nacimiento, Telefono',
        error: true,
      });
      }

      const clientUpdated = await Client.findOneAndUpdate({Codigo: clientCodigo}, req.body, {
      new: true,
      });

      if (!clientUpdated){
        return res.status(404).json({
          message: 'Cliente no encontrado',
          error: true,
        });
      }

      return res.status(204).json({
        message: 'Cliente actualizado exitosamente.',
        data: clientUpdated,
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
  deleteClient: async (req: Request, res: Response) => {
    try {
      const clientCodigo: number = parseInt(req.params.Codigo);
      const clientFound = await Client.findOneAndDelete({Codigo: clientCodigo});
      if (!clientFound) {
        return res.status(404).json({
          message: 'Cliente no encontrado',
          data: clientFound,
          error: true,
        });
      }
      return res.status(200).json({
        message: 'Cliente eliminado exitosamente.',
        data: clientFound,
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
}

export default clientController;