import { NextFunction, Request, Response } from "express";
import { Player, PlayerModel } from "../model/player";
// import { Person, PersonModel } from "../model/person";
import { matchedData } from "express-validator";

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

export async function updateJerseyNumber(req: Request, res: Response, next: NextFunction) {
    const data = matchedData(req);
        console.log("Received data:", data);

        const { name, jerseyNumber } = data;
    let changed = false;
    const player = await getPlayerByName(name)
    if(player) {
        await PlayerModel.findOneAndUpdate({ name: player.name }, { jerseyNumber: jerseyNumber });
        changed = true;
    }
    if (!changed) {
        throw new Error("Noting to update!");
    }

    player.save();
    next();
}

export async function updatePosition(req: Request, res: Response, next: NextFunction) {
    const data = matchedData(req);
        console.log("Received data:", data);

        const { name, position } = data;
    let changed = false;
    const player = await getPlayerByName(name)
    if(player) {
        await PlayerModel.findOneAndUpdate({ name: player.name }, { position: position });
        changed = true;
    }
    if (!changed) {
        throw new Error("Noting to update!");
    }

    player.save();
    next();
}

// export async function updatePlayer(req: Request, res: Response, next: NextFunction) {
    // const { name } = req.body;
    // const player = await getPlayerByName(name);
    
    // let changed = false;

    // const payload = matchedData(req);
    // if ('jerseyNumber' in payload) {
    //     await PlayerModel.findOneAndUpdate({name: player.name}, {jerseyNumber: payload.jerseyNumber});
    //     changed = true;
    // }

    // if ('position' in payload) {
    //     await PlayerModel.findOneAndUpdate({name: player.name}, {position: payload.position});
    //     changed = true;
    // }

    // if (!changed) {
    //     throw new Error("Noting to update!");
    // }

    // player.save();
    // next();
// }

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

