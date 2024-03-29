import { Schema, model } from 'mongoose';
import { ProductData } from '../types/product.interface';

const ProductSchema = new Schema({
    codigo: {
        type: Number,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
}, { versionKey: false });

const Product = model<ProductData>('Product', ProductSchema);

export default Product;