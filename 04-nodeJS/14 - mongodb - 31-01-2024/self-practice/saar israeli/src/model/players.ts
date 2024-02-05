import { Schema , model} from "mongoose";

export interface Player {
    nickName:string,
    level:number,
    classs:string,
    alive:boolean
}

const player = new Schema ({
    nickName :{
        type :String,
        required :true,
    },
    level :{
        type :Number,
        require :true,
        max: 100
    },
    classs :{
        type: String,
        require: true,
        enum: ["warrior","rogue"
            ,"hunter","mage",
            "beginner"],
    },
    alive :{
        type :Boolean,
        require :true,
    }
});

export const PlayerModel = model("players",player);