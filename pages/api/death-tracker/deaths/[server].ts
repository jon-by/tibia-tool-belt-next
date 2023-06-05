import type { NextApiRequest, NextApiResponse } from "next";
import db, { Death } from "./_db";

type ResponseData = {
  deaths?: Death[];
  error?: string;
  totalResults?:number
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {  
  const server = req?.query?.server;
  const limit = Number(req?.query?.limit)
  const skip = Number(req?.query?.skip)
  const isString = typeof server === "string";
  if (server && isString) {
    try {
      const {deaths, totalResults} = await db.getDeathsByServer({server, limit, skip});
      res.status(200).json({ deaths, totalResults });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.status(404).json({ error: `Server is required and must be a single string eg: server="Antica"` });
  }
}
