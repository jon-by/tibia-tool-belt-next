import React, { ReactNode } from "react";
import { Wrapper } from "./AnimatedComponent.styled";

type animatedComponentProps = {
  children: ReactNode;
};
const AnimatedComponent = ({ children }: animatedComponentProps) => {
  return (
    <Wrapper
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default AnimatedComponent;
