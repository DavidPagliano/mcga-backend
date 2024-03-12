import { Router } from 'express';

import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost:3000/product/

productRouter.get('/', productController.getProducts);

//GET - http://localhost/product/:Codigo
productRouter.get('/:Codigo', productController.getByProduct);

//POST - http://localhost:3000/product/create
productRouter.post('/create',productController.createProduct);

//PUT - http://localhost:3000/product/update/:Codigo
productRouter.put('/update/:Codigo', productController.updateProduct);

//DELETE - http://localhost:3000/product/delete/:Codigo
productRouter.delete('/delete/:Codigo', productController.deleteProduct);



export default productRouter;