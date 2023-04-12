import { USING_ITENS_LOCAL_KEY } from "@/constants/global";
import React, { useEffect, useRef, useState } from "react";
import ChooseItens from "./ChooseItens";

const ItensTimer = () => {
  const [usingItens, setUsingItens] = useState<string[]>([]);
  const initialRender = useRef(true);

  function addItem(itemId: string) {
    const arr = [...usingItens];

    const itemIndex = arr.indexOf(itemId);

    itemIndex === -1 ? arr.push(itemId) : arr.splice(itemIndex, 1);

    setUsingItens(arr);
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

  return (
    <ChooseItens addItem={addItem} setUsingItens={setUsingItens} usingItens={usingItens} />
  );
};

export default ItensTimer;
