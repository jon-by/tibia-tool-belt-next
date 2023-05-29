import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Skeleton from "react-loading-skeleton";
import { COLORS, MENU_OPTIONS } from "@/constants/global";

import DeathsPodium from "./DeathsPodium";

import {
  HomeContainer,
  ItenWrapper,
  Content,
  HomeItens,
  HomeDeaths,
  DeathsWrapper,
  ScrolableContent,
  DeathItem,
  SelectWorld,
} from "./home.styled";

import { Death, Top } from "./@types/home-types";
import { getFormatedDate } from "@/helpers/global-helpers";
import { WORLDS } from "@/constants/death-tracker";

const Home = () => {
  const { t } = useTranslation("tags");
  const [server, setServer] = useState("");
  const [deaths, setDeaths] = useState<Death[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [topDeaths, setTopDeaths] = useState<Death[]>([]);

  async function getDeaths() {
    try {
      setIsLoading(true);
      const rawResponse = await fetch(
        `/api/death-tracker/deaths/top/${server}`
      );
      const response = await rawResponse.json();
      setTopDeaths(response.topDeaths.splice(0, 3));
      setDeaths(response.topDeaths.splice(4, response.topDeaths.length));
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
    localStorage.setItem("preferred-server", event.currentTarget.value);
  }

  useEffect(() => {
    const localServer = localStorage.getItem("preferred-server");
    const server = localServer || "all";
    setServer(server);
  }, []);

  useEffect(() => {
    if (server) {
      getDeaths();
    }
  }, [server]);

  return (
    <HomeContainer>
      <h1>Tibia Tool Belt</h1>
      <HomeItens>
        {MENU_OPTIONS.filter((menuOption) => menuOption.url !== "/").map(
          (menuOption) => {
            return (
              <ItenWrapper key={menuOption.url}>
                <Link href={menuOption.url}>
                  <h2>{menuOption.title}</h2>
                  <Content>
                    <Image
                      src={menuOption.icon}
                      width={42}
                      height={42}
                      alt={menuOption.title}
                    />
                    <p>{t(menuOption.description)}</p>
                  </Content>
                </Link>
              </ItenWrapper>
            );
          }
        )}
      </HomeItens>
      <HomeDeaths>
        <DeathsWrapper>
          <DeathsPodium isLoading={isLoading} topDeaths={topDeaths} />
          <SelectWorld>
            <h3>{t("common:last-deaths")}</h3>

            <select onChange={handleChange} value={server} name="" id="">
              {WORLDS.map((world) => {
                return (
                  <option key={world} value={world}>
                    {world === "all" ? "--" : world}
                  </option>
                );
              })}
            </select>
          </SelectWorld>

          <small>{t("common:sort-by")}</small>
          <ScrolableContent>
            {isLoading ? (
              <Skeleton
                baseColor={COLORS["body-bg"]}
                highlightColor="rgba(255,255,255,.1)"
                count={6}
                height={100}
                width={450}
              />
            ) : deaths.length > 0 ? (
              deaths.map((death) => {
                return (
                  //todo: crate a DeathItem component
                  <DeathItem key={death._id}>
                    <h3>{death.name}</h3>
                    <p>
                      level {death.level} ({death.count} Deaths)
                    </p>
                  </DeathItem>
                );
              })
            ) : (
              <div>{t("common:no-deaths")}</div>
            )}
          </ScrolableContent>
        </DeathsWrapper>
      </HomeDeaths>
    </HomeContainer>
  );
};

export default Home;
