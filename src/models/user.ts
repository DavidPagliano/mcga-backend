import { Schema, model } from "mongoose";
import  { UserData } from '../types/user.interface';
const userSchema = new Schema({
    Codigo:{
        type: Number,
        required: true,
    },
    Email:{
        type: String,
        required: true,
    },
    Password: {
        type: String,
        minLength: 8,
        required:true,
    },
})
const user = model<UserData>('User', userSchema);
export default user;