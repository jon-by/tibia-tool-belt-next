import { COLORS } from "../../constants/global";
import { motion } from "framer-motion";
import styled from "styled-components";

export const MenuMobileContainer = styled.div``;

export const Burguer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  div {
    display: block;
    width: 34px;
    height: 2.5px;
    border-radius: 20px;
    background-color: ${COLORS.active};
  }
`;

export const MenuMobileBackDrop = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(31, 32, 41,.94);
  z-index: 20;
`;

export const MenuMobileHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  .close-button {
    transform: rotate(45deg);
    &::after {
      content: "+";
      color: ${COLORS.active};
      font-size: 45px;
    }
  }
`;

export const MenuMobileContent = styled.nav``;

export const MenuMobileItems = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    gap: 2rem;
  }
  li {
    border: 1px solid white;
    width: 310px;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    position: relative;
    list-style: none;

    &.active {
      border-color: ${COLORS.active};

      h4 {
        color: ${COLORS.active};
    }
    
    }
  }
  a {
    color: white;
    .content {
      display: flex;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
    }

    h4 {
      position: absolute;
      top: 0;
      left: 5%;
      transform: translateY(-50%);
      background-color: rgba(31, 32, 41);
      padding: 0 .5rem;
    }
  }
`;
