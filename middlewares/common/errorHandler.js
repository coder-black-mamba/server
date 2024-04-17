/* eslint-disable no-unused-vars */
import dotenv from 'dotenv';
import createError from 'http-errors';

// configuaring dotenv
dotenv.config();

export function notFoundHandler(req, res, next) {
    // handeling with express default error handler
    next(createError(404, 'requested content not found'));
}

// common error handler
export function errorHandler(err, req, res, next) {
    if (process.env.NODE_ENV === 'development') {
        res.status(err.status || 500).json({
            message: err.message,
            status: err.status || 500,
            stack: err.stack ? err.stack : '',
        });
    } else {
        res.status(err.status || 500).json({
            message: err.message,
            status: err.status || 500,
        });
    }
}
