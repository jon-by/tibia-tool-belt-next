import type { NextApiRequest, NextApiResponse } from "next";

import db from "../_firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  getAllAworlds,
  getPlayersToCheckIfDied,
  getRegisteredDeaths,
  saveDeath,
  saveRegisteredDeaths,
} from "../_db";
import { deathType, onlinePlayerType } from "../@types/_tracker-type";

import { getOnlinePlayersByWorld, getPlayerDeaths } from "../_tibiaData";
import { getUCTDate, isAuthorized } from "../_helpers";

export async function handleTrackRoutine(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let seconds = 0;
  const interval = setInterval(() => {
    seconds += 1;
  }, 1000);
  try {
    const allWorlds = await getAllAworlds();
    //await getAndSaveDeaths();

    console.log("rodou tudo");
    res.status(200).json({ error: false, message: `in ${seconds} seconds` });
  } catch (error) {
    res.status(500).json({ error: true, message: `in ${seconds} seconds` });
  }
  clearInterval(interval);
}

export async function getAndSaveDeaths() {
  return new Promise(async (resolve, reject) => {
    try {
      const playersToCheckDeath = await getPlayersToCheckIfDied();

      const deaths = await getDeaths(playersToCheckDeath);

      console.log({ deaths });

      const saved = await saveDeaths(deaths);

      resolve({ error: "hue" });
    } catch (error) {
      console.log(error);
      reject({ error: true });
    }
  });
}

async function saveDeaths(deaths: deathType[]) {
  console.log(deaths[0]);
  let alreadySaved: string[] = await getRegisteredDeaths();

  deaths.forEach(async (death) => {
    if (!alreadySaved.includes(death.documentId!)) {
      alreadySaved.push(death.documentId!);
      await saveDeath({ id: death.documentId!, death });
    }
  });

  const saved = await saveRegisteredDeaths(alreadySaved);

  return saved;
}

async function getDeaths(playersToCheckDeath: string[]) {
  const deathsToSave: deathType[] = [];

  if (playersToCheckDeath.length > 0) {
    const deaths = await getPlayerDeaths(playersToCheckDeath);

    deaths.forEach(async (death) => {
      const nowUTC = getUCTDate();
      const deathTimeUTC = new Date(death.time);
      const timeStamp = Math.floor(deathTimeUTC.getTime() / 1000);
      const documentId = `${death.name.replaceAll(" ", "-")}-${timeStamp}`;
      if (nowUTC.getDate() === deathTimeUTC.getDate()) {
        deathsToSave.push({ ...death, documentId });
      }
    });
  } else {
    console.log("No such document!");
  }

  return deathsToSave;
}

export async function getAndSaveOnlinePlayers(req: NextApiRequest, res: NextApiResponse) {

  try {
    const authorized = await isAuthorized(req.body.password)
    if (!authorized) {
      res.status(401).json({ error: true, errorMessage: "Authentication" });
    }

    const allWorlds = await getAllAworlds();
    let onlineList: { name: string, server: string }[] = [];

    for (let i = 0; i < allWorlds.length; i++) {
      const world = allWorlds[i];
      const onlinePlayers: onlinePlayerType[] = await getOnlinePlayersByWorld(
        world
      );
      onlineList = onlineList.concat(
        onlinePlayers.map((player) => {
          return { name: player.name, server: world }
        })
      );
    }
    const onlineRef = doc(db, "online-now", "online");

    await setDoc(onlineRef, { players: onlineList });

    res.status(200).json({ onlinePlayers: onlineList, error: false });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: false, errorMessage: JSON.stringify(error) });
  }

}

//   export async function deleteAllDocuments(res: NextApiResponse<Data>) {
//     const querySnapshot = await getDocs(collection(db, "all-deaths"));

//     querySnapshot.forEach(async (snap) => {
//       const cityRef = doc(db, "all-deaths", snap.id);
//       await updateDoc(cityRef, {
//         death: deleteField(),
//       });
//       await deleteDoc(cityRef);
//     });
//   }
