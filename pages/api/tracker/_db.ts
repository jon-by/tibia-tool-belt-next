import { deathType } from "./@types/_tracker-type";
import db from "./_firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

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

export async function getPlayersToCheckIfDied() {
  try {
    const wasOnline = doc(db, `online-now`, "online");
    const docSnap = await getDoc(wasOnline);

    return docSnap.exists() ? docSnap.data().players : [];
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
