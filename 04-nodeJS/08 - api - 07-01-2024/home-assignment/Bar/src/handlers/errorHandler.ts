<<<<<<< HEAD
import { Request, Response, NextFunction } from 'express';

export function globalErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof Error) {
        res.statusMessage = error.message;
        return res.status(500).send({ error: error.message });
    }

    res.status(500).send({ error });
}
=======
import { Request, Response, NextFunction } from 'express';

export function globalErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof Error) {
        res.statusMessage = error.message;
        return res.status(500).send({ error: error.message });
    }

    res.status(500).send({ error });
}
>>>>>>> 1911ed530d7039e6af8385c02f520e68a6349185
