import React from "react";

import { Item } from "./resultIten.styled";
import { useTranslation } from "react-i18next";

import CopyToClipboard from "../copy-to-clipboard/CopyToClipboard";
type resultItenProps = {
  name: string;
  amount: number;
  payTo: string;
};

type toPayProps = {
  amount: number;
};

const ToPay = ({ amount }: toPayProps) => {
  return <strong> {Math.round(amount / 1000).toFixed()}k </strong>;
};

const ResultIten = ({ name, amount, payTo }: resultItenProps) => {
  const { t } = useTranslation();
  return (
    <Item>
      <div>
        <strong>{name}</strong> {t("pays")}{" "}
        <img src="/images/loot-spliter/gold-coin.png" alt="gold coin" />
        <ToPay amount={amount} /> {t("to")} <strong>{payTo}</strong>
      </div>
      <CopyToClipboard title="">{`transfer ${amount} to ${payTo}`}</CopyToClipboard>
    </Item>
  );
};

export default ResultIten;
