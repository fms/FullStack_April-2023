import express from 'express';
import { Toy } from '../model/toys';

const toys: Toy[] = [];
const print = console.log;

export function createToy(req: express.Request, res: express.Response) {
    try {
        const newToy: Toy = req.body;
        if (!newToy.name || !newToy.price) {
            throw new Error("Toy detailes are missing to create");
        }

        const index = toys.findIndex(toy => toy.name === newToy.name);
        if (index !== -1) {
            throw new Error("Toy is allready exits");
        }

        print("Added:", newToy);
        toys.push(newToy);
        res.send({ toys });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function getToy(req: express.Request, res: express.Response) {
    res.send({ toys });
}

export function updateToyPriceBody(req: express.Request, res: express.Response) {
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            throw new Error("Toy detail is missing to update");
        }
        const oldToy = toys.find(item => item.name === name);
        if (!oldToy) {
            throw new Error("Toy to update not found");
        }

        print(`Updating (Patch): "${oldToy.name}"`);
        print("Before:", oldToy);

        oldToy.price = price;
        print("After:", oldToy);
        res.send({ toys });


    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function overWriteToyQuery(req: express.Request, res: express.Response) {
    try {
        const { name } = req.params;
        const newToy: Toy = req.body;

        if (!name) {
            throw new Error("Missing old toy details to update");
        }

        if (!newToy.name || !newToy.price) {
            throw new Error("Missing new toy details to update");
        }

        const index = toys.findIndex(item => item.name === name);
        if (index === -1) {
            throw new Error("Item to replace not found");
        }

        if (name !== newToy.name) {
            const newIndex = toys.findIndex(item => item.name === newToy.name);
            if (newIndex !== -1) {
                throw "Replacement item allready exists";
            }
        }
        const oldToy = toys.splice(index, 1, newToy);

        print(`Updating (Put)"${newToy.name}"`);
        print(`Before:`, oldToy);
        print(`After:`, newToy);

        res.send({ toys });


    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ error: error.message });
        }
    }
}

export function deleteToy(req: express.Request, res: express.Response) {
    try {
        const { name } = req.body;
        if (!name) {
            throw new Error("Missing old toy to delete");
        }

        const index = toys.findIndex(item => item.name === name);
        if (index === -1) {
            throw new Error("Toy to delete not found");
        }

        const oldToy = toys.splice(index, 1);
        print("Deleted:", oldToy[0]);
        res.send({ toys });
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).send({ toys });
        }
    }
}