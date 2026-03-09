import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGO_URI as string;

        if (!mongoUri) {
            throw new Error("MONGO_URI is not defines in environment variables")
        }

        await mongoose.connect(mongoUri)

        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDb connection failed: ", error)
        process.exit(1);
    }
}