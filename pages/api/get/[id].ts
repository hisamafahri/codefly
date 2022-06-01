import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "../../../models/models";
import { connectDb } from "../../../utils/connectDb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { id } = req.query;
    if (req.method === "GET") {
        // TODO: Add rate limiter
        try {
            //     const { description, fileName, language, value } = req.body;
            await connectDb();
            const result = await Entry.findById(
                new mongoose.Types.ObjectId(id.toString())
            );
            if (result == null || result == undefined) {
                console.error({
                    status: "FAILED",
                    data: "ENTRY_NOT_FOUND",
                });
                res.status(404).json({
                    status: "FAILED",
                    data: "ENTRY_NOT_FOUND",
                });
            } else {
                res.status(200).json({ status: "OK", data: result });
            }
        } catch (err: any) {
            console.error({ err });
            res.status(500).json({ status: "FAILED", data: err.message });
        }
    } else {
        res.status(404).json({ status: "FAILED", data: "UNKNOWN_METHOD" });
    }
}
