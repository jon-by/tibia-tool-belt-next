import React, { useState, useEffect } from "react";
import { Input } from "./partyFinder.styled";
import { useTranslation } from "next-i18next";
import ShareablePlayers from "./ShareablePlayers";
import useDebounce from "../custom-hooks/useDebounce";
import {MagnifyingGlass} from  'react-loader-spinner'

import {
  Wrapper,
  InputsWrapper,
  InformationIconWrapper,
  TitleWrapper,
} from "./partyFinder.styled";
import { charDataType, onlinePlayerType } from "./@types/partyFinder";import { toast } from "react-toastify";

import Button from "../button/Button";
import { InformationIcon, RestartIcon } from "../icons/icons";
import { Tooltip } from "react-tooltip";

const PartyFinder = () => {
  const [charName, setCharName] = useState("");
  const debouncedSearchTerm: string = useDebounce<string>(charName, 500);
  const [charData, setCharData] = useState({ name: "", level: 0, world: "", vocation: "" });
  const [onlinePlayers, setOnlinePlayers] = useState<onlinePlayerType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation("party-finder");

  async function searchChar() {
    try {
      setIsLoading(true);
      const rawCharData = await fetch(
        `https://api.tibiadata.com/v3/character/${charName}`
      );
      const charData = (await rawCharData.json()) as charDataType;

      if (!charData.characters.character.name) {
        setIsLoading(false);
        setOnlinePlayers([]);
        toast.error(t("charNameNotFound"));
        return false;
      }

      setCharData((oldData) => {
        return {
          ...oldData,
          name: charData.characters.character.name,
          level: charData.characters.character.level,
          world: charData.characters.character.world,
          vocation: charData.characters.character.vocation
        };
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      return false;
    }
  }

  async function searchWorld() {
    try {
      setIsLoading(true);
      const rawWorldData = await fetch(
        `https://api.tibiadata.com/v3/world/${charData.world}`
      );
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
    if (debouncedSearchTerm) {
      searchChar();
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (!charData.name || !charData.level || !charData.world) return;
    searchWorld();
  }, [charData]);

  return (
    <Wrapper>
      <TitleWrapper>
        <h1>Party Finder</h1>
        <InformationIconWrapper id="party-finder-tip">
          <InformationIcon />
        </InformationIconWrapper>
        <Tooltip style={{width: "95%", textAlign: "center", fontWeight: "bolder"}} anchorId="party-finder-tip">{t("partyFinderToolTip")}</Tooltip>
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
        {charData.world && charName && (
          <Button Icon={RestartIcon} handleClick={searchWorld} />
        )}
      </InputsWrapper>
      {onlinePlayers.length > 0 && (
        <div style={{ textAlign: "center" }}>
          {t("playersShareText")}
          <strong>
            ( {charData.name} - {charData.vocation} - {charData.level} | {charData.world} )
          </strong>
        </div>
      )}
      {isLoading ? (
        <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{}}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor = '#c0efff'
        color = '#dfdfdf'
      />
      ) : (
        <ShareablePlayers
          levelToShare={charData.level}
          onlinePlayers={onlinePlayers}
        />
      )}
    </Wrapper>
  );
};

export default PartyFinder;
