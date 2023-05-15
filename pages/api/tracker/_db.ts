import { deathType } from "./@types/_tracker-type";
import db from "./_firebase";
import { doc, getDoc, setDoc, query, where } from "firebase/firestore";
import { getOnlinePlayersByWorld } from "./_tibiaData";



export async function getAllAworlds(): Promise<string[]> {
  try {
    const AllWorldsRef = doc(db, "all-worlds", "worlds");
    const docSnap = await getDoc(AllWorldsRef);
    const allWorlds = docSnap?.data()?.worlds;

    return allWorlds ? allWorlds : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getWorldsToSearchOnlinePlayers(): Promise<string[]> {
  try {
    const AllWorldsRef = doc(db, "worlds-online-players", "NvV95wtb2CF5qbOMK9oU");
    const docSnap = await getDoc(AllWorldsRef);
    const allWorlds = docSnap?.data()?.worlds;

    return allWorlds ? allWorlds : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function saveWorldsToSearchOnlinePlayers(worlds: string[]): Promise<boolean> {
  try {
    const AllWorldsRef = doc(db, "worlds-online-players", "NvV95wtb2CF5qbOMK9oU");
    await setDoc(AllWorldsRef, { worlds });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export async function getRegisteredDeaths(): Promise<string[]> {
  try {
    const alreadySavedRef = doc(db, `already-in`, "deaths-added");
    const alreadySavedDoc = await getDoc(alreadySavedRef);

    return alreadySavedDoc?.data()?.ids || [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function saveRegisteredDeaths(ids: string[]): Promise<boolean> {
  try {
    const saveRegisteredRef = doc(db, `already-in`, "deaths-added");
    await setDoc(saveRegisteredRef, { ids });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export async function getAllOnlinePlayers() {

  try {
    const onlineRef = doc(db, "online-now", "online");
    const docSnap = await getDoc(onlineRef);
    const data = docSnap?.data()?.players as { name: string, server: string }[] | undefined

    return data ? data : []
  } catch (error) {
    console.log(error)
    return []
  }
}

export async function getPlayersToCheckIfDied() {
  try {

    let worldsToCheck = await getWorldsToCheckDeaths()
    if (worldsToCheck.length < 1) {
      // const onlineRef = doc(db, "online-now", "online");
      // await setDoc(onlineRef, { players: [] });
      worldsToCheck = await getAllAworlds()

    }

    const wasOnline = doc(db, `online-now`, "online");
    const docSnap = await getDoc(wasOnline);
    const data = docSnap?.data()?.players as { name: string, server: string }[] | undefined

    const splicedWorlds = worldsToCheck.splice(0, 2)

    const playersToCheck = data?.filter(player => {

      return splicedWorlds.includes(player.server)
    })

    saveWorldsToCheckDeaths(worldsToCheck)
    return playersToCheck ? playersToCheck : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getWorldsToCheckDeaths(): Promise<string[]> {
  try {
    const worldsRef = doc(db, "worlds-check-death", "5MHbDoINA7NxtKveBFf2");
    const docSnap = await getDoc(worldsRef);
    const worlds = docSnap?.data()?.worlds;

    return worlds ? worlds : [];
  } catch (error) {
    console.log(error);
    return [];
  }
}
export async function saveWorldsToCheckDeaths(worlds: string[]): Promise<boolean> {
  try {
    const worldsRef = doc(db, "worlds-check-death", "5MHbDoINA7NxtKveBFf2");
    await setDoc(worldsRef, { worlds });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

type saveDeathType = {
  id: string;
  death: deathType;
};

export async function saveDeath({ id, death }: saveDeathType) {
  try {
    const deathRef = doc(db, `all-deaths`, id);
    await setDoc(deathRef, { death: death });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
