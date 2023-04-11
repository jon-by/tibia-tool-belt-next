import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { TIMED_ITENS } from "@/constants/itens-timer";
import Image from "next/image";

import {
  Wrapper,
  Itens,
  Item,
  ItemInfo,
  FiltersWrapper,
  FilterList,
  FilterItem,
} from "./chooseItens.styled";
import Toggle from "../toggle/Toggle";

type chooseItensProps = {
  usingItens: string[];
  setUsingItens: (itemId: string) => void;
};
const ChooseItens = ({ usingItens, setUsingItens }: chooseItensProps) => {
  const { t } = useTranslation("itens-timer");

  const [filtered, setFiltered] = useState(TIMED_ITENS);

  const [filter, setFilter] = useState({
    ek: false,
    ed: false,
    ms: false,
    rp: false,
  });

  useEffect(() => {
    const { ek, ed, ms, rp } = filter;
    if (!ek && !ed && !ms && !rp) {
      setFiltered(TIMED_ITENS);
      return;
    }
    const filteredItens = TIMED_ITENS.filter((item) => {
      if (filter.ed && item.vocation?.includes("ed")) return true;
      if (filter.ek && item.vocation?.includes("ek")) return true;
      if (filter.rp && item.vocation?.includes("rp")) return true;
      if (filter.ms && item.vocation?.includes("ms")) return true;
    });

    setFiltered(filteredItens);
  }, [filter]);

  return (
    <Wrapper>
      <h2>{t("chooseItens")}</h2>

      <FiltersWrapper>
        <FilterList>
          <FilterItem>
            EK
            <Toggle
              setIsActive={() => setFilter({ ...filter, ek: !filter.ek })}
              isActive={filter.ek}
            />
          </FilterItem>
          <FilterItem>
            ED
            <Toggle
              setIsActive={() => setFilter({ ...filter, ed: !filter.ed })}
              isActive={filter.ed}
            />
          </FilterItem>
          <FilterItem>
            RP
            <Toggle
              setIsActive={() => setFilter({ ...filter, rp: !filter.rp })}
              isActive={filter.rp}
            />
          </FilterItem>
          <FilterItem>
            MS
            <Toggle
              setIsActive={() => setFilter({ ...filter, ms: !filter.ms })}
              isActive={filter.ms}
            />
          </FilterItem>
        </FilterList>
      </FiltersWrapper>

      <Itens>
        {filtered.map((item) => {
          return (
            <Item
              onClick={() => setUsingItens(item.id)}
              whileHover={{
                scale: 1.02,
                transition: {},
              }}
              whileTap={{ scale: 0.95 }}
              active={usingItens.includes(item.id) ? 1 : 0}
              key={item.id}
            >
              <ItemInfo>
                <Image width={32} height={32} src={item.icon} alt={item.name} />
                <span>{item.name}</span>
              </ItemInfo>
            </Item>
          );
        })}
      </Itens>
    </Wrapper>
  );
};

export default ChooseItens;
