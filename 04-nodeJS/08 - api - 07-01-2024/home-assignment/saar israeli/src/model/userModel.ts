import { UserStatus } from "./userStatus";
import Task from "./taskModel";

export default class UserModel {
    constructor(
        public email:string,
        public logedIn:UserStatus,
        public tasks:Task[],
    ){}
}