import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

import AnimatedComponent from "@/components/animated-component/AnimatedComponent";

import { useTranslation } from "next-i18next";
import DeathTracker from "@/components/death-tracker/DeathTracker";

type Props = {};
const deathTracker = () => {
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
        <meta name="description" content={`${t("death-tracker-description")}`} />
      </Head>
      <DeathTracker/>
    </AnimatedComponent>
  );
};

export default deathTracker;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", [
      "tags",
      "death-tracker",
      "common",
    ])),
  },
});
