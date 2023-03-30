import React, { useState } from "react";
import { InformationIcon } from "../icons/icons";
import {
  LootSpliterContent,
  TitleWrapper,
  ToolTip,
} from "./lootSpliter.styled";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const LootSpliter = () => {
  const [showTip, setShowTip] = useState(false);
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
    </LootSpliterContent>
  );
};

export default LootSpliter;
