import { Schema, model } from "mongoose";
import  { UserData } from '../types/user.interface';
const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        required:true,
    },
    termsConditions: {
        type: Boolean,
        required: true
    }
})
const user = model<UserData>('User', userSchema);
export default user;