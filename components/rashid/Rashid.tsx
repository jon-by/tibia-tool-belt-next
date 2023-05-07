import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RashidWrapper } from "./rashid.styled";

const rashidPossibleLocations = {
  0: "Carlin",
  1: "Svargrond",
  2: "Liberty Bay",
  3: "Port Hope",
  4: "Ankrahmun",
  5: "Darashia",
  6: "Edron",
};

type rashidLocationType = keyof typeof rashidPossibleLocations

const Rashid = () => {

  var todayBerlin = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin"
  });

  const today = new Date(todayBerlin);
  const day = today.getDay()
  const hour = 8

  let rashidLocation = ""

  if (hour > 9) {
    rashidLocation = rashidPossibleLocations[day as rashidLocationType]
  } else {
    const yesterday = day - 1 === -1 ? 6 : day
    rashidLocation = rashidPossibleLocations[yesterday as rashidLocationType]
  }

  return (
    <RashidWrapper>
      <Image src="/images/Rashid.gif" width={64} height={64} alt="Rashid" />
      {rashidLocation}
    </RashidWrapper>
  );
};

export default Rashid;


