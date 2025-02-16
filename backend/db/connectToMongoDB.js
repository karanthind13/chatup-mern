import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectToMongoDB =async()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to the db", error.message)
    }
}

export default connectToMongoDB;