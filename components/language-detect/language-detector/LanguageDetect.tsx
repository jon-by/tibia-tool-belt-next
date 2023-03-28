import { useLanguage } from "@/context/LangContext";
import React, { useEffect } from "react";

export const LOCAL_LOCALE_KEY = "ttb-locale-key";
const LanguageDetect = () => {
  const { setLang } = useLanguage();
  useEffect(() => {
    const locale = localStorage.getItem(LOCAL_LOCALE_KEY);
    if (!locale) {
      setLang("en");
      localStorage.setItem(LOCAL_LOCALE_KEY, "en");
    } else {
      setLang(locale);
    }
  }, []);

  return null;
};

export default LanguageDetect;
