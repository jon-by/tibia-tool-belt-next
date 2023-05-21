import type { NextApiRequest, NextApiResponse } from 'next';
import fb_db from './_firebase';
import { getDoc, doc } from 'firebase/firestore'

type deathType = {
  "id": string,
  "reason": string;
  "name": string;
  "server": string;
  "time": number;
}

async function getDeaths(server: string) {

  const deathRef = doc(fb_db, `all-deaths`, "deaths");
  const docSnap = await getDoc(deathRef);
  const deaths: deathType[] = docSnap?.data()?.deaths;

  const filteredDeaths = deaths?.filter(death => death.server === server)

  return filteredDeaths.sort((a, b) => b.time - a.time) || [];

}

type ResponseData = {
  deaths: deathType[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>,
) {

  const server = req?.query?.server
  const isString = typeof server === "string"

  if (server && isString) {
    const queryDeaths = await getDeaths(server)

    res.status(200).json({ deaths: queryDeaths });

  } else {
    res.status(404);

  }


}