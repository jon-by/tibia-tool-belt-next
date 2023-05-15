import type { NextApiRequest, NextApiResponse } from "next";

import db from "../_firebase";
import { doc, setDoc } from "firebase/firestore";
import {
  getAllAworlds,
  getAllOnlinePlayers,
  getPlayersToCheckIfDied,
  getRegisteredDeaths,
  getWorldsToSearchOnlinePlayers,
  saveDeath,
  saveRegisteredDeaths,
  saveWorldsToCheckDeaths,
  saveWorldsToSearchOnlinePlayers,
} from "../_db";
import { deathType, onlinePlayerType } from "../@types/_tracker-type";

import { getOnlinePlayersByWorld, getPlayerDeaths } from "../_tibiaData";
import { getUCTDate, isAuthorized } from "../_helpers";

export async function handleTrackRoutine(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const deaths = await getAndSaveDeaths();

    res.status(200).json({ error: false, deaths });

  } catch (error) {
    res.status(500).json({ error: true, });
  }
}

export async function getAndSaveDeaths() {

  try {
    const playersToCheckDeath = await getPlayersToCheckIfDied();
    const deaths = await getDeaths(playersToCheckDeath.map(player => player.name));
    await saveDeaths(deaths)
    return deaths
  } catch (error) {
    console.log(error);
    return []
  }

}

async function saveDeaths(deaths: deathType[]) {  
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

    let allWorlds = await getWorldsToSearchOnlinePlayers();

    if (allWorlds.length < 1) {
      allWorlds = await getAllAworlds()
    }

    const worldsToCheck = allWorlds.splice(0, 5)

    let onlineList: { name: string, server: string }[] = [];

    for (let i = 0; i < worldsToCheck.length; i++) {
      const world = worldsToCheck[i];
      const onlinePlayers: onlinePlayerType[] = await getOnlinePlayersByWorld(
        world
      );
      onlineList = onlineList.concat(
        onlinePlayers.map((player) => {
          return { name: player.name, server: world }
        })
      );
    }

    const currentPlayers = await getAllOnlinePlayers()
    const merged = currentPlayers.concat(onlineList)

    const newPlayers = merged.reduce<{ name: string, server: string }[]>((acc, cur) => {
      const isInArray = acc.find(player => player.name === cur.name)
      if (!isInArray) acc.push(cur)

      return acc
    }, [])

    const onlineRef = doc(db, "online-now", "online");
    await setDoc(onlineRef, { players: newPlayers });
    await saveWorldsToSearchOnlinePlayers(allWorlds)

    res.status(200).json({ onlinePlayers: newPlayers, error: false });
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
