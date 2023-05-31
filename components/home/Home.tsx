import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import Skeleton from "react-loading-skeleton";
import {
  COLORS,
  MENU_OPTIONS,
  PREFERRED_SERVER_LOCAL,
} from "@/constants/global";

import DeathsPodium from "./DeathsPodium";

import {
  HomeContainer,
  ItenWrapper,
  Content,
  HomeItens,
  DeathsWrapper,
  ScrolableContent,
  DeathItem,
  SelectWorld,
} from "./home.styled";

import { Death } from "./@types/home-types";

import { WORLDS } from "@/constants/death-tracker";

const d = new Date();
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
      <h1>Tibia Tool Belt</h1>
      <HomeItens>
        {MENU_OPTIONS.filter((menuOption) => menuOption.url !== "/").map(
          (menuOption) => {
            return (
              <ItenWrapper
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.1 },
                }}
                whileTap={{ scale: 0.9 }}
                key={menuOption.url}
              >
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

      <DeathsWrapper>
        <DeathsPodium isLoading={isLoading} topDeaths={topDeaths} />
        <SelectWorld>
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

        <small>
          {t("common:sort-by")} ( {t(`common:month-${d.getMonth()}`)} )
        </small>
        <ScrolableContent>
          {isLoading ? (
            <Skeleton
              baseColor={COLORS["body-bg"]}
              highlightColor="rgba(255,255,255,.1)"
              count={6}
              height={34}
              width={250}
              style={{ margin: ".2rem 0" }}
            />
          ) : deaths.length > 0 ? (
            deaths.map((death) => {
              return (
                //todo: crate a DeathItem component
                <DeathItem key={death._id}>
                  <h3>{death.name}</h3>
                  <p>
                    level {death.level} ( {death.count} {t("common:deaths")} )
                  </p>
                </DeathItem>
              );
            })
          ) : (
            <div>{t("common:no-deaths")}</div>
          )}
        </ScrolableContent>
      </DeathsWrapper>
    </HomeContainer>
  );
};

export default Home;
