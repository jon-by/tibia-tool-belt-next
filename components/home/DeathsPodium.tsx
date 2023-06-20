import React from "react";
import { PodiumWrapper, PodiumItem } from "./deathsPodium.styled";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import { COLORS } from "@/constants/global";
import { useTranslation } from "next-i18next";

import { Death } from "./@types/home-types";

import henricusGif from "../../public/images/Henricus.gif";

import goldenGlobet from "../../public/images/home/Golden_Goblet.gif";
import silverGlobet from "../../public/images/home/Silver_Goblet.gif";
import bronzeGlobet from "../../public/images/home/Bronze_Goblet.gif";

const PODIUM_IMAGES = [goldenGlobet, silverGlobet, bronzeGlobet];

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
              width={PODIUM_IMAGES[index].width}
              height={PODIUM_IMAGES[index].height}
              src={PODIUM_IMAGES[index].src}
              alt={`${index + 1}º place`}
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
          <Image
            src={henricusGif.src}
            width={henricusGif.width}
            alt="Henricus Tibia blessing NPC"
            height={henricusGif.height}
          />
          <h2>Henricus's Awards</h2>
          <small> {t(`common:died-most`)} ( {t(`common:month-${d.getMonth()}` )} )</small>
          
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
