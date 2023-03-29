import React, { useEffect, useState } from "react";
import { Tooltip } from "react-tooltip";
import { toast } from "react-toastify";

import { getPayments } from "./utils";
import { Ipayments, topsType } from "./@types/loot-spliter";
import { useTranslation } from "react-i18next";

import {
  Steps,
  Content,
  InformationIconWrapper,
  TextArea,
} from "./lootSpliter.styled";

//import { AppWrapper } from "../../globalStyles";

import Tops from "./Tops";
import { InformationIcon, CalcIcon } from "../icons/icons";
import Button from "../button/Button";
import Result from "./Result";
import { AnimatePresence } from "framer-motion";

const LootSpliter = () => {
  const [partyData, setPartyData] = useState("");
  const [payments, setPayments] = useState<Ipayments[] | undefined>(undefined);
  const [tops, setTops] = useState<topsType | undefined>(undefined);
  const [individualProfit, setIndividualProfit] = useState<number | undefined>(
    0
  );
  const [numberOfPlayers, setNumberOfPlayers] = useState<number | undefined>(0);

  const { t } = useTranslation();

  function handleChange(event: React.FormEvent<HTMLTextAreaElement>) {
    setPartyData(event.currentTarget.value);
  }

  function handleClick() {
    const paymentsResult = getPayments(partyData);

    if (paymentsResult.error) {
      toast.error(t("partyHuntSessionFormatIsWrong"), { autoClose: 5000 });
      return;
    }
    setPayments(paymentsResult.payments);
    setTops(paymentsResult.tops);
    setIndividualProfit(paymentsResult.individualProfit);
    setNumberOfPlayers(paymentsResult.numberOfPlayers);
  }

 
  return (
    <div>
      <Content>
        <Steps>
          <h1>Loot Spliter</h1>
          <InformationIconWrapper  id="loot-spliter-tooltip" >
            <InformationIcon width={20} heigth={20} />
          </InformationIconWrapper>
           <Tooltip  anchorSelect="#loot-spliter-tooltip" place="bottom">
            <img
              src="/images/party-hunt-analyser.png"
              alt="tibia party hunt analyser"
            />
          </Tooltip>
        </Steps>

        <TextArea
          onChange={handleChange}
          placeholder={`${t("pastePartyHuntAnalyser")}`}
        ></TextArea>

        <Button
          padding="8px 8px"
          iconPosition="right"
          Icon={CalcIcon}
          handleClick={handleClick}
          content={`${t("ctaCalc")}`}
        />

        {payments && payments.length && (
          <AnimatePresence>
            <Result
              key="result-content"
              payments={payments}
              numberOfplayers={numberOfPlayers}
              individualProfit={individualProfit}
            />
          </AnimatePresence>
        )}

        <Tops tops={tops} />
      </Content>
    </div>
  );
};

export default LootSpliter;
