import React from "react";
import Button from "../button/Button";
import { useTranslation } from "next-i18next";

import {Wrapper } from './ItensTimerIntroduction.styled'
type itensTimerintroductionProps = {
  setShowChooseItens: (show: boolean) => void;
};
const ItensTimerIntroduction = ({
  setShowChooseItens,
}: itensTimerintroductionProps) => {
  const { t } = useTranslation("itens-timer");
  return (
    <Wrapper>
      
      <h2>{t("neverLooseTrackAgain")}</h2>
      <p>{t("itensTimerMessage")}</p>
      <Button content={`${t("chooseItens")}`} handleClick={() => setShowChooseItens(true)} />
    </Wrapper>
  );
};

export default ItensTimerIntroduction;
