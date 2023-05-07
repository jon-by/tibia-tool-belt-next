
import { GetStaticProps } from "next";

import Image from "next/image";
import React from "react";
import { RashidWrapper } from "./rashid.styled";


const getRashidLocation = (day: number, hour: number) => {
  const rashidPossibleLocations = {
    0: "Carlin",
    1: "Svargrond",
    2: "Liberty Bay",
    3: "Port Hope",
    4: "Ankrahmun",
    5: "Darashia",
    6: "Edron",
  };
  
  let rashidLocation = "";
  
  if (hour > 9) {
    rashidLocation = rashidPossibleLocations[day as keyof typeof rashidPossibleLocations];
  } else {
    const yesterday = day - 1 === -1 ? 6 : day;
    rashidLocation = rashidPossibleLocations[yesterday as keyof typeof rashidPossibleLocations];
  }
  
  return rashidLocation;
};

export const getStaticProps: GetStaticProps = async () => {
  var todayBerlin = new Date().toLocaleString("en-US", {
    timeZone: "Europe/Berlin"
  });
  
  const today = new Date(todayBerlin);
  const day = today.getDay();
  const hour = today.getHours();
  
  const rashidLocation = getRashidLocation(day, hour);
  
  return {
    props: {
      rashidLocation
    },
    revalidate: 60 * 60 // revalidar a cada 1 hora
  };
};

type RashidProps = {
  rashidLocation: string;
}

const Rashid = ({ rashidLocation }: RashidProps) => {
  return (
    <RashidWrapper>
      <Image src="/images/Rashid.gif" width={64} height={64} alt="Rashid" />
      {rashidLocation}
    </RashidWrapper>
  );
};

export default Rashid;


