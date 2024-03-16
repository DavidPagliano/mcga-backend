import { Router } from 'express';
import productController from '../controllers/product.controller';

const productRouter = Router();

//GET - http://localhost:3000/product/
productRouter.get('/', productController.getProducts);

//GET - http://localhost:3000/product/:codigo
productRouter.get('/:codigo', productController.getByProduct);

//POST - http://localhost:3000/product/
productRouter.post('/',productController.createProduct);

//PUT - http://localhost:3000/product/:codigo
productRouter.put('/:codigo', productController.updateProduct);

//DELETE - http://localhost:3000/product/:codigo
productRouter.delete('/:codigo', productController.deleteProduct);

export default productRouter;