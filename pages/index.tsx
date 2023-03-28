import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
//import { Poppins } from "next/font/google";
import { useLanguage } from "../context/LangContext";

import Home from "@/components/home/Home";

type Props = {};

type homeProps = {
  props: InferGetStaticPropsType<typeof getStaticProps>;
};

export default function HomePage(props: homeProps) {
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

  return (
    <Home/>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", ["common"])),
  },
});
