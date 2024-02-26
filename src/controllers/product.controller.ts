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
            const productFound = await Product.findById(_req.params.id);
            if (!productFound) return res.status(204).json({
                status:204,
                data: productFound,
                error: false
            })
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
            const newProduct = new Product({..._req.body});
            const addProduct = await newProduct.save();

            if (addProduct) {
                return res.status(201).json({
                    message: 'Producto creado exitosamente.',
                    data:addProduct,
                    error: false,
                });
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
          const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
          });
          if (!productUpdated) return res.status(204).json({
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
          const productFound = await Product.findByIdAndDelete(req.params.id);
          if (!productFound) return res.status(204).json({
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