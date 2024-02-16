import { Queue, QueueModel } from '../models/class';

import express from 'express';
const queues: Queue[] = [];

export async function createQueue(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { name, phonenumber, date, city, time }: Queue = req.body;
        const newQueue = new QueueModel({ name, phonenumber, date, city, time });
        await newQueue.save();
        
        const createdQueue = await QueueModel.findById(newQueue._id);
        res.status(201).json({ message: 'Queue created successfully', newQueue: createdQueue });

    } catch (error:any) {
        res.status(500).json({ message: 'Failed to create queue', error: error.message });
    }
}


export async function getAllQueues(req: express.Request, res: express.Response, next: express.NextFunction) {
    const queues = await QueueModel.find();
    res.send({ queues });
    return next();
}

export async function updateQueueName(req: express.Request, res: express.Response, next: express.NextFunction) {
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

export async function deleteByName(req: express.Request, res: express.Response, next: express.NextFunction) {
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

export async function deleteAll(req: express.Request, res: express.Response, next: express.NextFunction) {
    await QueueModel.deleteMany({});
    console.log('Deleted all queues');

    res.status(200).json({ message: 'Deleted all queues' });
}

export async function replaceQueueByName(req: express.Request, res: express.Response, next: express.NextFunction) {
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
