export type type = "basic" | "intricate" | "powerful";

enum category {
  support = "support",
  "elemental protection" = "elemental protection",
  skill = "skill",
  "elemental damage" = "elemental damage",
}

type vocation = "EK" | "ED" | "MS" | "RP";
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
  vocations: vocation[];
  itens: iten[];
};

export type imbuimentType = {
  [key in category]: imbuimentData[];
};
