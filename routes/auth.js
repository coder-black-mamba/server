import { Router } from 'express';
import { logInController, signUpController } from '../controllers/auth.js';
import { validatorChecks as logInCheck, validateLogIn } from '../middlewares/auth/validateLogIn.js';
// eslint-disable-next-line prettier/prettier
import {
    validatorChecks as signUpCheck,
    validateSignUp,
} from '../middlewares/auth/validateSignUp.js';

const authRouter = Router();
// signing a user in
authRouter.post('/signup', signUpCheck, validateSignUp, signUpController);
// authRouter.post('/signup', signInCheck, validateSignIn, (req, res) => {
//     res.send('Hello Signup');
// });

// logging a user in
authRouter.post('/login', logInCheck, validateLogIn, logInController);
// authRouter.post('/login', logInCheck, validateLogIn, (req, res) => {
//     res.send('Hello Login');
// });

export default authRouter;
