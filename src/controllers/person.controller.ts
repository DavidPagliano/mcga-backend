import { Request, Response } from 'express';
import Person from '../models/person';

const peronController = {
    getPersons: async (_req: Request, res: Response) => {
        try {
            const allPerson = await Person.find({});
            return res.status(200).json({
            status: 200,
            total: allPerson.length,
            data: allPerson,
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
      getByPerson: async(_req:Request, res: Response) => {
        try {
          const personFound = await Person.findById(_req.params.id);
          if (!personFound) return res.status(204).json({
            status: 204,
            data: personFound,
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
      createPerson: async (req: Request, res: Response) => {
        try {
          const newPerson = new Person({ ...req.body });
    
          const addPerson = await newPerson.save();
    
          if (addPerson) {
            return res.status(201).json({
              message: 'Persona creada exitosamente.',
              data:addPerson,
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
      updatePerson: async (req: Request, res: Response) => {
        try {
          const personUpdated = await Person.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if (!personUpdated) return res.status(204).json({
            message: 'Persona actualizada exitosamente.',
            data: personUpdated,
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
      deletePerson: async (req: Request, res: Response) => {
        try {
          const personFound = await Person.findByIdAndDelete(req.params.id);
          if (!personFound) return res.status(204).json({
            message: 'Usuario eliminado exitosamente.',
            data: personFound,
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

export default peronController;