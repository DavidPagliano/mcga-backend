import { Router } from 'express';

import clientController from '../controllers/client.controller';

const clientRouter = Router();

//GET - http://localhost:3000/client/

clientRouter.get('/', clientController.getClients);

//GET - http://localhost:3000/client/:id
clientRouter.get('/:id', clientController.getByClient);

//POST - http://localhost:3000/client/create
clientRouter.post('/create',clientController.createClient);

//PUT - http://localhost:3000/client/update/:id
clientRouter.put('/update', clientController.updateClient);

//DELETE - http://localhost:3000/client/delete/:id
clientRouter.delete('/delete', clientController.deleteClient);



export default clientRouter;