import React from "react";
import { Death } from "../home/@types/home-types";
import Image from "next/image";
import { getFormatedDate } from "@/helpers/global-helpers";

import { Wrapper, GraveWrapper, ComplementInfo, ReasonWrapper } from "./deathItem.styled";
import { InformationIcon } from "../icons/icons";

type DeathItemProps = {
  death: Death;
};

const DeathItem = ({ death }: DeathItemProps) => {
  return (
    <Wrapper>
      <h3>{death.name}</h3>

      <GraveWrapper>
        <Image width={21} height={38} src="/images/death-tracker/Grave.gif" alt="grave"  />
        <p>{getFormatedDate(death.time)}</p>
      </GraveWrapper>

        <ComplementInfo>
            <p>{death.server}</p>

           <ReasonWrapper>
           <InformationIcon width={20} heigth={20}/>
            
            <p>{death.reason}</p>
           </ReasonWrapper>
            
            
        </ComplementInfo>

    </Wrapper>
  );
};

export default DeathItem;
