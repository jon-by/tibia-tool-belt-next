import React, { useState } from "react";
import { ToggleWrapper, ToggleSlider, TestButton } from "./toggle.styled";

import { Tooltip } from "react-tooltip";
type toggleProps = {
  isActive: boolean;
  setIsActive: (value: boolean) => void;
  tooltipId?: string;
  tooltipContent?: string;
  tipClick?:() => void
};
const Toggle = ({
  isActive,
  setIsActive,
  tooltipId,
  tooltipContent,
  tipClick
}: toggleProps) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <ToggleWrapper
        active={isActive}
        clicked={clicked}
        onMouseDown={() => setClicked(true)}
        onMouseUp={() => setClicked(false)}
        onMouseLeave={() => setClicked(false)}
        onClick={() => setIsActive(!isActive)}
        id={tooltipId}
      >
        <ToggleSlider className="toggle-slider" />
      </ToggleWrapper>
      {tooltipContent && tooltipId && (
        <Tooltip
          clickable={true}
          style={{ zIndex: 10 }}
          anchorId={tooltipId}
          place="bottom"
          
        >
         {tipClick ? <TestButton onClick={tipClick}> {tooltipContent}</TestButton>: tooltipContent}
        </Tooltip>
      )}
    </>
  );
};

export default Toggle;