import React, { useEffect, useState } from "react";
import { InformationIcon } from "../icons/icons";
import { useTranslation } from "next-i18next";
import { getPayments,validatePartyData } from "./utils";

import { Ipayments } from "./@types/loot-spliter";

import {
  LootSpliterContent,
  LootSpliterInput,
  TitleWrapper,
  ToolTip,
} from "./lootSpliter.styled";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

type Props = {};

const LootSpliter = () => {
  const [showTip, setShowTip] = useState(false);
  const [huntSession, setHuntSession] = useState("")
  const [paymentData, setPaymentData] = useState<Ipayments[] | undefined>()
  const { t } = useTranslation("loot-spliter");


function handleChange(event:  React.FormEvent<HTMLTextAreaElement>){  
  if(!validatePartyData(event.currentTarget.value)) return  
  setHuntSession(event.currentTarget.value)
}

useEffect(()=>{
const payments = getPayments(huntSession)
  setPaymentData(payments.payments)
},[huntSession])


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

      <LootSpliterInput onChange={handleChange} placeholder={`${t("input-placeholder")}`}  />
    </LootSpliterContent>
  );
};

export default LootSpliter


