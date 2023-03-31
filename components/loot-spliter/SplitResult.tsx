import React from "react";
import { resultType } from "./@types/loot-spliter";
import {
  ResultWrapper,
  ResultsItens,
  ResultTitle,
  TotalProfit,
} from "./splitResult.styled"

import CopyToClipboard from "../copy-to-clipboard/CopyToClipboard";
import { toK } from "./utils";

import ResultIten from "./ResultIten";

import { useTranslation } from "next-i18next";
import Image from "next/image";

const SplitResult = ({
  payments,
  individualProfit,
  numberOfplayers,
}: resultType) => {
  const { t } = useTranslation("loot-spliter");
  return (
    <ResultWrapper
      initial={{ x: -100, opacity: 1 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 1,
        staggerChildren: 0.5,
      }}
      exit={{ x: -100, opacity: 0 }}
    >
      <ResultTitle>{t("result")}</ResultTitle>
      <ResultsItens>
        {payments!.map((payments) => {
          return (
            <ResultIten
              key={`${payments.name}${payments.amount}`}
              name={payments.name}
              amount={payments.amount}
              payTo={payments.payTo}
            />
          );
        })}
      </ResultsItens>
      <TotalProfit>
        <div>
          <Image width={9} height={9} src="/images/loot-spliter/gold-coin.png" alt="tibia gold coin"/>
          <strong> {Math.round(individualProfit! / 1000).toFixed()}k </strong>
          {t("to")}{t("each")}
        </div>
        <div>
          <CopyToClipboard title={`${t("copyAll")}`}>
            {`${payments!
              .map(({ name, amount, payTo }) => `${name} ${t("pays")} ${toK(amount)} ${t("to")} ${payTo} (transfer ${amount} to ${payTo}) \n`)
              .join("")}\n${t("totalProfit")} ${toK(individualProfit! * numberOfplayers!)} ${t("individualProfit")} ${toK(individualProfit!)} ${t("each")}
            `}
          </CopyToClipboard>
        </div>
      </TotalProfit>
    </ResultWrapper>
  );
};

export default SplitResult;