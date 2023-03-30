import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";
import LanguageDetect from "@/components/language-detect/language-detector/LanguageDetect";
import LangContext from "@/context/LangContext";

import "./globalStyles.css"

import { AppWrapper } from "../components/app/app.styled";
import TopBar from "@/components/top-bar/TopBar";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LangContext>
      <AppWrapper>
        <LanguageDetect />
        <TopBar/>
        <Component {...pageProps} />
      </AppWrapper>
    </LangContext>
  );
};

export default appWithTranslation(App);
