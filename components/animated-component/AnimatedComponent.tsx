import React, { ReactNode } from "react";
import { Wrapper } from "./AnimatedComponent.styled";

type animatedComponentProps = {
  children: ReactNode;
};
const AnimatedComponent = ({ children }: animatedComponentProps) => {
  return (
    <Wrapper
      initial={{ x: -50, opacity: 1 }}
      animate={{ x: 0 }}
      transition={{
        type: "spring",
        bounce: 0.2,
        duration: .3,        
      }}
      exit={{ x: -50, opacity: 0 }}
    >
      {children}
    </Wrapper>
  );
};

export default AnimatedComponent;
