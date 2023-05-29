export type Death = {
    _id: string;
    name: string;
    level: number;
    time: string;
    reason: string;
    server: string;
    timestamp: number;
    count?: number
  };

  export type Top = { name: string; count: number }