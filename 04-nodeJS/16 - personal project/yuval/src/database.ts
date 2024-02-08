import mongoose from "mongoose";
import { Player, PlayerModel } from "./model/player";
import { Person } from "./model/person";

export async function connectToDatabase() {
    await mongoose.connect('mongodb://localhost/MyTeam');
}


export function setDatabaseDefaults() {
    mongoose.set({
        toObject: {
            versionKey: false,
            transform: async (doc, ret) => {
                delete ret._id;
        
                if (ret.personId) {
                    const playerWithPerson = await PlayerModel.findById(ret.personId).populate({
                        path: 'person',
                        select: 'firstName lastName age -_id'
                    });
                    // If person is populated, include its details in the output
                    if (playerWithPerson && playerWithPerson.person) {
                        ret.person = `${((playerWithPerson.person) as unknown as Person).firstName} 
                        ${((playerWithPerson.person) as unknown as Person).lastName}, 
                        ${((playerWithPerson.person) as unknown as Person).age}`;
                    }
                }
            }
        }
    });
}