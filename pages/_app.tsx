import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";
import LanguageDetect from "@/components/language-detect/language-detector/LanguageDetect";
import LangContext from "@/context/LangContext";

import "./globalStyles.css"

import { AppWrapper } from "../components/app/app.styled";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LangContext>
      <AppWrapper>
        <LanguageDetect />
        <Component {...pageProps} />
      </AppWrapper>
    </LangContext>
  );
};

export default appWithTranslation(App);
