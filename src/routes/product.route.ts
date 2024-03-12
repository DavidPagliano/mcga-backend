import { Router } from 'express';

import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost:3000/product/

productRouter.get('/', productController.getProducts);

//GET - http://localhost/product/:id
productRouter.get('/:id', productController.getByProduct);

//POST - http://localhost:3000/product/create
productRouter.post('/create',productController.createProduct);

//PUT - http://localhost:3000/product/update/:id
productRouter.put('/update', productController.updateProduct);

//DELETE - http://localhost:3000/product/delete/:id
productRouter.delete('/delete', productController.deleteProduct);



export default productRouter;