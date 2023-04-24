import React from "react";

import { IMBUIMENTS_DATA } from "@/constants/imbuiments";
import { imbuimentData, imbuimentTitle } from "./@types/imbuiments";
import Image from "next/image";

type imbuitype = string;

const Imbuiments = () => {
  return (
    <div>
      {Object.keys(IMBUIMENTS_DATA).map((imbuimentType) => {
        type imbuitype = keyof typeof IMBUIMENTS_DATA;
        const itensData = IMBUIMENTS_DATA[imbuimentType as imbuimentTitle] as imbuimentData;

        console.log({ itensData })
        return (
          <div>
            <h2>{imbuimentType}</h2>
            <div>{itensData.map(item => {
              return <div>{item.name} <Image alt={item.name} src={item.icon} width={64} height={64} /></div>
            })}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Imbuiments;
