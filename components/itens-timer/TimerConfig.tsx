import React from "react";
import { useTranslation } from "next-i18next";
import { toast } from "react-toastify";
import { defaultConfigType, handleConfigType } from "./@types/itensTimer";

import Toggle from "../toggle/Toggle";

import {
  Actions,
  ActionIten,
  RememberTimes,
  RememberTimesItem,
  Wrapper
} from "./timerConfig.styled";

type timerConfigProps = {
  config: defaultConfigType;
  handleConfig: (key: handleConfigType, value: boolean | number) => void;
  notify: (key?: boolean) => void;
  id: string;
  playSound: ({}: { expired?: boolean; fromTest?: boolean }) => void;
};

const TimerConfig = ({
  handleConfig,
  config,
  notify,
  id,
  playSound,
}: timerConfigProps) => {
  const { t } = useTranslation("itens-timer");

  function testNotification() {
    const permission = Notification.permission;

    if (permission === "granted") {
      notify();
      return;
    }

    if (permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          notify();
        }
        return;
      });
    }

    if (permission === "denied") {
      toast.warn(t("notificationDenied"), { autoClose: false });
    }
  }

  return (
    <Wrapper>
      <Actions>
        <ActionIten>
          <span>{t("notification")}</span>
          <Toggle
            isActive={config.useNotification}
            setIsActive={() =>
              handleConfig("useNotification", !config.useNotification)
            }
            tooltipId={`${id}-1`}
            tipClick={() => testNotification()}
            tooltipContent={`${t("test")}`}
          />
        </ActionIten>
        <ActionIten>
          <span>Audio</span>
          <Toggle
            isActive={config.useSound}
            setIsActive={() => handleConfig("useSound", !config.useSound)}
            tooltipId={`${id}-2`}
            tipClick={() => playSound({ fromTest: true })}
            tooltipContent={`${t("test")}`}
          />
        </ActionIten>
        <ActionIten>
          <span>{t("autoRenew")}</span>
          <Toggle
            isActive={config.autoRenew}
            setIsActive={() => handleConfig("autoRenew", !config.autoRenew)}
            tooltipId={`${id}-3`}
            tooltipContent={`${t("autoRenewToolTip")} ${
              config.renewDelay > 0
                ? t("autoRenewAfter", { seconds: config.renewDelay })
                : ``
            }`}
          />
        </ActionIten>
      </Actions>
      <RememberTimes>
        <RememberTimesItem>
          <span>{t("alert")}</span>
          <div className="warning-time">
            <input
              type="number"
              min={0}
              max={5}
              defaultValue={config.warningTime}
              onChange={(event) =>
                handleConfig("warning-time", Number(event.currentTarget.value))
              }
            />
            {t("minBeforeEnd")}
          </div>
        </RememberTimesItem>

        <RememberTimesItem>
          <span>{t("autoRenew")}</span>
          <div className="renew-time">
            <input
              type="number"
              min={0}
              max={5}
              defaultValue={config.autoRenewTime}
              onChange={(event) =>
                handleConfig("renew-time", Number(event.currentTarget.value))
              }
            />
            {t("minBeforeEnd")}
          </div>
        </RememberTimesItem>
        <RememberTimesItem>
          <div className="renew-time">
            {t("autoRenewWith")}
            <input
              type="number"
              min={0}
              max={60}
              defaultValue={config.renewDelay}
              onChange={(event) =>
                handleConfig("renew-delay", Number(event.currentTarget.value))
              }
            />
            {t("secondsOfDelay")}
          </div>
        </RememberTimesItem>
      </RememberTimes>
    </Wrapper>
  );
};

export default TimerConfig;
