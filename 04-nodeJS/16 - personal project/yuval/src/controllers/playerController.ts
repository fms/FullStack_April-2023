import { NextFunction, Request, Response } from "express";
import { Player, PlayerModel } from "../model/player";
import { matchedData } from "express-validator";

export async function getPlayers(req: Request, res: Response, next: NextFunction) {
    const players = (await PlayerModel.find()).map((player) => player.toObject());
    res.send({ players });
}

export async function addPlayer(req: Request, res: Response, next: NextFunction) {
    const { name, age, jerseyNumber, height, position }: Player = req.body;
    if(await PlayerModel.findOne({ name: name })) {
        throw new Error("Player already added");
    }
    const player = new PlayerModel({ name, age, jerseyNumber, height, position });
    await player.save();
    next();
}

export async function updatePlayerProperty(req: Request, res: Response, next: NextFunction, propertyName: string) {
    const data = matchedData(req) as { name: string; [key: string]: any };
    console.log("Received data:", data);
    const { name } = data;
    let changed = false;
    const player = await getPlayerByName(name)
    if(player) {
        if((propertyName === 'jerseyNumber' || propertyName === 'position') && player[propertyName] !== data[propertyName]) {
            const update = { [propertyName]: data[propertyName] };
            await PlayerModel.findOneAndUpdate({ name: player.name }, update);
            changed = true;
        }
    }
    if (!changed) {
        throw new Error("Nothing to update!");
    }
    next();
}

export async function updateJerseyNumber(req: Request, res: Response, next: NextFunction) {
    await updatePlayerProperty(req, res, next, 'jerseyNumber');
}

export async function updatePosition(req: Request, res: Response, next: NextFunction) {
    await updatePlayerProperty(req, res, next, 'position');
}

export async function deletePlayer(req: Request, res: Response, next: NextFunction) {
    const { name } = req.body;
    const player = await getPlayerByName(name);
    await player.deleteOne();
    next();
}

async function getPlayerByName(name: string) {
    if (name) {
        const player = await PlayerModel.findOne({ name });
        if (player) {
            return player as unknown as Player;
        }
    }
    throw new Error("Can't find a player with this name");
}

// import { Person, PersonModel } from "../model/person";

// export async function addPerson(req: Request, res: Response, next: NextFunction) {
//     const { firstName, lastName, age }: Person = req.body;
//     const newPerson = new PersonModel({firstName, lastName, age});
//     await newPerson.save();
//     next();
// }

// export async function getPerson(req: Request, res: Response, next: NextFunction) {
//     const newPerson = (await PersonModel.findOne().sort({ _id: -1 }));
//     res.send({ newPerson });
// }