import { Router } from 'express';
import clientController from '../controllers/client.controller';

const clientRouter = Router();

//GET - http://localhost:3000/client/
clientRouter.get('/', clientController.getClients);

//GET - http://localhost:3000/client/:codigo
clientRouter.get('/:codigo', clientController.getByClient);

//POST - http://localhost:3000/client/
clientRouter.post('/',clientController.createClient);

//PUT - http://localhost:3000/client/:Codigo
clientRouter.put('/:codigo', clientController.updateClient);

//DELETE - http://localhost:3000/client/:Codigo
clientRouter.delete('/:codigo', clientController.deleteClient);

export default clientRouter;