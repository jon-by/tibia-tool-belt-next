import React, { useEffect, useState } from "react";
import {
  DeathItems,
  DeathTrackerContainer,
  FiltersWrapper,
  ScrolbleContent,
} from "./deathTracker.styled";
import { WORLDS } from "@/constants/death-tracker";
import { Death } from "../home/@types/home-types"; // todo: move death type to global types
import DeathItem from "./DeathItem";
import Skeleton from "react-loading-skeleton";
import { COLORS } from "@/constants/global";

const DeathTracker = () => {
  const [server, setServer] = useState("Antica");
  const [deaths, setDeaths] = useState<Death[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getDeathsByServer() {
    try {
      setIsLoading(true);
      const GET_DEATHS_URL = `/api/death-tracker/deaths/${server}`;
      const rawResponse = await fetch(GET_DEATHS_URL);
      const response = await rawResponse.json();

      setDeaths(response.deaths);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event: React.FormEvent<HTMLSelectElement>) {
    setServer(event.currentTarget.value);
  }

  useEffect(() => {
    if (server) {
      getDeathsByServer();
    }
  }, [server]);
  return (
    <DeathTrackerContainer>
      <h1>Death Tracker </h1>

      <FiltersWrapper>
        <label>
          Server
          <select onChange={handleChange} defaultValue="all">
            {WORLDS.map((world) => {
              return (
                <option key={world} value={world}>
                  {world}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Min level
          <input type="number" min={8} defaultValue={8} step={100} />
        </label>
        <label>
          max level
          <input type="number" min={9} defaultValue={9} step={100} />
        </label>
      </FiltersWrapper>

      <ScrolbleContent>
        <DeathItems>
          {isLoading ? (
            <Skeleton
              baseColor={COLORS["body-bg"]}
              highlightColor="rgba(255,255,255,.1)"
              count={30}
              width={350}
              height={62}
            />
          ) : (
            deaths.map((death) => {
              return <DeathItem key={death._id} death={death} />;
            })
          )}
        </DeathItems>
      </ScrolbleContent>
    </DeathTrackerContainer>
  );
};

export default DeathTracker;
