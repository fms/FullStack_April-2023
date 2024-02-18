import mongoose from 'mongoose';

export async function connectToMongo() {
    await mongoose.connect('mongodb://127.0.0.1/TaskManager')
    .then(()=>{
        console.log('Database connection successful');
    })
    .catch((error) =>{
        console.error('Database connection feild', error);
    }); 
    
}

export default connectToMongo;