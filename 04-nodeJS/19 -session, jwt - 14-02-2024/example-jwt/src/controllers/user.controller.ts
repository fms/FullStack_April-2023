import { Request, Response } from 'express';
import { getErrorMessage } from '../utils/errors.util';
import * as userServices from '../services/user.service';
import { CustomRequest } from '../middleware/auth';

export async function login (req: Request, res: Response) {
    try {
        const foundUser = await userServices.login(req.body);
        //console.log('found user', foundUser.token);
        res.status(200).send(foundUser);
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};


export async function register (req: Request, res: Response) {
    try {
        await userServices.register(req.body);
        res.status(200).send('Inserted successfully');
    } catch (error) {
        return res.status(500).send(getErrorMessage(error));
    }
};