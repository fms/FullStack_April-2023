import { NextFunction, Request, Response } from "express";
import { ValidationChain, checkExact, validationResult } from "express-validator";

// A middleware that will both check multiple ValidationChain and deal with the error
export function validateSchema(validations: ValidationChain[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        await Promise.all(validations.map((validation) => validation.run(req)));

        validate(req, res, next);
    };
}

// A middleware that checks for any validation errors so far and sends them back to the frontend
export function validate(req: Request, res: Response, next: NextFunction) {
    const result = validationResult(req);

    if (result.isEmpty()) {
        return next();
    }

    // We return an array of the error messages only
    const errors = result.formatWith(error => error.msg as string).array();
    res.statusMessage = "Validation error";
    res.status(500).send({ errors });
}
