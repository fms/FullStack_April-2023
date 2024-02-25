import { NextFunction, Request, Response } from "express";
import { User, userModel } from "../model/userModel";

export async function getUsers(req: Request, res: Response, next: NextFunction) {
  const users = (await userModel.find()).map((user) => user.toObject());

  res.send({ users });
}

export async function registerUser(req: Request, res: Response, next: NextFunction) {
  const { username, password }: User = req.body;
  const user = new userModel({ username, password, animals: [] });

  await user.save();

  res.send({ message: `${username} registered successfully` });

  next();
}

export async function loginUser(req: Request, res: Response, next: NextFunction) {
  const { username, password } = req.body;

  const userId = await validUserDetails(username, password);
  console.log(userId);

  if (userId) {
    res.cookie("userId", userId, { maxAge: 1000 * 60 * 60 });
    res.send({ "Login successful, loggedInUser": userId.toString() });
    next();
  } else {
    return res.status(400).json({ error: "invalid username or password" });
  }
}

export async function logoutUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.clearCookie("userId");
    res.send({ message: "Logout successful" });
  } catch (error) {
    console.error("Error occurred during logout:", error);
    res.status(500).json({ error: "Internal server error" });
  }
  next();
}

async function validUserDetails(username: string, password: string) {
  const user = await userModel.findOne({ username: username });

  if (user && user.password === password) {
    return user._id;
  } else {
    return null;
  }
}
