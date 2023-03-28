import "@/styles/globals.css";
import LangContext from "@/context/LangContext";

import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import LanguageDetect from "@/components/language-detect/LanguageDetect";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LangContext>
      <>
        <LanguageDetect />
        <Component {...pageProps} />
      </>
    </LangContext>
  );
};

export default appWithTranslation(App);
