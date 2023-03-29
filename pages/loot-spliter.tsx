import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ComponentsWrapper } from '@/components/app/app.styled'
import TopBar from '@/components/top-bar/TopBar'
import Head from 'next/head'

import { useTranslation } from "next-i18next";
import LootSpliter from '@/components/loot-spliter/LootSpliter';

type Props = {};
const lootSpliter = () => {
    const { t } = useTranslation("tags");
  return (
    <ComponentsWrapper>
        <Head>
        <title>Loot Spliter | Tibia Tool Belt</title>
        <meta property="og:title" content="Loot Spliter | Tibia Tool Belt" key="title" />
        <meta name="description" content={`${t("loot-spliter")}`} />
        </Head>
        <TopBar/>
        <LootSpliter/>
    </ComponentsWrapper>
  )
}

export default lootSpliter


export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale ?? "pt-BR", ["tags"])),
    },
  });
  