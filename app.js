// external imports
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
// internal imports
import { errorHandler, notFoundHandler } from './middlewares/common/errorHandler.js';
import authRouter from './routes/auth.js';
// initializing the dotenv
dotenv.config();

// creating the app object

const app = express();

// database connection
mongoose
    .connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('database connection successful!'))
    .catch((err) => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set static folder
app.use(express.static('./public'));

// routing setup
app.use('/auth', authRouter);
// app.use('/', loginRouter);
// app.use('/users', usersRouter);
// app.use('/inbox', inboxRouter);

// 404 not found handler
app.use(notFoundHandler);

// common error handler
app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`app listening to port ${process.env.PORT}`);
});
