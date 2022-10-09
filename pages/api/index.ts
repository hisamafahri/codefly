import type { NextApiRequest, NextApiResponse } from "next";

const handle = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default handle;
