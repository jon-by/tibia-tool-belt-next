// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { doc, getDoc, setDoc } from "firebase/firestore";

import db from "./_firebase";
import { getWorlds } from "./_tibiaData";

type Data = {
  error: boolean;
  worlds?: string[];
  errorMessage?: string;
};

async function updateWorlds(req: NextApiRequest, res: NextApiResponse<Data>) {
  const passwordRef = doc(db, `passwords`, "password");
  const rawStoredPass = await getDoc(passwordRef);
  const storedPassword = rawStoredPass?.data()?.password
  const password = req.body.password;


  if(storedPassword === password){
    try {
      const worlds = await getWorlds();
  
      const docRef = doc(db, "all-worlds", "worlds");
  
      await setDoc(docRef, { worlds });
  
      res.status(200).json({ worlds, error: false });
    } catch (error) {
      res.status(500).json({ error: true, errorMessage: JSON.stringify(error) });
      console.log(error);
    }

  }else{

    res.status(400).json({ error: true, errorMessage:"Wrong password" });
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  updateWorlds(req, res);
}
