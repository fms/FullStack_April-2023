import { UserModel } from '../models/userModel';
import { User } from '../models/userModel';
import express from 'express';

export async function register(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        
        const { username, password }: User = req.body;
        
        const newUser = new UserModel({ username, password });
        await newUser.save();

        const createdUser = await UserModel.findById(newUser._id);
        res.status(201).json({ message: 'User created successfully', newUser: createdUser });

    } catch (error: any) {
        res.status(500).json({ message: 'Failed to register', error: error.message });
    }
}

export async function login(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { username, password }: User = req.body;
        const user = await UserModel.findOne({ username, password });

        if (!user) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }
        res.cookie("username", user, { maxAge: 1000 * 60 * 60 });
        res.status(200).send({ "Login successful ": user.toString() });

    } catch (error: any) {
        res.status(500).json({ message: 'Failed to login', error: error.message });
    }
}

export async function logout(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        res.clearCookie('username');
        res.status(200).send({ message : "Logged out successfully"});
    } catch (error: any) {
        res.status(500).json({ message: 'Failed to logout', error: error.message });
    }
}

