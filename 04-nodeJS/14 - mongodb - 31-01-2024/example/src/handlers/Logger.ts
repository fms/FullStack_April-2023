import { Request, Response, NextFunction } from "express";

export function logRequest(req: Request, res: Response, next: NextFunction) {
    if ('body' in req && Object.keys(req.body).length !== 0) {
        console.log(`method: ${req.method} body: `, req.body);
    }
    else {
        console.log(`method: ${req.method} query: `, req.query);
    }

    next();
}