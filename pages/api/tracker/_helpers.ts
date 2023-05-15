import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt"
import { doc, getDoc } from "firebase/firestore";
import db from "./_firebase";

export function getUCTDate() {
  const d = new Date();
  const UTCdate = new Date(
    Date.UTC(
      d.getFullYear(),
      d.getMonth(),
      d.getDate(),
      d.getHours(),
      d.getMinutes(),
      d.getSeconds()
    )
  );

  return UTCdate
}

export async function isAuthorized(password: string) {
  const passwordRef = doc(db, `passwords`, "password");
  const rawStoredPass = await getDoc(passwordRef);
  const storedhash = rawStoredPass?.data()?.password

 return bcrypt.compare(password, storedhash).then(function (result) {
    return result
  }).catch(err => {
    console.log(err)
    return false
  });
}