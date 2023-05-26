import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { MENU_OPTIONS } from "@/constants/global";
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
import Image from "next/image";
import Link from "next/link";
import { Death } from "./@types/home-types";
import { getFormatedDate } from "@/helpers/global-helpers";
import { WORLDS } from "@/constants/death-tracker";

const Home = () => {
  const { t } = useTranslation();
  const [server, setServer] = useState("all");
  const [deaths, setDeaths] = useState<Death[]>([]);

  async function getDeaths() {
    const rawResponse = await fetch(
      `/api/death-tracker/deaths/${server}?limit=30`
    );
    const response = await rawResponse.json();
    setDeaths(response.deaths);
    
  }


  function handleChange(event: React.ChangeEvent<HTMLSelectElement>){    

    setServer(event.currentTarget.value)
  }

  useEffect(() => {
    getDeaths();
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
          <SelectWorld>
            <h3>{t("last-deaths")}</h3>

            <select onChange={handleChange} name="" id="">
              <option defaultValue="all" value="all">All</option>
              {WORLDS.map((world) => {
                return <option key={world} value={world}>{world}</option>;
              })}
            </select>
          </SelectWorld>

          <ScrolableContent>
            {deaths.map((death) => {
              return (
                <DeathItem key={death._id}>
                  <div className="name-and-image">
                    <h3>{death.name}</h3>
                    <p>{death.server}</p>
                    <Image
                      width={31}
                      height={48}
                      src="/images/home/Grave.gif"
                      alt="grave"
                    />

                    <p>{getFormatedDate(death.timestamp)}</p>
                  </div>

                  <div className="time-and-reason">
                    <p>{death.reason}</p>
                  </div>
                </DeathItem>
              );
            })}
          </ScrolableContent>
        </DeathsWrapper>
      </HomeDeaths>
    </HomeContainer>
  );
};

export default Home;
