// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * 1 - Busca todos os players que estavam online, verifica e salva caso haja mortes recentes
 * 2 - Busca os players online no momento e salva na base de dados
 */

import type { NextApiRequest, NextApiResponse } from "next";
import {
  collection,
  doc,
  getDoc,
  setDoc,
  getDocs,
  deleteField,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import db from "./_firebase";
import { getAllAworlds } from "./_db";
import { errorType, onlinePlayerType } from "./@types/_tracker-type";

import { getOnlinePlayersByWorld, getPlayerDeaths } from "./_tibiaData";

type Data = {
  error: boolean;
};

async function getAndSaveOnlinePlayers(allWorlds: string[]) {
  return new Promise(async (resolve, reject) => {
    try {
      let onlineList: string[] = [];
      for (let i = 0; i < allWorlds.length; i++) {
        const world = allWorlds[i];
        const onlinePlayers: onlinePlayerType[] = await getOnlinePlayersByWorld(
          world
        );
        onlineList = onlineList.concat(
          onlinePlayers.map((player) => player.name)
        );
      }
      const onlineRef = doc(db, "online-now", "online");

      await setDoc(onlineRef, { players: onlineList });

      resolve({ error: false });
    } catch (error) {
      console.log(error);
      reject({ error: false, errorMessage: JSON.stringify(error) });
    }
  });
}

async function handleTrackRoutine(res: NextApiResponse<Data>) {
  try {
    const allWorlds = await getAllAworlds();

    await getAndSaveDeaths();

    await getAndSaveOnlinePlayers(allWorlds)
    console.log("done")
    res.status(200).json({ error: false });
  } catch (error) {
    res.status(500).json({ error: true });
  }
}

async function getAndSaveDeaths() {
  return new Promise(async (resolve, reject) => {
    try {

      const alreadySavedRef = doc(db, `already-in`, "deaths-added");
      const alreadySavedDoc = await getDoc(alreadySavedRef);
      let alreadySaved:string[] = alreadySavedDoc?.data()?.ids || []

      

      const wasOnline = doc(db, `online-now`, "online");
      const docSnap = await getDoc(wasOnline);
      if (docSnap.exists()) {
        const wasOnline = docSnap.data().players;

        const deaths = (await getPlayerDeaths(wasOnline)) as {
          time: string;
          name: string;
          reason: string;
          server:string
        }[];

        deaths.forEach(async (death) => {
          
          const d = new Date();
          const nowUTC = new Date(
            Date.UTC(
              d.getFullYear(),
              d.getMonth(),
              d.getDate(),
              d.getHours(),
              d.getMinutes(),
              d.getSeconds()
            )
          );
          const deathTimeUTC = new Date(death.time);

          const timeStamp = Math.floor(deathTimeUTC.getTime() / 1000);

          if (nowUTC.getDate() === deathTimeUTC.getDate()) {
            const documentId = `${death.name.replaceAll(" ","-")}-${timeStamp}`;

            
            if (!alreadySaved.includes(documentId)) {
              alreadySaved.push(documentId)
              
              const deathRef = doc(db, `all-deaths`, documentId);


              await setDoc(deathRef, { death: death });             
             
            }
          }
        });

      } else {
        console.log("No such document!");
      }
      
      const saveRegisteredRef = doc(db, `already-in`, "deaths-added");              
            
      await setDoc(saveRegisteredRef, { ids: alreadySaved });
      
      resolve({ error: false });
    } catch (error) {
      console.log(error);
      reject({ error: true });
    }
  });
}

async function deleteAllDocuments(res: NextApiResponse<Data>) {
  const querySnapshot = await getDocs(collection(db, "all-deaths"));

  querySnapshot.forEach(async (snap) => {
    const cityRef = doc(db, "all-deaths", snap.id);
    await updateDoc(cityRef, {
      death: deleteField(),
    });
    await deleteDoc(cityRef);
  });
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  handleTrackRoutine(res);
}
