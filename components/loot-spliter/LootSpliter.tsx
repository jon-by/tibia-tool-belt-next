import React, { useEffect, useState } from "react";
import { InformationIcon } from "../icons/icons";
import { AnimatePresence } from "framer-motion";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import Image from "next/image";

import { Ipayments, topsType } from "./@types/loot-spliter";
import { getPayments, validatePartyData } from "./utils";

import {
  LootSpliterContent,
  LootSpliterInput,
  TitleWrapper,
  ToolTip,
} from "./lootSpliter.styled";
import SplitResult from "./SplitResult";
import Tops from "./Tops";

const toastId = "wrong-session-data";

const LootSpliter = () => {
  const [showTip, setShowTip] = useState(false);
  const [huntSession, setHuntSession] = useState("");
  const [paymentData, setPaymentData] = useState<Ipayments[] | undefined>();
  const [numberOfPlayers, setNumberOfPlayers] = useState<number | undefined>(0);
  const [tops, setTops] = useState<topsType | undefined>(undefined);
  const [individualProfit, setIndividualProfit] = useState<number | undefined>(
    0
  );
  const { t } = useTranslation("loot-spliter");

  function handleChange(analyserInput: React.FormEvent<HTMLTextAreaElement>) {
    if (!validatePartyData(analyserInput.currentTarget.value) && !huntSession) {
      if (toast.isActive(toastId)) return;
      toast.error(`${t("wrong-session-data")}`, { toastId });
      return;
    }
    setHuntSession(analyserInput.currentTarget.value);
  }

  useEffect(() => {
    const payments = getPayments(huntSession);
    setPaymentData(payments.payments);
    setIndividualProfit(payments.individualProfit);
    setTops(payments.tops);
    setNumberOfPlayers(payments.numberOfPlayers);
  }, [huntSession]);

  return (
    <LootSpliterContent>
      <TitleWrapper
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      >
        <h1>Loot Spliter</h1> <InformationIcon heigth={18} width={18} />
        <AnimatePresence>
          {showTip && (
            <ToolTip
              initial={{ opacity: 1 }}
              animate={{ opacity: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9] }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.5,
              }}
              exit={{ opacity: 0 }}
            >
              <Image
                alt="Tibia party session"
                width={315}
                height={122}
                src="/images/party-hunt-analyser.png"
              />
            </ToolTip>
          )}
        </AnimatePresence>
      </TitleWrapper>

      <LootSpliterInput
        onChange={handleChange}
        placeholder={`${t("input-placeholder")}`}
      />

      <AnimatePresence>
        {paymentData && paymentData.length > 0 && (
          <SplitResult
            key="result-content"
            payments={paymentData}
            numberOfplayers={numberOfPlayers}
            individualProfit={individualProfit}
          />
        )}
        {paymentData && paymentData.length > 0 && <Tops  tops={tops} />}
      </AnimatePresence>
    </LootSpliterContent>
  );
};

export default LootSpliter;
