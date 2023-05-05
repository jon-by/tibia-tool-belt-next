import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AnimatedComponent from "@/components/animated-component/AnimatedComponent";
import { useTranslation } from "next-i18next";
import Imbuiments from "@/components/imbuiments/Imbuiments";

type Props = {};

type homeProps = {
  _props: InferGetStaticPropsType<typeof getStaticProps>;
};
export default function ImbuimentsPage(_props: homeProps) {
  const { t } = useTranslation("imbuiments");
  return (
    <AnimatedComponent>
      <Head>
        <title>Tibia Tool Belt | Imbuiments</title>
        <meta
          property="og:title"
          content="Tibia Tool Belt | Imbuiments"
          key="title"
        />
        <meta name="description" content={`${t("imbuiments-description")}`} />
      </Head>
      <Imbuiments/>
    </AnimatedComponent>
  );
}

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "pt-BR", ["tags, imbuiments"])),
  },
});
