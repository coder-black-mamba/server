import { check, validationResult } from 'express-validator';

export const validatorChecks = [
    check('email').isEmail().withMessage('invalid email'),
    // eslint-disable-next-line newline-per-chained-call
    check('username')
        .isAlpha()
        .isLength({ min: 3, max: 8 })
        .trim()
        .withMessage('username length must be between 3-8'),
    check('password')
        .isLength({ min: 8, max: 20 })
        .trim()
        .withMessage('password length must be between 8-20'),
];

export const validateSignUp = (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if (!result.isEmpty()) {
        return res.status(400).json({
            message: 'Validation error',
            errors: result.array(),
        });
    }
    return next();
};
