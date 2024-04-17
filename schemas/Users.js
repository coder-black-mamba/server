import { Schema } from 'mongoose';

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin'],
    },
});

export default userSchema;
