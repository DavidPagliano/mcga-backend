import { Router } from 'express';

import clientController from '../controllers/client.controller';

const clientRouter = Router();

//GET - http://localhost:3000/person/

clientRouter.get('/', clientController.getClients);

//GET - http://localhost:3000/person/
clientRouter.get('/:id', clientController.getByClient);

//POST - http://localhost:3000/person/create
clientRouter.post('/create',clientController.createClient);

//PUT - http://localhost:3000/person/update
clientRouter.put('/update', clientController.updateClient);

//DELETE - http://localhost:3000/person/delete
clientRouter.delete('/delete', clientController.deleteClient);



export default clientRouter;