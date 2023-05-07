import Image from "next/image";
import React, { useEffect } from "react";
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

type rashidProps = {
  city?: string;
};
const Rashid = ({ city }: rashidProps) => {
  const date = new Date();
  const today = date.getDay();

  let rashidLocation = null;

  city
    ? (rashidLocation = city)
    : rashidPossibleLocations[today as keyof typeof rashidPossibleLocations];

  useEffect(() => {
    console.log({ city });
  }, []);

  return (
    <RashidWrapper>
      <Image src="/images/Rashid.gif" width={64} height={64} alt="Rashid" />
      {rashidLocation}
    </RashidWrapper>
  );
};

export default Rashid;

export async function getStaticProps() {
  let city = null;

  try {
    const rawCity = await fetch("https://api.tibialabs.com/v2/rashid/city");
    const parsedCity = await rawCity.text();

    city = parsedCity;
  } catch (error) {
    console.log(error);
  }

  return {
      city ,
  };
}
