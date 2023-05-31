import React, { useEffect, useState } from "react";
import {
  DeathItems,
  DeathTrackerContainer,
  FiltersWrapper,
  ScrolbleContent,
  Pagination,
} from "./deathTracker.styled";
import { WORLDS } from "@/constants/death-tracker";
import { Death } from "../home/@types/home-types"; // todo: move death type to global types
import DeathItem from "./DeathItem";
import Skeleton from "react-loading-skeleton";
import { COLORS } from "@/constants/global";
import Button from "../button/Button";

const qttyToShow = 30;

const DeathTracker = () => {
  const [server, setServer] = useState("Antica");
  const [deaths, setDeaths] = useState<Death[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [end, setEnd] = useState(10);
  const [current, setCurrent] = useState(1);
  const [prev, setPrev] = useState(0);
  const [restDivision, setRestDivision] = useState(0);

  async function getDeathsByServer() {
    const skip = prev === 0 ? 0 : qttyToShow * prev;
    
    try {
      setIsLoading(true);
      const GET_DEATHS_URL = `/api/death-tracker/deaths/${server}?limit=${qttyToShow}&skip=${skip + restDivision}`;
      const rawResponse = await fetch(GET_DEATHS_URL);
      const response = await rawResponse.json();

      setDeaths(response.deaths);
      setEnd(Number((response.totalResults / qttyToShow).toFixed(0)));
      setRestDivision(response.totalResults % qttyToShow);
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

  function handlePrev() {
    setCurrent(current - 1 === 0 ? 1 : current - 1);
    setPrev(prev - 1 < 0 ? 0 : prev - 1);
  }
  function handleNext() {
    setCurrent(current + 1 > end ? current : current + 1);
    setPrev(prev + 2 > end ? prev : prev + 1);
  }

  useEffect(() => {
    if (server) {
      getDeathsByServer();
    }
  }, [server, current]);

  useEffect(() => {
    setEnd(10);
    setCurrent(1);
    setPrev(0);
  }, [server]);
  return (
    <DeathTrackerContainer>
      <h1>Death Tracker </h1>

      <FiltersWrapper>
        <label>
          Server
          <select onChange={handleChange} defaultValue="Antica">
            {WORLDS.map((world) => {
              return (
                <option key={world} value={world}>
                  {world}
                </option>
              );
            })}
          </select>
        </label>

      {/* todo: implement min and max level filter */}
        {/* <label>
          Min level
          <input type="number" min={8} defaultValue={8} step={100} />
        </label>
        <label>
          max level
          <input type="number" min={9} defaultValue={9} step={100} />
        </label> */}
      </FiltersWrapper>
      <Pagination>
        <Button content="<<" handleClick={handlePrev} />
        <div>
          <span>{current} </span>... {end}
        </div>
        <Button content=">>" handleClick={handleNext} />
      </Pagination>
      <ScrolbleContent>
        <DeathItems>
          {isLoading ? (
            <Skeleton
              baseColor={COLORS["body-bg"]}
              highlightColor="rgba(255,255,255,.1)"
              count={30}
              width={332}
              height={62.38}
              style={{marginTop:"13px"}}
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
