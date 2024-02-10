import mongoose, { Schema, model } from "mongoose";

mongoose.connect('mongodb://localhost/test');

interface Address {
    street: string,
    house: number,
    city: string
}

interface Person {
    name: string,
    address: Address
}

const PersonSchema = new Schema({
    name: String,
    address: { type: Schema.Types.ObjectId, ref: 'address' },
    hobbies: [String ]
});

const AddressSchema = new Schema({
    street: String,
    house: Number,
    city: String
});

const PersonModel = model('person', PersonSchema);
const AddressModel = model('address', AddressSchema);
run();

async function run() {
    const newAddress = new AddressModel({ street: "5th Avenue", house: 10, city: "NY" });
    let result: any = await newAddress.save();
    console.log(result);

    const newPerson = new PersonModel({ name: "Shmuel", address: result._id, hobbies: ['reading', 'hiking'] });
    // const newPerson = new PersonModel({ name: "Shmuel", address: { street: "Here", house: 1, city: "there" } });
    result = await newPerson.save();
    console.log(result);

    const options = {
        versionKey: false, transform: (doc: mongoose.Document, ret: Record<string, any>) => {
            delete ret._id;
        }
    };
    const query = await PersonModel.findById(result._id);
    console.log("object only:" + query);
    console.log(query!.toObject({
        versionKey: false, transform: (doc, ret) => {
            delete ret._id;
        }
    }));

    const populated = await PersonModel.findById(result._id).populate('address');
    console.log("populated:" + populated);
    console.log(populated!.toObject(options));

    const withHobbies = await PersonModel.where('hobbies').exists(true);
    console.log("\nWith Hobbies:");
    console.log(withHobbies);
}

