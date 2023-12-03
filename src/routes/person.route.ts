import { Router } from 'express';

import peronController from '../controllers/person.controller';

const personRouter = Router();

//GET - http://localhost/person/

personRouter.get('/', peronController.getPersons);

//GET - http://localhost/person/
personRouter.get('/:1d', peronController.getByPerson);

//POST - http://localhost/person/create
personRouter.post('/person/create',peronController.createPerson);

//PUT - http://localhost/person/update
personRouter.put('/person/update', peronController.updatePerson);

//DELETE - http://localhost/person/delete
personRouter.delete('/person/delete', peronController.deletePerson);



export default personRouter;