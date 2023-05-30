import React, { useState, useEffect } from "react";
import { Input, ResultText } from "./partyFinder.styled";
import { useTranslation } from "next-i18next";
import ShareablePlayers from "./ShareablePlayers";

import { Wrapper, InputsWrapper, TitleWrapper } from "./partyFinder.styled";
import { charDataType, onlinePlayerType } from "./@types/partyFinder";
import { toast } from "react-toastify";

import Button from "../button/Button";
import Skeleton from "react-loading-skeleton";
import { COLORS } from "@/constants/global";

const PartyFinder = () => {
  const { t } = useTranslation("party-finder");
  const [charName, setCharName] = useState("");
  const [charData, setCharData] = useState({
    name: "",
    level: 0,
    world: "",
    vocation: "",
    minAndMax: { min: 0, max: 0 },
  });
  const [onlinePlayers, setOnlinePlayers] = useState<onlinePlayerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function searchChar() {
    const CHAR_DATA_URL = `https://api.tibiadata.com/v3/character/${charName}`;
    try {
      setIsLoading(true);
      const rawCharData = await fetch(CHAR_DATA_URL);
      const charData = (await rawCharData.json()) as charDataType;

      if (!charData.characters.character.name) {
        setIsLoading(false);
        setOnlinePlayers([]);
        toast.error(t("charNameNotFound"));
        return false;
      }

      setCharData((oldData) => {
        const name = charData.characters.character.name;
        const level = charData.characters.character.level;
        const world = charData.characters.character.world;
        const vocation = charData.characters.character.vocation;
        const min = Math.round(level / 1.5);
        const max = Math.round(level * 1.5);

        return {
          ...oldData,
          name,
          level,
          world,
          vocation,
          minAndMax: { min, max },
        };
      });
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return false;
    }
  }

  async function searchWorld() {
    const WORLD_DATA_URL = `https://api.tibiadata.com/v3/world/${charData.world}`;
    try {
      setIsLoading(true);
      const rawWorldData = await fetch(WORLD_DATA_URL);
      const worldData = await rawWorldData.json();
      setOnlinePlayers(worldData.worlds.world.online_players);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setOnlinePlayers([]);
    }
  }

  useEffect(() => {
    if (!charData.name || !charData.level || !charData.world) return;
    searchWorld();
  }, [charData]);

  const RenderText = () => {
    switch (true) {
      case isLoading:
        return (
          <ResultText>
            <Skeleton
              baseColor={COLORS["body-bg"]}
              highlightColor="rgba(255,255,255,.1)"
              count={3}
              height={21}
              width={250}
              style={{ margin: ".2rem 0" }}
            />
          </ResultText>
        );

      case onlinePlayers.length > 0:
        return (
          <ResultText>
            <p>{t("playersShareText")}</p>
            <p>
              {charData.name}, {charData.vocation}, {charData.level},
              {charData.world}
            </p>
            <p>
              ( Min: {charData.minAndMax.min} Max: {charData.minAndMax.max} )
            </p>
          </ResultText>
        );

      default:
        return null;
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Party Finder</h1>
      </TitleWrapper>
      <InputsWrapper>
        <Input
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setCharName(e.currentTarget.value)
          }
          placeholder={`${t("charName")}`}
          value={charName}
          type="text"
        />
        <Button content={`${t("search")}`} handleClick={searchChar}></Button>
      </InputsWrapper>
      <RenderText />
      <ShareablePlayers
        levelToShare={charData.minAndMax}
        onlinePlayers={onlinePlayers}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};

export default PartyFinder;
