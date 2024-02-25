<<<<<<< HEAD
import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

export function validateSchema(validations: ValidationChain[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        validate(req, res, next);
    };
}

export function validate(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        return next();
    }

    const errors = result.formatWith(error => error.msg as string).array();
    res.statusMessage = "Validation error";
    res.status(500).send({ errors });
}
=======
import { NextFunction, Request, Response } from "express";
import { ValidationChain, validationResult } from "express-validator";

export function validateSchema(validations: ValidationChain[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        validate(req, res, next);
    };
}

export function validate(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        return next();
    }

    const errors = result.formatWith(error => error.msg as string).array();
    res.statusMessage = "Validation error";
    res.status(500).send({ errors });
}
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
