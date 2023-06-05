import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useTimer } from "react-timer-hook";
import { useTranslation } from "next-i18next";
import ChangeTimeInput from "./ChangeTimeInput";
import {
  Closeicon,
  ConfigIcon,
  PauseIcon,
  Playicon,
  RestartIcon,
} from "../icons/icons";
import { DEFAULT_CONFIG, TIMED_ITENS } from "@/constants/itens-timer";

import {
  handleConfigType,
  timedItemProps,
  defaultConfigType,
} from "./@types/itensTimer";

import {
  Item,
  ItemInfo,
  TimerControl,
  TimerWrapper,
  PlayPause,
  Restart,
  Config,
  ItemWrapper,
  RemoveItem,
} from "./timedIten.styled";
import Button from "../button/Button";
import TimerConfig from "./TimerConfig";

const TimedIten = ({
  id,
  restartAll,
  setRestartAll,
  pauseAll,
  setPauseAll,
  startAll,
  setStartAll,
  toggleItem,
}: timedItemProps) => {

  /**
   * Next throw error when use sound and speech withoud useState
   * Todo: check a way to avoid this error 
   */
  const [sound, setSound] = useState(() => {
    const sound = new Audio("/sounds/double-beep-tone-alert.wav");
    sound.volume = 0.6;
    return sound;
  });

  const [speech, setSpeech] = useState(() => {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 0.6;
    speech.lang = "en";
    speech.rate = 0.9;
    return speech;
  });

  const localStorageKey = `${id}-config`;
  const itens = TIMED_ITENS;
  const currentItem = itens.find((item) => item.id === id)!;

  const { duration, icon, name } = currentItem;

  const expiryTimestamp = new Date();

  expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp,
    onExpire: notifyExpire,
    autoStart: false,
  });

  const [iHours, setIhours] = useState(hours);
  const [iMinutes, setIminutes] = useState(minutes);
  const [iSeconds, setIseconds] = useState(seconds);
  const [changed, setChanged] = useState(false);
  const [startingHours, setStartingHours] = useState(hours);
  const [startingMinutes, setStartingMinutes] = useState(minutes);
  const [startingSeconds, setStartingSeconds] = useState(seconds);
  const [showConfig, setShowConfig] = useState(false);

  const [config, setConfig] = useState<defaultConfigType>(() => {
    const localConfig = localStorage.getItem(localStorageKey);

    return localConfig ? JSON.parse(localConfig) : DEFAULT_CONFIG;
  });

  const { t } = useTranslation("itens-timer");

  function playSound({ expired = false, fromTest = false }) {
    let text = expired
      ? `${name} will expire in ${config.warningTime} minutes`
      : `${name} just expired`;

    if (fromTest && config.warningTime > 0) {
      text = `${name} will expire in ${config.warningTime} minutes`;
    }

    if ("speechSynthesis" in window) {
      speech.text = text;
      window.speechSynthesis.speak(speech);
    } else {
      toast.warn(t("speechNotSuported"));
      sound.play();
    }
  }
  function willExpire() {
    if (config.useNotification) {
      notify(true);
    }

    if (config.useSound) {
      playSound({ expired: true });
    }
  }

  function notifyExpire() {
    if (config.useNotification) {
      notify();
    }

    if (config.useSound) {
      playSound({});
    }

    if (config.autoRenew) {
      toast.success(t("renewing", { name }), {
        autoClose: config.renewDelay * 1000,
      });
      setTimeout(() => {
        restart(expiryTimestamp, true);
      }, config.renewDelay * 1000);
    } else {
      restart(expiryTimestamp, false);
      setIhours(startingHours);
      setIminutes(startingMinutes);
      setIseconds(startingSeconds);
    }
  }

  function handlePlay() {
    if (changed) {
      const expiryTimestamp = new Date();

      const duration = iHours * 60 * 60 + iMinutes * 60 + iSeconds;

      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

      restart(expiryTimestamp);

      setChanged(false);
    } else {
      if (isRunning) {
        pause();
        setIhours(hours);
        setIminutes(minutes);
        setIseconds(seconds);
      } else {
        resume();
      }
    }
  }

  function handleChange(event: React.FormEvent<HTMLInputElement>) {
    const type = event.currentTarget.dataset.type;
    const value = event.currentTarget.value;

    if (type === "hours") {
      setIhours(Number(value));
    }

    if (type === "minutes") {
      setIminutes(Number(value));
    }

    if (type === "seconds") {
      setIseconds(Number(value));
    }

    setChanged(true);
  }

  function handleConfig(key: handleConfigType, value: boolean | number) {
    const action = {
      "renew-time": () =>
        setConfig({ ...config, autoRenewTime: Number(value) }),
      "warning-time": () =>
        setConfig({ ...config, warningTime: Number(value) }),
      useNotification: () => handleSetNotification(!!value),
      useSound: () => setConfig({ ...config, useSound: !!value }),
      autoRenew: () => setConfig({ ...config, autoRenew: !!value }),
      "renew-delay": () => setConfig({ ...config, renewDelay: Number(value) }),
    };
    action[key]();
  }

  function handleSetNotification(value: boolean) {
    if (config.useNotification) {
      setConfig({ ...config, useNotification: value });
      return;
    }

    const permission = Notification.permission;

    if (permission === "granted") {
      setConfig({ ...config, useNotification: true });
      return;
    }

    if (permission === "default") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          setConfig({ ...config, useNotification: true });
          return;
        }
        return;
      });
    }

    if (permission === "denied") {
      toast.warn(t("notificationDenied"), { autoClose: false });
    }
  }

  function notify(willExpire?: boolean) {
    const msg = willExpire ? t("notifyWillExpire", { seconds }) : t("expired");
    const notification = new Notification(`${name} ${msg}`, {
      icon,
      body: `${t("clickToRenew")}`,
    });

    notification.addEventListener("click", (e) => {
      restart(expiryTimestamp);
    });
  }

  function handleRestart() {
    if (changed) {
      const expiryTimestamp = new Date();

      const duration = iHours * 60 * 60 + iMinutes * 60 + iSeconds;

      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

      restart(expiryTimestamp);
      setChanged(false);
    } else {
      restart(expiryTimestamp);
    }
  }

  // effects
  useEffect(() => {
    if (!restartAll) return;

    handleRestart();

    setRestartAll(false);
  }, [restartAll]);

  useEffect(() => {
    if (!pauseAll) return;
    pause();

    setIhours(hours);
    setIminutes(minutes);
    setIseconds(seconds);

    setPauseAll(false);
  }, [pauseAll]);
  
  useEffect(() => {
    if (!startAll) return;
    if (changed) {
      const expiryTimestamp = new Date();

      const duration = iHours * 60 * 60 + iMinutes * 60 + iSeconds;

      expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + duration);

      restart(expiryTimestamp);
      setChanged(false);
    } else {
      resume();
    }

    setStartAll(false);
  }, [startAll]);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    if (isRunning && config.warningTime > 0 && minutes < config.warningTime) {
      willExpire();
    }

    if (isRunning && config.autoRenew && minutes < config.autoRenewTime) {
      toast.success(t("renewing", { name }), {
        autoClose: config.renewDelay * 1000,
      });
      setTimeout(() => {
        restart(expiryTimestamp, true);
      }, config.renewDelay * 1000);
    }
  }, [minutes]);

  const EditableCountdown = () => {
    return isRunning  ? (
      <TimerWrapper className="editable-timer">
        {hours > 0 ? `${hours}:` : ""}
        {minutes}:{seconds === 0 ? "00" : seconds}
      </TimerWrapper>
    ) : (
      <TimerWrapper className="editable-timer">
        <ChangeTimeInput
          defaultValue={iHours}
          dataType="hours"
          onChange={handleChange}
        />
        :
        <ChangeTimeInput
          defaultValue={iMinutes}
          dataType="minutes"
          onChange={handleChange}
        />
        :
        <ChangeTimeInput
          defaultValue={iSeconds}
          dataType="seconds"
          onChange={handleChange}
        />
      </TimerWrapper>
    );
  };

  return (
    <Item>
      <ItemWrapper>
        <RemoveItem onClick={() => toggleItem(id)}>          
          <Closeicon />
        </RemoveItem>
        <ItemInfo>
          <img src={icon} />
          <div>
            {name} <EditableCountdown />
          </div>
        </ItemInfo>

        <TimerControl>
          <PlayPause className="play-pause">
            <Button
              handleClick={handlePlay}
              Icon={isRunning ? PauseIcon : Playicon}
            />
          </PlayPause>
          <Restart>
            <Button Icon={RestartIcon} handleClick={handleRestart} />
          </Restart>
          <Config>
            <Button
              Icon={ConfigIcon}
              handleClick={() => setShowConfig(!showConfig)}
            />
          </Config>
        </TimerControl>
      </ItemWrapper>
      {showConfig && (
        <TimerConfig
          id={id}
          notify={notify}
          playSound={playSound}
          config={config}
          handleConfig={handleConfig} 
          setShowConfig={setShowConfig}
          name={name}
          icon={icon}
        />
      )}
    </Item>
  );
};

export default TimedIten;
