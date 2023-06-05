import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AnimatedComponent from "@/components/animated-component/AnimatedComponent";
import { useTranslation } from "next-i18next";
import Home from "@/components/home/Home";

type Props = {};

type homeProps = {
  _props: InferGetStaticPropsType<typeof getStaticProps>;
};
export default function HomePage(_props: homeProps) {
  const { t } = useTranslation("tags");
  return (
    <AnimatedComponent>
      <Head>
        <title>Tibia Tool Belt</title>
        <meta property="og:title" content="Tibia Tool Belt" key="title" />
        <meta name="description" content={`${t("home-description")}`} />
      </Head> 
      <Home/>        
    </AnimatedComponent>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", ["tags", "common"])),
  },
});
