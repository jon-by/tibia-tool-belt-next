import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import ItensTimer from "@/components/itens-timer/ItensTimer";
import AnimatedComponent from "@/components/animated-component/AnimatedComponent";

import { useTranslation } from "next-i18next";

type Props = {};
const lootSpliter = () => {
  const { t } = useTranslation("tags");
  return (
    <AnimatedComponent>
      <Head>
        <title>Itens Timer | Tibia Tool Belt</title>
        <meta
          property="og:title"
          content="Itens Timer | Tibia Tool Belt"
          key="title"
        />
        <meta name="description" content={`${t("itens-timer-description")}`} />
      </Head>
      <ItensTimer />
    </AnimatedComponent>
  );
};

export default lootSpliter;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", [
      "tags",
      "itens-timer",
      "common",
    ])),
  },
});
