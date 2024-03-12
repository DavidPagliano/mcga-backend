import { Request, Response} from 'express';
import Product from '../models/product';

const productController = {
  getProducts: async (_req: Request, res: Response) => {
      try {
          const allProduct = await Product.find({});
          return res.status(200).json({
              status:200,
              total: allProduct.length,
              data: allProduct
          });
      } catch(error) {
          if (error instanceof Error) {
              return res.status(400).json({
                message: error.message,
                error: true,
              });
          }
      }
  },
  getByProduct: async (_req:Request, res: Response) => {
    try {
      const productCodigo: number = parseInt(_req.params.Codigo);
      const productFound = await Product.findOne({Codigo: productCodigo});

      if(!productFound){
        return res.status(404).json({
          message: 'Producto no encontrado',
          error: true,
        });
      }
      return res.status(200).json({
        status:200,
        data: productFound,
        error: false
      });
    } catch (error) {
        if (error instanceof Error) {
            return res.status(400).json({
              message: error.message,
              error: true,
            });
        }
    }
  },
  createProduct: async (_req: Request, res: Response) => {
      try {
        const {Codigo,Descripcion, Stock, Precio} = _req.body;
        const newProduct = new Product({..._req.body});
        const addProduct = await newProduct.save();

        if (Codigo  && Descripcion && Stock && Precio ){
          if (addProduct) {
            return res.status(201).json({
                message: 'Producto creado exitosamente.',
                data:addProduct,
                error: false,
            });
          }
        }
        
      } catch (error) {
          if (error instanceof Error) {
              return res.status(400).json({
                message: error.message,
                error: true,
              });
            }
      }
  },
  updateProduct: async (req: Request, res: Response) => {
    try {
      const productCodigo: number = parseInt(req.params.Codigo);
      const {Descripcion, Stock, Precio} = req.body;
      if (!Descripcion || !Stock || !Precio ) {
        return res.status(400).json({
          message: 'Se requieren todos los campos: Descripcion, Stock, Precio',
          error: true,
        });
      }
      const productUpdated = await Product.findOneAndUpdate({Codigo: productCodigo}, req.body, {
        new: true,
      });
      if (!productUpdated) {
        return res.status(404).json({
          message: 'Producto no encontrado',
          error: true,
        });
      }
      return res.status(200).json({
        message: 'Producto actualizado exitosamente.',
        data: productUpdated,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }  
  },
  deleteProduct: async (req: Request, res: Response) => {
    try {
      const productCodigo: number = parseInt(req.params.Codigo);
      const productFound = await Product.findOneAndDelete({Codigo: productCodigo});
      if (!productFound) {
        return res.status(404).json({
          message: 'Producto no encontrado',
          error: true,
        });
      }

      // Devolver una respuesta exitosa indicando que el usuario ha sido eliminado
      return res.status(200).json({
        message: 'Producto eliminado exitosamente.',
        data: productFound,
        error: false,
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({
          message: error.message,
          error: true,
        });
      }
    }
  }
}

export default productController;