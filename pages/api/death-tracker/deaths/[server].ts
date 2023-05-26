import type { NextApiRequest, NextApiResponse } from "next";
import db, { Death } from "./_db";

type ResponseData = {
  deaths?: Death[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  console.log(req.query)
  const server = req?.query?.server;
  const limit = Number(req?.query?.limit)
  const isString = typeof server === "string";

  if (server && isString) {
    try {
      const deaths = await db.getDeathsByServer(server, limit);
      res.status(200).json({ deaths });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(404).json({ error: "Server is required" });
  }
}
