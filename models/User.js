import { model } from 'mongoose';
import userSchema from '../schemas/Users.js';

const User = model('User', userSchema);

export default User;
