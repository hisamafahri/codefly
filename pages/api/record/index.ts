import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const handle = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed!" });
  }

  const recordData = JSON.parse(req.body);
  const savedRecord = await prisma.record.create({
    data: recordData,
  });

  return res
    .status(201)
    .json({ success: true, message: "Record created!", data: savedRecord });
};

export default handle;
