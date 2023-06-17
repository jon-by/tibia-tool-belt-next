import React, {useContext, useEffect} from "react";

import { useRouter } from "next/router";

import { MenuContainer, MenuItem, MenuItens } from "./menu.styled";

import { MENU_OPTIONS } from "../../constants/global";
import Image from "next/image";
import { useMobile } from "@/context/ResponsiveCotext";

const Menu = () => {
  const router = useRouter();
  const isMobile = useMobile()



  return isMobile? <>mobile</> :(
    <MenuContainer>
      <MenuItens>
        {MENU_OPTIONS.map((option) => {
          console.log(router.pathname === option.url ? 1 : 0)
          const { width, height, src } = option.icon;          
          return (
            <MenuItem key={option.url} selected={router.pathname === option.url ? 1 : 0}>
              <a href={option.url}>
                <Image {...{ width, height, src, alt: option.title }} />
                {option.title}
              </a>
            </MenuItem>
          );
        })}
      </MenuItens>
    </MenuContainer>
  );
};

export default Menu;
