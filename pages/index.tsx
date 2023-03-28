import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
//import { Poppins } from "next/font/google";

import { useContext } from "react"
import LangContext, { useLanguage } from "../context/LangContext";
import { langContextType } from "@/context/LangContext";

type Props = {
 
}

export default function Home(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const {lang, setLang} = useLanguage()
  const { t } = useTranslation();

  return <>{t("teste")} {lang}
  
  <button onClick={() => setLang(lang==="br"? "en": "br")}>weeee</button>
  </>;
}



export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "br", ["common"])),
  },
});
