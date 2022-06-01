import type { NextApiRequest, NextApiResponse } from "next";
import { Entry } from "../../models/models";
import { connectDb } from "../../utils/connectDb";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        // TODO: Add rate limiter
        try {
            const { description, fileName, language, value } = req.body;
            await connectDb();
            const entry = await Entry.create({
                description: description.toString(),
                data: [
                    {
                        fileName: fileName.toString(),
                        language: language.toString(),
                        value: value.toString(),
                    },
                ],
            });
            res.status(200).json({ status: "OK", data: entry });
        } catch (err: any) {
            console.error({ err });
            res.status(500).json({ status: "FAILED", data: err.message });
        }
    } else {
        res.status(404).json({ status: "FAILED", data: "UNKNOWN_METHOD" });
    }
}
