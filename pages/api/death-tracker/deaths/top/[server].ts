import type { NextApiRequest, NextApiResponse } from "next";
import _db from "../_db";

type ResponseData = {
  topDeaths?: {};
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const server = req?.query?.server;
  const isString = typeof server === "string";
  if (server && isString) {
    try {
      const topDeaths = await _db.getTopDeaths(server);
      res.status(200).json({ topDeaths });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(404).json({ error: `Server is required and must be a single string eg: server="Antica"` });
  }
}
