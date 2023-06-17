import React from "react";
import { LanguageSwitcherIcon } from "../icons/icons";

import { AnimatePresence, useCycle } from "framer-motion";
import { useLanguage } from "../../context/LangContext";
import { LANGUAGES } from "../../constants/global";

import {
  LangSwitcherShell,
  Selectedlanguage,
  ChooseLangMotionModal,
  LangItemMotion,
} from "./langSwitcher.styled";

const LangSwitcher = () => {
  const [isOpen, setIsOpen] = useCycle(false, true);
  const { lang, setLang } = useLanguage();

  function handleSelect(code: string) {
    setLang(code);
    setIsOpen();
  }

  return (
    <LangSwitcherShell>

      <Selectedlanguage
        whileHover={{
          scale: 1.09,
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen()}
      >
        <>
          <LanguageSwitcherIcon width={20} color="#ffd284" heigth={20} />
          {LANGUAGES.find((l) => l.code === lang)?.title}
        </>
      </Selectedlanguage>

      <AnimatePresence>
        {isOpen && (
          <ChooseLangMotionModal
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
            {LANGUAGES.map((language, index) => {
              return (
                <LangItemMotion
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
                  key={`${language.code}-${index}`}
                  selected={language.code === lang}
                  onClick={() => handleSelect(language.code)}
                >
                  {language.title}
                </LangItemMotion>
              );
            })}
          </ChooseLangMotionModal>
        )}
      </AnimatePresence>
    </LangSwitcherShell>
  );
};

export default LangSwitcher;
