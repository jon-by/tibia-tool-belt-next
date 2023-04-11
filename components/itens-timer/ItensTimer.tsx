import React, { useState } from "react";
import ChooseItens from "./ChooseItens";

const ItensTimer = () => {
  const [usingItens, setUsingItens] = useState<string[]>([]);

  function handleItemClick(itemId: string) {
    const arr = [...usingItens];

    const itemIndex = arr.indexOf(itemId);

    itemIndex === -1 ? arr.push(itemId) : arr.splice(itemIndex, 1);

    setUsingItens(arr);
  }

  return <ChooseItens setUsingItens={handleItemClick} usingItens={usingItens} />;
};

export default ItensTimer;
