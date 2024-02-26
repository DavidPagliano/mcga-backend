import { Router } from 'express';

import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost/product/

productRouter.get('/', productController.getProducts);

//GET - http://localhost/product/
productRouter.get('/:1d', productController.getByProduct);

//POST - http://localhost/product/create
productRouter.post('/product/create',productController.createProduct);

//PUT - http://localhost/product/update
productRouter.put('/product/update', productController.updateProduct);

//DELETE - http://localhost/product/delete
productRouter.delete('/product/delete', productController.deleteProduct);



export default productRouter;