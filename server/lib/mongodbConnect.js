import mongoose from "mongoose";

export const mongoDBConnection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        if(conn){
            console.log(`MongoDB Connected Sucessfully`)
        }
    } catch (error) {
        console.log(`MongoDb Connection Failed due to ${error}`)
    }
}