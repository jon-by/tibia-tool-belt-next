import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import { appWithTranslation } from "next-i18next";
import LanguageDetect from "@/components/language-detect/language-detector/LanguageDetect";
import LangContext from "@/context/LangContext";

import "./globalStyles.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";
import { AppWrapper } from "../components/app/app.styled";
import TopBar from "@/components/top-bar/TopBar";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
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
        <TopBar />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </AppWrapper>
    </LangContext>
  );
};

export default appWithTranslation(App);
