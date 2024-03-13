import { Schema, model } from 'mongoose';
import { UserData } from '../types/user.interface';

const userSchema = new Schema({
    codigo:{
        type: Number,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8,
        required: true,
    },
}, { versionKey: false });

const user = model<UserData>('User', userSchema);

export default user;