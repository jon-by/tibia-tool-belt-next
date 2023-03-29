import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from 'next/router';
import {
  MenuWrapper,
  Content,
  ImageWrapper,
  MenuItenM,
  MenuItens,
  NavM,
  NavLinkStyled,
} from "./menu.styled";
import MenuToggle from "./MenuToggle";

const menuOptions = [
  {
    title: "Home",
    icon: "/images/home/home.svg",
    url: "/",
  },
  {
    title: "Loot Spliter",
    icon: "/images/loot-spliter/loot-spliter.svg",
    url: "/loot-spliter",
  },
  {
    title: "Itens Timer",
    icon: "/images/itens-timer/timer-alert-outline.svg",
    url: "/itens-timer",
  },
  {
    title: "Party Finder",
    icon: "/images/party-finder/search-player.svg",
    url: "/party-finder",
  },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <MenuWrapper>
      <MenuToggle isOpen={isOpen} handleChange={handleChange} />
      {isOpen && (
        <AnimatePresence>
          {isOpen && (
            <NavM
              initial={{ x: -100, opacity: 1 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 1,
                staggerChildren: 0.5,
              }}
              exit={{ x: -100, opacity: 0 }}
            >
              <MenuItens>
                {menuOptions.map((menuOption) => {
                  return (
                    <MenuItenM
                      initial={{ x: 200, opacity: 1 }}
                      animate={{ x: 0 }}
                      transition={{
                        type: "spring",
                        bounce: 0.6,
                        duration: 1,
                      }}
                      exit={{ x: 200, opacity: 0 }}
                      key={menuOption.url}
                      whileHover={{
                        scale: 1.09,
                        transition: { duration: 0.1 },
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <NavLinkStyled active={router.pathname === menuOption.url? 1:0} href={menuOption.url}>
                        <Content>
                          <ImageWrapper>
                            <img src={menuOption.icon} alt={menuOption.title} />
                          </ImageWrapper>
                          {menuOption.title}
                        </Content>
                      </NavLinkStyled>
                    </MenuItenM>
                  );
                })}
              </MenuItens>
            </NavM>
          )}
        </AnimatePresence>
      )}
    </MenuWrapper>
  );
};

export default Menu;
