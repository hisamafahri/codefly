import mongoose, { model, models } from "mongoose";
const { Schema } = mongoose;

const entrySchema = new Schema({
    description: String,
    data: [
        {
            fileName: {
                type: String,
                required: true,
            },
            language: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        },
    ],
    date: { type: Date, default: Date.now },
});

export const Entry = models.Entry || model("Entry", entrySchema);
