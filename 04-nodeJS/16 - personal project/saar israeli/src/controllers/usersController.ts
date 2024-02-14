import { NextFunction, Request, Response } from "express";
import {  User, UserModel } from "../model/users";
import { matchedData } from "express-validator";
import {  isValidObjectId } from 'mongoose';
import { NotesModel } from "../model/notes";


export async function getUsers(req: Request, res: Response, next: NextFunction) {
    const users = (await UserModel.find()).map(user => user.toObject());
    res.send({ users });
    next();
}

export async function registerUser(req: Request, res: Response, next: NextFunction) {
    const { email, password, fullName }: User = req.body;
    const newUser = new UserModel({ email, password, fullName });
    await newUser.save();
    next();
}

export async function updateUser(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.body;
    const user = await getUserById(userId);
    if (user) {
        const payload = matchedData(req);
        if ((user.email === payload.email) && (user.password === payload.password) && (user.fullName === payload.fullName)) {
            return res.status(400).json({ error: 'Nothing to update' });
        }
        if ("email" in payload) {
            user.email = payload.email;
        }
        if ("password" in payload) {
            user.password = payload.password;
        }
        if ("fullName" in payload) {
            user.fullName = payload.fullName;
        }

        await user.save();
    }
    else {
        console.log('Id not found')
    }
    next();
}



export async function deleteUser(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.body;

    const user = await getUserById(userId);

    if (user) {
        await NotesModel.deleteMany({ noteOwner:  userId  });

        await user.deleteOne();

        next();
    }
}


export async function loginUser(req: Request, res: Response, next: NextFunction) {
        const { email , password} = req.body;
    const userId =  await validPasswordAndEmail(password,email);
    if(userId) {
        res.cookie('userId', userId , {maxAge: 1000 * 60 * 60});
        res.send({"Login successful, logedInUser": userId.toString() });
        next();
    }
    else {
        return res.status(400).json({error: "invalid email or password"})
    }
}

export async function getNotes(req: Request, res: Response, next: NextFunction) {
    const userId = req.cookies.userId;
    if(userId) {
        const notes = (await NotesModel.find({noteOwner: userId})).map(note => note.toObject());
        res.send({notes});
        next();
    }
    else {
        return res.status(400).json({error: "none"})
    }
}


async function validPasswordAndEmail(password: string, email: string) {
    const user = await UserModel.findOne({ "email": email });

    if (user && user.password === password) {
        return user._id;
    } else {
        return null;
    }
}

async function getUserById(id: string) {
    try {
        if (isValidObjectId(id)) {
            const user = await UserModel.findById(id);

            if (user) {
                return user;
            } else {
                console.log('User not found');
            }
        } else {
            console.log('Invalid id');
        }
    } catch (error) {
        console.error('Error retrieving user by id:', error);
    }

    return null;
}