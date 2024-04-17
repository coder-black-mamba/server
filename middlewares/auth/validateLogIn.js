import { check, validationResult } from 'express-validator';

export const validatorChecks = [
    check('email').isEmail(),
    check('password')
        .isLength({ min: 8, max: 20 })
        .trim()
        .withMessage('password length must be between 8-20'),
];

export const validateLogIn = (req, res, next) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: 'Validation error',
            errors: result.array(),
            status: 400,
        });
    }
    return next();
};
