import { Schema, model } from 'mongoose';
import { UserData } from '../types/user.interface';

const UserSchema = new Schema({
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
}, 
{ 
    versionKey: false,
    timestamps: true, 
});

const User = model<UserData>('User', UserSchema);

export default User;