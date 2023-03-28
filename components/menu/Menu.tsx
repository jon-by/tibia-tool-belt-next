import React, { useState } from "react";
import { MenuWrapper, MenuContent } from "./menu.styled";
import MenuToggle from "./MenuToggle";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  function handleChange() {
    setIsOpen(!isOpen);
  }

  return (
    <MenuWrapper>
      <MenuToggle isOpen={isOpen} handleChange={handleChange} />
      {isOpen && <MenuContent>content</MenuContent>}
    </MenuWrapper>
  );
};

export default Menu;
