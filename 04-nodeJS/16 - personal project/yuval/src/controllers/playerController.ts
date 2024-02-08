import { NextFunction, Request, Response } from "express";
import { Player, PlayerModel } from "../model/player";
import { Person, PersonModel } from "../model/person";
import { matchedData } from "express-validator";

export async function addPerson(req: Request, res: Response, next: NextFunction) {
    const { firstName, lastName, age }: Person = req.body;
    const newPerson = new PersonModel({firstName, lastName, age});
    await newPerson.save();
    next();
}

export async function getPerson(req: Request, res: Response, next: NextFunction) {
    const newPerson = (await PersonModel.findOne().sort({ _id: -1 }));
    res.send({ newPerson });
}

export async function getPlayers(req: Request, res: Response, next: NextFunction) {
    const players = (await PlayerModel.find()).map((player) => player.toObject());
    res.send({ players });
}

export async function addPlayer(req: Request, res: Response, next: NextFunction) {
    const { personId, jerseyNumber, height, position }: Player = req.body;
    const player = new PlayerModel({ personId, jerseyNumber, height, position });
    await player.save();
    next();
}

export async function updatePlayer(req: Request, res: Response, next: NextFunction) {
    const { person } = req.body;
    const player = await getPlayerByPerson(person);
    
    let changed = false;

    const payload = matchedData(req);
    if ('jerseyNumber' in payload) {
        await PlayerModel.findOneAndUpdate({personId: player.personId}, {jerseyNumber: payload.jerseyNumber});
        changed = true;
    }

    if ('height' in payload) {
        await PlayerModel.findOneAndUpdate({personId: player.personId}, {height: payload.height});
        changed = true;
    }

    if ('position' in payload) {
        await PlayerModel.findOneAndUpdate({personId: player.personId}, {position: payload.position});
        changed = true;
    }

    if (!changed) {
        throw new Error("Noting to update!");
    }

    player.save();
    next();
}

export async function deletePlayer(req: Request, res: Response, next: NextFunction) {
    const { person } = req.body;
    const player = await getPlayerByPerson(person);
    await player.deleteOne();
    next();
}

async function getPlayerByPerson(personId: string) {
    if (personId) {
        const player = await PlayerModel.findOne({ personId }).populate('person');
        if (player) {
            return player as unknown as Player;
        }
    }

    throw new Error("Can't find a player associated with that person");
}

