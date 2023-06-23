import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Skeleton from "react-loading-skeleton";
import {
  COLORS,  
  PREFERRED_SERVER_LOCAL,
} from "@/constants/global";

import DeathsPodium from "./DeathsPodium";

import {
  HomeContainer,  
  DeathsWrapper,
  ScrolableContent,
  DeathItem,
  SelectWorld,
} from "./home.styled";

import { Death } from "./@types/home-types";
import { WORLDS } from "@/constants/death-tracker";
import LootSpliter from "../loot-spliter/LootSpliter";

const Home = () => {
  const { t } = useTranslation("tags");
  const [server, setServer] = useState("");
  const [deaths, setDeaths] = useState<Death[]>([]);
  const [topDeaths, setTopDeaths] = useState<Death[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getDeaths() {
    const GET_TOP_DEATHS_URL = `/api/death-tracker/deaths/top/${server}`;

    try {
      setIsLoading(true);
      const rawResponse = await fetch(GET_TOP_DEATHS_URL);
      const response = await rawResponse.json();

      setTopDeaths(response.topDeaths.splice(0, 3));
      setDeaths(response.topDeaths.splice(0, response.topDeaths.length));
      setIsLoading(false);
    } catch (error) {
      setTopDeaths([]);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setServer(event.currentTarget.value);
    localStorage.setItem(PREFERRED_SERVER_LOCAL, event.currentTarget.value);
  }

  useEffect(() => {
    const localServer = localStorage.getItem(PREFERRED_SERVER_LOCAL);
    const server = localServer || "Antica";
    setServer(server);
  }, []);

  useEffect(() => {
    if (server) {
      getDeaths();
    }
  }, [server]);

  return (
    <HomeContainer>       

      <LootSpliter/>
    </HomeContainer>
  );
};

export default Home;
