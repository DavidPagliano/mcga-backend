import { Schema, model } from "mongoose";
import  { ClientData } from '../types/client.interface';

const ClientSchema = new Schema({
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
    Fecha_de_nacimiento: {
        type: Date,
        default: '1900/01/01',
        required: false,
    },
    Telefono: {
        type: Number,
        required: true,
    }
})
const Client = model<ClientData>('Client', ClientSchema);
export default Client;