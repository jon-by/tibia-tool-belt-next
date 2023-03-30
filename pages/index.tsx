import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
//import { Poppins } from "next/font/google";
import TopBar from "@/components/top-bar/TopBar";
import { ComponentsWrapper } from "@/components/app/app.styled";
import { useTranslation } from "next-i18next";

type Props = {};

type homeProps = {
  _props: InferGetStaticPropsType<typeof getStaticProps>;
};
export default function Home(_props: homeProps) {
  const { t } = useTranslation("tags");
  return (
    <ComponentsWrapper>
      <Head>
        <title>Tibia Tool Belt</title>
        <meta property="og:title" content="Tibia Tool Belt" key="title" />
        <meta name="description" content={`${t("home-description")}`} />
      </Head>
      <TopBar />      
    </ComponentsWrapper>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", ["tags"])),
  },
});
