import {Request, Response, NextFunction} from 'express';

export function globalHandleErrors(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof Error) {
        res.statusMessage = error.message;
        res.status(500).send({ error: error.message })
    } else {
        res.status(500).send({ error });
    }
    next();
}