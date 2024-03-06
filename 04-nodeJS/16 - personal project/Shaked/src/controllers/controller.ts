// userManager.ts

import { Queue, QueueModel } from '../models/class';
import { Request, Response, NextFunction } from 'express';


export async function createQueue(req: Request, res: Response, next: NextFunction) {
    try {
        const { name, phonenumber, date, city, time }: Queue = req.body;
        const currentUser = req.cookies.username;
        const newQueue = new QueueModel({ name, phonenumber, date, city, time, user: currentUser });
        await newQueue.save();

        const createdQueue = await QueueModel.findById(newQueue._id);
        res.status(201).json({ message: 'Queue created successfully', newQueue: createdQueue });

    } catch (error: any) {
        res.status(500).json({ message: 'Failed to create queue', error: error.message });
    }
}
export async function getAllQueues(req: Request, res: Response, next: NextFunction) {
    const username = req.cookies.username;
    if (username) {
        try {
            const userQueues = await QueueModel.find({ user: username }).lean();
            console.log("User:", username);
            console.log("Queues:", userQueues);
            res.status(200).json({ userQueues: userQueues });
        } catch (error) {
            console.error("Error fetching user queues:", error);
            res.status(500).json({ error: "An unexpected error occurred while fetching user queues." });
        }
    } else {
        console.error("No username provided in the request cookies.");
        res.status(400).json({ error: "No username provided in the request cookies." });
    }
    return next();
}

export async function updateQueueName(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params;
    const { name: newName } = req.body;

    try {
        const nameToUpdate = await QueueModel.findOneAndUpdate(
            { name: name },
            { name: newName },
            { new: true }
        );

        if (!nameToUpdate) {
            throw new Error('Name not found');
        }

        console.log(`Updating (Patch) Name "${name}" to "${newName}":`);
        res.status(200).json({ message: `Successfully changed from "${name}" to "${newName}"` });
        next();
    } catch (error) {
        next(error);
    }
}

export async function deleteByName(req: Request, res: Response, next: NextFunction) {
    const customerName = req.params.name;
    const customerToDelete = await QueueModel.findOne({ name: customerName });

    if (!customerToDelete) {
        return res.status(404).json({ error: 'Customer not found' });
    }

    await customerToDelete.deleteOne();
    console.log(`Deleted Customer: "${customerName}"`);

    res.status(200).json({ message: `Deleted Customer: "${customerName}"` });
    next();
}

export async function deleteAll(req: Request, res: Response, next: NextFunction) {
    await QueueModel.deleteMany({});
    console.log('Deleted all queues');

    res.status(200).json({ message: 'Deleted all queues' });
}

export async function replaceQueueByName(req: Request, res: Response, next: NextFunction) {
    const name = req.params.name;
    const { name: newName, phonenumber, date, city, time }: Queue = req.body;

    try {
        const replacedQueue = await QueueModel.findOneAndUpdate(
            { name: name },
            { name: newName, phonenumber, date, city, time },
            { new: true, omitUndefined: true }
        );

        if (!replacedQueue) {
            console.log('Cannot find queue to replace');
            res.status(404).json({ error: 'Cannot find queue to replace' });
            return;
        }

        res.status(200).json({ message: `Replaced customer: "${name}" with "${replacedQueue.name}"`, queue: replacedQueue });
    } catch (error: any) {
        console.error('Error replacing queue:', error.message);
        res.status(500).json({ error: 'Error replacing queue' });
    }
}
