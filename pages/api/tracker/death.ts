// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";

import db from "./_firebase";
import { death, onlinePlayerType } from "./@types/_tracker-type";

import { getWorldByName, getOnlinePlayersByWorld } from "./_tibiaData";

type Data = {
  onlinePlayers: onlinePlayerType[] ;
};




async function getDeaths(res: NextApiResponse<Data>) {
  const onlinePlayers: onlinePlayerType[] = await getOnlinePlayersByWorld("Kalibra") ;  
  
  res.status(200).json({onlinePlayers});
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getDeaths(res);
}
