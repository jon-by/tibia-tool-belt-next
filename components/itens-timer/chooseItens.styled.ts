import { COLORS } from "@/constants/global";
import { motion } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const Itens = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  flex-wrap: wrap;
  gap: 8px;
`;

type itemProps = {
  active: number;
};
export const Item = styled(motion.li)<itemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border: 1px solid ${COLORS.white};
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  ${({ active }) =>
    active &&
    `
  border-color:${COLORS.active};
  background-color:${COLORS["item-active"]};
  color:${COLORS["dark-blue"]};  
  `}
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  width: 150px;
  height: 100px;
  text-align: center;
`;

export const FiltersWrapper = styled.div``;

export const FilterList = styled.ul`
display: flex;
gap: 8px;
`

export const FilterItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2px;
`
export const ActionsWrapper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: flex-end;
margin-top: 1px;
margin-top: 8px;

`