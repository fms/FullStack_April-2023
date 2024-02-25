import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

export interface I_UserDocument extends mongoose.Document {
    name: string;
    password: string;
}

const UserSchema: mongoose.Schema<I_UserDocument> = new mongoose.Schema({
    name: { type: String, unique: true },
    password: { type: String },
});




const saltRounds = 8

UserSchema.pre('save', async function (this: I_UserDocument, next) {
    const user = this;
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

const UserModel = mongoose.model<I_UserDocument>('User', UserSchema);
export default UserModel;