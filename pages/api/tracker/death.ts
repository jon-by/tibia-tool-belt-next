// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { collection, getDocs } from "firebase/firestore";

import db from "./_db";
import { death } from "./@types/_tracker-type";

type Data = {
  name: string;
};

async function getDeaths(res: NextApiResponse<Data>) {
  const querySnapshot = await getDocs(collection(db, "kalibra"));
  querySnapshot.forEach((doc) => {

    const deathData = doc.data() as death
    
    res.status(200).json({ ...deathData});
  });
}




export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  getDeaths(res);
}
