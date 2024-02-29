import { Schema, model } from "mongoose";
import  { PersonData } from '../types/person.interface';

const PersonSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    Nombre:{
        type: String,
        minLength: 4,
        maxLength: 12,
        required: true,
    },
    Apellido:{
        type: String,
        minLength: 4,
        maxLength: 12,
        required: true,
    },
    Email: {
        type: String,
        maxLength: 8,
        required: true,
    },
    Direccion: {
        type:String,
        required: true
    },
    Fecha_de_nacimiento: {
        type: Date,
        required: false,
    },
    Telefono: {
        type: Number,
        max: 8,
        required: true,
    }
})
const Person = model<PersonData>('Person', PersonSchema);
export default Person;