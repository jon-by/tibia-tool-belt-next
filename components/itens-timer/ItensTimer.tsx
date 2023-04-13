import { USING_ITENS_LOCAL_KEY } from "@/constants/global";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import ChooseItens from "./ChooseItens";
import RunTimer from "./RunTimer";

const atLeastOneId = "choose-at-least-one";

const ItensTimer = () => {
  const [usingItens, setUsingItens] = useState<string[]>([]);
  const [showChooseItens, setShowChooseItens] = useState(false);
  const initialRender = useRef(true);

  const { t } = useTranslation("itens-timer");

  function addItem(itemId: string) {
    const arr = [...usingItens];
    const itemIndex = arr.indexOf(itemId);
    itemIndex === -1 ? arr.push(itemId) : arr.splice(itemIndex, 1);
    setUsingItens(arr);
  }

  function handleChooseItens() {
    if (usingItens.length > 0) {
      setShowChooseItens(false);
    } else {
      if (toast.isActive(atLeastOneId)) return;
      toast.warn(`${t("chooseAtLeastOne")}`, { toastId: atLeastOneId });
    }
  }

  useEffect(() => {
    if (initialRender.current) {
      const localItens = localStorage.getItem(USING_ITENS_LOCAL_KEY);

      if (localItens && Array.isArray(JSON.parse(localItens))) {
        setUsingItens(JSON.parse(localItens));
      }

      initialRender.current = false;
    } else {
      localStorage.setItem(USING_ITENS_LOCAL_KEY, JSON.stringify(usingItens));
    }
  }, [usingItens]);

  
  return usingItens.length > 0 && !showChooseItens ? (
    <RunTimer setShowChooseItens={setShowChooseItens} usingItens={usingItens} />
  ) : (
    <ChooseItens
      addItem={addItem}
      setUsingItens={setUsingItens}
      usingItens={usingItens}
      setShowChooseItens={handleChooseItens}
    />
  );
};

export default ItensTimer;
