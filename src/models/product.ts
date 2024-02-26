import { Schema, model } from "mongoose";
import { ProductData } from "../types/product.interface";


const productSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
      required: false,
    },
    deletedAt: {
      type: Date,
      required: false,
    },
  });
  const Product = model<ProductData>('Product', productSchema);
  export default Product;