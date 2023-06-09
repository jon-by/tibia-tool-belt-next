import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import AnimatedComponent from "@/components/animated-component/AnimatedComponent";
import Head from "next/head";
import LootSpliter from "@/components/loot-spliter/LootSpliter";

import { useTranslation } from "next-i18next";

type Props = {};
const lootSpliter = () => {
  const { t } = useTranslation("tags");
  return (
    <AnimatedComponent>
      <Head>
        <title>Loot Spliter | Tibia Tool Belt</title>
        <meta
          property="og:title"
          content="Loot Spliter | Tibia Tool Belt"
          key="title"
        />
        <meta name="description" content={`${t("loot-spliter")}`} />
      </Head>
      <LootSpliter />
    </AnimatedComponent>
  );
};

export default lootSpliter;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", [
      "tags",
      "loot-spliter",
      "common",
    ])),
  },
});
