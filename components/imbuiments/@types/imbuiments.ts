
export type type = "basic" | "intricate" | "powerful";

export type iten = {
  name: string;
  qtty: number;
  icon: string;
  type: type;
  amount: number;
  chance: null | number;
};

export type imbuimentData = {
  name: string;
  icon: string;
  category: "support" | "elemental protection";
  itens: iten[];
};
