import React, { useEffect, useState } from "react";
import { PodiumWrapper, PodiumItem } from "./deathsPodium.styled";
import Image from "next/image";

type DeathsPodiumProps = {
  server: string;
};

const PODIUM_IMAGES = [
  "/images/home/Golden_Goblet.gif",
  "/images/home/Silver_Goblet.gif",
  "/images/home/Bronze_Goblet.gif",
];

const DeathsPodium = ({ server }: DeathsPodiumProps) => {
  const [topDeaths, setTopDeaths] = useState<{ name: string; count: number }[]>(
    []
  );

  async function getTopDeaths() {
    try {
      const rawResponse = await fetch(
        `/api/death-tracker/deaths/top/${server}`
      );
      const response = await rawResponse.json();
      setTopDeaths(response.topDeaths);
    } catch (error) {
      setTopDeaths([]);
    } finally {
    }
  }

  useEffect(() => {
    if (server) {
      getTopDeaths();
    }
  });
  return (
    <PodiumWrapper>
        <div className="henricus-awards">
            <h2>Henricus's Awards</h2>
            <Image width={26} height={29} alt="medal" src="/images/home/Medal_of_Honour.gif"></Image>
        </div>
      {topDeaths.map((top, index) => {
        return (
          <PodiumItem className={`order-${index}`} key={top.name}>
            {index + 1}º
            <Image
              width={32}
              height={32}
              src={PODIUM_IMAGES[index]}
              alt="second place"
            />
            <strong>{top.name}</strong>
            <p>({top.count} Deaths)</p>
          </PodiumItem>
        );
      })}
    </PodiumWrapper>
  );
};

export default DeathsPodium;
