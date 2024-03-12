import { Schema, model } from "mongoose";
import  { ClientData } from '../types/client.interface';

const ClientSchema = new Schema({
    Codigo:{
        type: Number,
        required: true,
    },
    Nombre:{
        type: String,
        minLength: 4,
        required: true,
    },
    Apellido:{
        type: String,
        minLength: 4,
        required: true,
    },
    Email: {
        type: String,
        required: true,
    },
    Direccion: {
        type:String,
        required: true
    },
    Telefono: {
        type: Number,
        required: true,
    }
})
const Client = model<ClientData>('Client', ClientSchema);
export default Client;