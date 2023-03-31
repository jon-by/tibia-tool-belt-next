import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import LanguageDetect from "@/components/language-detect/language-detector/LanguageDetect";
import LangContext from "@/context/LangContext";

import "./globalStyles.css"
import "react-toastify/dist/ReactToastify.css";
import { AppWrapper } from "../components/app/app.styled";
import TopBar from "@/components/top-bar/TopBar";
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LangContext>
      <AppWrapper>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
        <LanguageDetect />
        <TopBar/>
        <Component {...pageProps} />
      </AppWrapper>
    </LangContext>
  );
};

export default appWithTranslation(App);
