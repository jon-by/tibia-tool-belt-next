import React, { useEffect, useState } from "react";

import { LanguageSwitcherIcon } from "../icons/icons";
import {
  Wrapper,
  CurrentWrapper,
  ChooseLangM,
  LangItemM,
} from "./langSwitcher.styled";
import { AnimatePresence, useCycle } from "framer-motion";
import { useLanguage } from "@/context/LangContext";
import { LANGUAGES } from "../../constants/global";

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const { lang, setLang } = useLanguage();

  function handleSelect(code: string) {
    setLang(code);

    setIsOpen();
  }

  return (
    <Wrapper>
      <CurrentWrapper
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen()}
      >
        <>
          <LanguageSwitcherIcon />
          {LANGUAGES.find((l) => l.code === lang)?.title}
        </>
      </CurrentWrapper>
      <AnimatePresence>
        {isOpen && (
          <ChooseLangM
            initial={{ y: 100, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.2,
              duration: 0.5,
              staggerChildren: 0.5,
            }}
            exit={{ y: 100, opacity: 0 }}
          >
            {LANGUAGES.map((l, index) => {
              return (
                <LangItemM
                  initial={{ y: -50, opacity: 1 }}
                  animate={{ y: 0 }}
                  transition={{
                    type: "spring",
                    bounce: 0.6,
                    duration: 0.5,
                  }}
                  exit={{ y: 50, opacity: 0 }}
                  whileHover={{
                    scale: 1.09,
                    transition: { duration: 0.1 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  key={`${l.code}-${index}`}
                  selected={l.code === lang}
                  onClick={() => handleSelect(l.code)}
                >
                  {l.title}
                </LangItemM>
              );
            })}
          </ChooseLangM>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default LangSwitcher;
