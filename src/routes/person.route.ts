import { Router } from 'express';

import peronController from '../controllers/person.controller';

const personRouter = Router();

//GET - http://localhost:3000/person/

personRouter.get('/', peronController.getPersons);

//GET - http://localhost:3000/person/
personRouter.get('/:1d', peronController.getByPerson);

//POST - http://localhost:3000/person/create
personRouter.post('/person/create',peronController.createPerson);

//PUT - http://localhost:3000/person/update
personRouter.put('/person/update', peronController.updatePerson);

//DELETE - http://localhost:3000/person/delete
personRouter.delete('/person/delete', peronController.deletePerson);



export default personRouter;