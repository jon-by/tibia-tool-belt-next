import React from "react";
import { useTranslation } from "next-i18next";
import { MENU_OPTIONS } from "@/constants/global";
import { HomeContainer, ItenWrapper, Content, HomeItens } from "./home.styled";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { t } = useTranslation("tags");
  return (
    <HomeContainer>
      
        <h1>Tibia Tool Belt</h1>
      
      <HomeItens>
        {MENU_OPTIONS.filter((menuOption) => menuOption.url !== "/").map(
          (menuOption) => {
            return (
              <ItenWrapper key={menuOption.url}>
                <Link href={menuOption.url}>
                  <h2>{menuOption.title}</h2>
                  <Content>
                    <Image
                      src={menuOption.icon}
                      width={42}
                      height={42}
                      alt={menuOption.title}
                    />
                    <p>{t(menuOption.description)}</p>
                  </Content>
                </Link>
              </ItenWrapper>
            );
          }
        )}
      </HomeItens>
    </HomeContainer>
  );
};

export default Home;
