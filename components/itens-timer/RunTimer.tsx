import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import Button from "../button/Button";

import { ArrowLeft, PauseIcon, Playicon, RestartIcon } from "../icons/icons";
import { Wrapper, ItensContainer, TimerActions } from "./runTimer.styled";
import TimedIten from "./TimedIten";

type runTimerProps = {
  setShowRunTimer?: (value: boolean) => void;
  usingItens: string[];
  setShowChooseItens: (show: boolean) => void;
};

const RunTimer = ({
  setShowRunTimer,
  usingItens,
  setShowChooseItens,
}: runTimerProps) => {
  const { t } = useTranslation("itens-timer");

  const [startAll, setStartAll] = useState(false);
  const [pauseAll, setPauseAll] = useState(false);
  const [restartAll, setRestartAll] = useState(false);

  return (
    <Wrapper>
      <TimerActions>
        <Button
          handleClick={() => setShowChooseItens(true)}
          Icon={ArrowLeft}
          content={`${t("chooseItens")}`}
        />
      </TimerActions>
      <ItensContainer>
        {usingItens.map((id) => {
          return (
            <TimedIten
              {...{
                startAll,
                setStartAll,
                pauseAll,
                setPauseAll,
                restartAll,
                setRestartAll,
              }}
              key={id}
              id={id}
            />
          );
        })}
      </ItensContainer>
      <TimerActions>
        <Button
          content={`${t("startAll")}`}
          handleClick={() => setStartAll(true)}
          Icon={Playicon}
        />
        <Button
          content={`${t("pauseAll")}`}
          handleClick={() => setPauseAll(true)}
          Icon={PauseIcon}
        />
        <Button
          content={`${t("restartAll")}`}
          handleClick={() => setRestartAll(true)}
          Icon={RestartIcon}
        />
      </TimerActions>
    </Wrapper>
  );
};

export default RunTimer;
