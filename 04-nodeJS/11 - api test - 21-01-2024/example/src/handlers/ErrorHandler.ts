import { Request, Response, NextFunction } from 'express';

export function globalErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    if (error instanceof Error) {
        res.statusMessage = error.message;
        return res.status(500).send({ error: error.message });
    }

    res.status(500).send({ error });
}
