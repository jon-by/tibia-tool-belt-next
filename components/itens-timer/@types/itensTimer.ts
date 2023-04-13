export type handleConfigType =
  | "useNotification"
  | "useSound"
  | "autoRenew"
  | "warning-time"
  | "renew-time"
  | "renew-delay";

export type timedItemProps = {
  id: string;
  startAll: boolean;
  pauseAll: boolean;
  restartAll: boolean;
  setStartAll: (value: boolean) => void;
  setPauseAll: (value: boolean) => void;
  setRestartAll: (value: boolean) => void;
};

export type defaultConfigType = {
  useNotification: boolean;
  useSound: boolean;
  autoRenew: boolean;
  warningTime: number;
  autoRenewTime: number;
  renewDelay: number;
};
