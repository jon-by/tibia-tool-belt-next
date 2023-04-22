import React from "react";
import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";
import AnimatedComponent from "@/components/animated-component/AnimatedComponent";

import { useTranslation } from "next-i18next";
import PartyFinder from "@/components/party-finder/PartyFinder";

type Props = {};
const partyFinder = () => {
  const { t } = useTranslation("tags");
  return (
    <AnimatedComponent>
      <Head>
        <title>Loot Spliter | Party Finder</title>
        <meta
          property="og:title"
          content="Loot Spliter | Party Finder"
          key="title"
        />
        <meta name="description" content={`${t("party-finder")}`} />
      </Head>
      <PartyFinder />
    </AnimatedComponent>
  );
};

export default partyFinder;

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", [
      "tags",
      "party-finder",
      "common",
    ])),
  },
});
