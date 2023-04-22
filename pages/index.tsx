import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AnimatedComponent from "@/components/animated-component/AnimatedComponent";
//import { Poppins } from "next/font/google";
import { useTranslation } from "next-i18next";

type Props = {};

type homeProps = {
  _props: InferGetStaticPropsType<typeof getStaticProps>;
};
export default function Home(_props: homeProps) {
  const { t } = useTranslation("tags");
  return (
    <AnimatedComponent>
      <Head>
        <title>Tibia Tool Belt</title>
        <meta property="og:title" content="Tibia Tool Belt" key="title" />
        <meta name="description" content={`${t("home-description")}`} />
      </Head>          
    </AnimatedComponent>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", ["tags"])),
  },
});
