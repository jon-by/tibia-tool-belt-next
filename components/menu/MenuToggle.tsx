import React from "react";
import { Label, Input } from "./menuTogglestyled";

type menuToggleProps = {
  isOpen: boolean;
  handleChange: () => void;
};
const MenuToggle = ({ isOpen, handleChange }: menuToggleProps) => {
  return (
    <Label htmlFor="check">
      <Input
        checked={isOpen}
        onChange={handleChange}
        type="checkbox"
        id="check"
      />
      <span></span>
      <span></span>
      <span></span>
    </Label>
  );
};

export default MenuToggle;
