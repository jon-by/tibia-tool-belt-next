import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import {
  MenuMobileContainer,
  Burguer,
  MenuMobileBackDrop,
  MenuMobileContent,
  MenuMobileHeader,
  MenuMobileItems,
} from "./menuMobile.styled";
import LangSwitcher from "../language-swithcer/LangSwitcher";
import { MENU_OPTIONS } from "../../constants/global";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";

type MenuMobileProps = {
  path: string;
};
const MenuMobile = ({ path }: MenuMobileProps) => {
  const { t } = useTranslation("tags");
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenClick() {
    setIsOpen(true);
  }

  function handleCloseClick(event: React.MouseEvent<HTMLElement>) {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  }

  return (
    <MenuMobileContainer>
      <Burguer onClick={handleOpenClick}>
        <div></div>
        <div></div>
        <div></div>
      </Burguer>

      <AnimatePresence>
        {isOpen && (
          <MenuMobileBackDrop
            initial={{ y: 100, opacity: 1 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              bounce: .5,
              duration: 0.5,
              staggerChildren: 0.5,
            }}
            exit={{ y: 100, opacity: 0 }}
            onClick={handleCloseClick}
          >
            <MenuMobileContent>
              <MenuMobileHeader>
                <LangSwitcher />
                <div onClick={handleCloseClick} className="close-button"></div>
              </MenuMobileHeader>

              <MenuMobileItems>
                <ul>
                  {MENU_OPTIONS.map((option) => {
                    return (
                      <li
                        className={path === option.url ? "active" : ""}
                        key={option.url}
                      >
                        <a href={option.url}>
                          <h4>{option.title}</h4>
                          <div className="content">
                            <Image
                              src={option.icon.src}
                              alt={option.title}
                              width={option.icon.width}
                              height={option.icon.height}
                            />
                            <p>{t(option.description)}</p>
                          </div>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </MenuMobileItems>
            </MenuMobileContent>
          </MenuMobileBackDrop>
        )}
      </AnimatePresence>
    </MenuMobileContainer>
  );
};

export default MenuMobile;
