import React from "react";
import { ButtonStyled } from "./button.styled";

type ButtonProps = {
  content?: string;
  handleClick: () => void;
  Icon?: React.FC;
  iconPosition?: "left" | "right";
  padding?: string | number;
};

const Button = ({
  content,
  handleClick,
  Icon,
  iconPosition = "left",
  padding = 0,
}: ButtonProps) => {
  return (
    <ButtonStyled
      padding={padding}
      onClick={handleClick}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && iconPosition === "left" ? <Icon /> : ""} {content}{" "}
      {Icon && iconPosition === "right" ? <Icon /> : ""}
    </ButtonStyled>
  );
};

export default Button;
