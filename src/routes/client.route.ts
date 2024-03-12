import { Router } from 'express';

import clientController from '../controllers/client.controller';

const clientRouter = Router();

//GET - http://localhost:3000/client/

clientRouter.get('/', clientController.getClients);

//GET - http://localhost:3000/client/:Codigo
clientRouter.get('/:Codigo', clientController.getByClient);

//POST - http://localhost:3000/client/create
clientRouter.post('/create',clientController.createClient);

//PUT - http://localhost:3000/client/update/:Codigo
clientRouter.put('/update/:Codigo', clientController.updateClient);

//DELETE - http://localhost:3000/client/delete/:Codigo
clientRouter.delete('/delete/:Codigo', clientController.deleteClient);



export default clientRouter;