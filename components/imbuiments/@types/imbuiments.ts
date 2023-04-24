import { IMBUIMENTS_DATA } from "@/constants/imbuiments";


export type imbuimentTitle = keyof typeof IMBUIMENTS_DATA

export type imbuimentData = {
  name: string;
  icon: string;
  itens: [
    {
      name: string;
      qtty: number;
      icon: string;
      type: string;
      amount: number;
      chance: null | number;
    }
  ];
}[];
