import { Schema, model } from "mongoose";
import  { ClientData } from '../types/client.interface';

const ClientSchema = new Schema({
    codigo:{
        type: Number,
        required: true,
    },
    nombre:{
        type: String,
        minLength: 4,
        required: true,
    },
    apellido:{
        type: String,
        minLength: 4,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    direccion: {
        type:String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
    }
})
const Client = model<ClientData>('Client', ClientSchema);
export default Client;