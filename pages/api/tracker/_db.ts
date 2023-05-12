import db from "./_firebase";
import { doc, getDoc } from "firebase/firestore";

const AllWorldsRef = doc(db, "all-worlds", "worlds");

export async function getAllAworlds(): Promise<string[]> {
  const docSnap = await getDoc(AllWorldsRef);

  const allWorlds = docSnap?.data()?.worlds;

  return allWorlds ? allWorlds : [];
}
