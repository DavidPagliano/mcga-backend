import { Schema, model } from "mongoose";
import  { UserData } from '../types/user.interface';
const userSchema = new Schema({
    userName: {
        type: String,
        minLength: 5,
        maxLength: 14,
        require: true,
    },
    email:{
        type: String,
        minLength: 8,
        maxLength: 16,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        maxLength: 16,
        required:true,
    }, 
    login: {
        type: Date,
        default: new Date(),
        required: false,
    },
    logout: {
        type: Date,
        required: false,
    },
})
const user = model<UserData>('User', userSchema);
export default user;