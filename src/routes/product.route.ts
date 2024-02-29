import { Router } from 'express';

import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost:3000/product/

productRouter.get('/', productController.getProducts);

//GET - http://localhost/product/
productRouter.get('/:1d', productController.getByProduct);

//POST - http://localhost:3000/product/create
productRouter.post('/product/create',productController.createProduct);

//PUT - http://localhost:3000/product/update
productRouter.put('/product/update', productController.updateProduct);

//DELETE - http://localhost:3000/product/delete
productRouter.delete('/product/delete', productController.deleteProduct);



export default productRouter;