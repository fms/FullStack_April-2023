import { NextFunction, Request, Response } from "express";
import { Player, PlayerModel } from "../model/player";
import { Person } from "../model/person";
import { matchedData } from "express-validator";

export async function getPlayers(req: Request, res: Response, next: NextFunction) {
    const players = (await PlayerModel.find()).map((player) => player.toObject());
    res.send({ players });
}

export async function addPlayer(req: Request, res: Response, next: NextFunction) {
    const { person, jerseyNumber, height, position }: Player = req.body;
    const newPlayer = new PlayerModel({person, jerseyNumber, height, position});
    await newPlayer.save();
    next();
}

export async function updatePlayer(req: Request, res: Response, next: NextFunction) {
    const { person } = req.body;
    const player = await getPlayerByPerson(person);
    
    let changed = false;

    const payload = matchedData(req);
    if ('jerseyNumber' in payload) {
        player.jerseyNumber = payload.jerseyNumber;
        changed = true;
    }

    if ('height' in payload) {
        player.height = payload.height;
        changed = true;
    }

    if ('position' in payload) {
        player.position = payload.position;
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

async function getPlayerByPerson(personParam: Person) {
    if (personParam) {
        const player = await PlayerModel.findOne({person: { firstName: personParam.firstName, lastName: personParam.lastName, age: personParam.age}});
        if (player) {
            return player;
        }
    }

    throw new Error("Can't find a player by that name");
}