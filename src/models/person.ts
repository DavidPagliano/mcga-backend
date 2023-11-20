import { Schema, model } from "mongoose";
import  { PersonData } from '../types/person.interface';

const PersonSchema = new Schema({
    name:{
        type: String,
        minLength: 4,
        maxLength: 12,
        required: true,
    },
    lastName:{
        type: String,
        minLength: 4,
        maxLength: 12,
        required: true,
    },
    address: [
        {
            nameAddress: {
                type: String,
                required: true,
            },
            numberAddress: {
                type: Number,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            }
        }
    ],
    birthdate: {
        type: Date,
        required: false,
    },
    dni: {
        type: Number,
        max: 8,
        required: true,
    },
    phone: {
        type: Number,
        max: 8,
        required: true,
    },
    email: {
        type: String,
        maxLength: 8,
        required: true,
    },
    gender:[
        {
            female: {
                type: String,
                required: true,
            },
            male: {
                type: String,
                required: true,
            },
            other: {
                type: String,
                required: true,
            }
        }
    ]


})
const Person = model<PersonData>('Person', PersonSchema);
export default Person;