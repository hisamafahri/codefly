import mongoose from "mongoose";

export const connectDb = async () =>
    mongoose.connect(process.env.MONGO_URI as string, {
        // @ts-ignore
        useUnifiedTopology: true,
        useNewUrlParser: true,
        authSource: process.env.MONGO_AUTH_SOURCE as string,
        user: process.env.MONGO_USER as string,
        pass: process.env.MONGO_PASSWORD as string,
    });
