import express from 'express';
import UserModel from '../model/userModel';
import { UserStatus } from '../model/userStatus';


const users = new Array<UserModel>();


export function addNewUser(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        if (!('email' in req.body)) {
            throw new Error('Missing email');
        }

        const { email, tasks }: UserModel = req.body;
        const newUser = new UserModel(email, UserStatus.logedOut, tasks || []);

        const index = users.findIndex(user => user.email === newUser.email);
        if (index !== -1) {
            return res.status(400).json({ error: 'User already exists' });
        }

        users.push(newUser);
        next();
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export function getUsers(req: express.Request, res: express.Response, next: express.NextFunction) {
    res.send({ users });
    next();
}

export function updateUserStatus(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { email} = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        const userIndex = getUserByEmail(email);

        if(!users[userIndex].logedIn) {
            users[userIndex].logedIn = 1;
            next();
        }
        else {
            users[userIndex].logedIn = 0;
            next();
        }


    } catch (error) {
        res.status(500).json({ error: 'Worng email' });
    }
}

function getUserByEmail(email: string | null | undefined) {
    if (email) {
        const index = users.findIndex(user => user.email === email);
        if (index == -1) {
            throw new Error("Can't find a task for the specified ID");
        }
        return index;
    }
    throw new Error("Need to specify the task ID");
}
