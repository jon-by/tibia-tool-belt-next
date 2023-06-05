import React from "react";
import { PodiumWrapper, PodiumItem } from "./deathsPodium.styled";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { COLORS } from "@/constants/global";
import { useTranslation } from "next-i18next";

import { Death } from "./@types/home-types";

const PODIUM_IMAGES = [
  "/images/home/Golden_Goblet.gif",
  "/images/home/Silver_Goblet.gif",
  "/images/home/Bronze_Goblet.gif",
];
const d = new Date();

type DeathsPodiumProps = {
  isLoading: boolean;
  topDeaths: Death[];
};

const DeathsPodium = ({ isLoading, topDeaths }: DeathsPodiumProps) => {
  const { t } = useTranslation("common");

  const Render = (top: Death, index: number) => {
    switch (true) {
      case isLoading:
        return (
          <PodiumItem className={`order-${index}`}>
            <Skeleton
              baseColor={COLORS["body-bg"]}
              highlightColor="rgba(255,255,255,.1)"
              count={1}
              height={80}
              width={150}
            />
          </PodiumItem>
        );

      default:
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
            <p>
              ( {top.count} {t("deaths")} )
            </p>
          </PodiumItem>
        );
    }
  };

  return (
    <PodiumWrapper>
      <div className="henricus-awards">        
        <div className="title-wrapper">
          <h2>Henricus's Awards</h2>
          <span>( {t(`common:month-${d.getMonth()}`)} )</span>
        </div>
      </div>
      {topDeaths.length > 0 ? (
        topDeaths.map((top, index) => {
          return Render(top, index);
        })
      ) : (
        <PodiumItem>{t("no-deaths")}</PodiumItem>
      )}
    </PodiumWrapper>
  );
};

export default DeathsPodium;
