import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost:3000/product/
productRouter.get('/', productController.getProducts);

//GET - http://localhost/product/:codigo
productRouter.get('/:codigo', productController.getByProduct);

//POST - http://localhost:3000/product/create
productRouter.post('/create',productController.createProduct);

//PUT - http://localhost:3000/product/update/:codigo
productRouter.put('/update/:codigo', productController.updateProduct);

//DELETE - http://localhost:3000/product/delete/:codigo
productRouter.delete('/delete/:codigo', productController.deleteProduct);

export default productRouter;