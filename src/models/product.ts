import { Schema, model } from "mongoose";
import { ProductData } from "../types/product.interface";


const productSchema = new Schema({
    Codigo: {
      type: Number,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Stock: {
      type: Number,
      required: true,
    },
    Precio: {
      type: String,
      required: true,
    },
  });
  const Product = model<ProductData>('Product', productSchema);
  export default Product;