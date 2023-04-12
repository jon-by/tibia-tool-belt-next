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
  ClearButtonWrapper,
} from "./chooseItens.styled";
import Toggle from "../toggle/Toggle";
import Button from "../button/Button";

type chooseItensProps = {
  usingItens: string[];
  addItem: (itemId: string) => void;
  setUsingItens: ([]) => void;
};
const ChooseItens = ({ usingItens, addItem, setUsingItens }: chooseItensProps) => {
  const { t } = useTranslation("itens-timer");

  const [filtered, setFiltered] = useState(TIMED_ITENS);

  const [filter, setFilter] = useState({
    ek: false,
    ed: false,
    ms: false,
    rp: false,
  });

  function handleClear() {
    setFilter({ ...filter, ek: false, ed: false, ms: false, rp: false });
    setFiltered(TIMED_ITENS);
    setUsingItens([])
  }

  useEffect(() => {
    const { ek, ed, ms, rp } = filter;
    if (!ek && !ed && !ms && !rp) {
      setFiltered(TIMED_ITENS);
      return;
    }
    const filteredItens = TIMED_ITENS.filter((item) => {
      if (ed && item.vocation?.includes("ed")) return true;
      if (ek && item.vocation?.includes("ek")) return true;
      if (rp && item.vocation?.includes("rp")) return true;
      if (ms && item.vocation?.includes("ms")) return true;
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
        <ClearButtonWrapper>
          <Button content={`${t("clear")}`} handleClick={handleClear} />
        </ClearButtonWrapper>
      </FiltersWrapper>

      <Itens>
        {filtered.map((item) => {
          return (
            <Item
              onClick={() => addItem(item.id)}
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
