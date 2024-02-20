import { NextFunction, Request, Response } from "express";
import { matchedData } from "express-validator";
import { PlayerModel ,Player} from "../model/players";

// Read
export async function getPlayers(req: Request, res: Response, next: NextFunction) {
    const players = await PlayerModel.find();
    res.send({ players });
    next();
}

// Create
export async function addPlayer(req: Request, res: Response, next: NextFunction) {
    const { nickName,level,classs}: Player = req.body;
    const newPlayer = new PlayerModel({nickName,level,classs});
    await newPlayer.save();
    next();
}

// Update
export async function updatePlayer(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const player = await getPlayerById(id);
    let changed = false;                                            // Did we update any property?

    // matchedData() returns an object with validated fields only. This is useful for the oneOf()
    // we use for validating this request as it will omit invalid fields preset in req.body.
    //
    // Example request with valid ID and status, while title is invalid (less than 5 characters):
    // PATCH body: { id: '1705314447645-7649275319907576', title: '1235', status: '0' }
    //
    // Would have:
    // req.body: { id: '1705314447645-7649275319907576', title: '1235', status: '0' }
    // payload:  { status: '0', id: '1705314447645-7649275319907576' }
    const payload = matchedData(req);
    if ('nickName' in payload) {
        player.nickName = payload.nickName;
        changed = true;
    }

    if ('level' in payload) {
        player.level = payload.level;
        changed = true;
    }

    if ('classs' in payload) {
        player.classs = payload.classs;
        changed = true;
    }


    if (!changed) {
        throw new Error("Noting to update!");
    }

    next();
}

// Delete
export async function deletePlayer(req: Request, res: Response, next: NextFunction) {
    const { id } = req.body;
    const result = await PlayerModel.findByIdAndDelete(id);
    if (result === null) {
        throw new Error("Can't find a task for the specified ID");
    }
    next()
}

async function getPlayerById(id: string) {
    const player = await PlayerModel.findById(id);
    if (!player) {
        throw new Error("Can't find a task for the specified ID");
    }

    return player;
}