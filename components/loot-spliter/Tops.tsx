import { useState, useRef } from "react";
import { toast } from "react-toastify";

import Button from "../button/Button";

import {
  TopsWrapper,
  TopsItens,
  TopsCollapsable,
  TopsActions,
  WaterMark,
} from "./tops.styled";
import { topsType } from "./@types/loot-spliter";

import domtoimage from "dom-to-image";
import { COLORS } from "@/constants/global";
import { CheckMark, CopyIcon } from "../icons/icons";
import { useTranslation } from "next-i18next";

type topsProps = {
  tops: topsType | undefined;
};

type topsItenProps = {
  extraName: string;
  values: { name: string; total: number }[] | undefined;
};

function getPercentage(total: number, value: number) {
  const percentage = ((value * 100) / total).toFixed(2);

  return percentage;
}

const TopsIten = ({ extraName, values }: topsItenProps) => {
  return (
    <ul>
      <h3>{extraName}:</h3>
      {values!.map(({ name, total }, index) => {
        return (
          <li key={index}>
            <span className="name">{name}</span>:{" "}
            <span className={`amount ${total > 0 ? "positive" : "negative"}`}>
              {total}
            </span>
            <span>
              {" "}
              ({" "}
              {getPercentage(
                values!.reduce((acc, cur) => {
                  acc = acc + cur.total;
                  return acc;
                }, 0),
                total
              )}
              % )
            </span>
          </li>
        );
      })}
    </ul>
  );
};

const Tops = ({ tops }: topsProps) => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);  

  function copyAsImage() {
    const node = document.getElementById("tops-element")!;

    domtoimage
      .toBlob(node, { bgcolor: COLORS["body-bg"] })
      .then((blob) => {
        navigator.clipboard
          .write([
            new ClipboardItem({
              [blob.type]: blob,
            }),
          ])
          .then(() => {
            setCopied(true);
            toast.success(`${t("imageCopiedMessage")} 😜`, {
              autoClose: 3000,
            });
          });
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
        toast.error(t("copyToImageError"));
      });
  }

  return tops ? (
    <TopsWrapper
      initial={{ y: 100, opacity: 1 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: 1,
        staggerChildren: 0.5,
      }}
      exit={{ y: 100, opacity: 0 }}
    >
      <TopsCollapsable id="tops-element">
        <TopsItens>
          {Object.keys(tops).map((key) => {
            return (
              <TopsIten
                key={key}
                extraName={key}
                values={tops[key as keyof typeof tops]}
              />
            );
          })}
        </TopsItens>
        <WaterMark>www.tibiatoolbelt.com</WaterMark>
      </TopsCollapsable>
      <TopsActions>
        <Button
          Icon={copied ? CheckMark : CopyIcon}
          content={`${t("copyAsImage")}`}
          handleClick={copyAsImage}
        />
      </TopsActions>
    </TopsWrapper>
  ) : null;
};

export default Tops;
