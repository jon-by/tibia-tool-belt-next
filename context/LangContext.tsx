import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { LOCAL_LOCALE_KEY } from "@/components/language-detect/LanguageDetect";

export type langContextType = {
  lang: string;
  setLang: (lang: string) => void;
};

type langContextProps = {
  children: JSX.Element;
};

export const LangData = createContext({} as langContextType);

export default function LangContext({ children }: langContextProps) {
  const [lang, setLang] = useState("br");

  const router = useRouter();

  function changeLocale(locale: string) {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: locale }
    );

    setLang(locale);

    localStorage.setItem(LOCAL_LOCALE_KEY, locale);
  }

  return (
    <LangData.Provider value={{ lang: lang, setLang: changeLocale }}>
      {children}
    </LangData.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LangData);
  return context;
}
