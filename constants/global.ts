
import lootSpliterIcon from "../public/images/loot-spliter/Crystal_Coin-icon.gif"
import itensTimerIcon from "../public/images/itens-timer/Watch-icon.gif"
import partyFinderIcon from "../public/images/party-finder/Telescope-icon.gif"
import imbuimentsIcon from  "../public/images/imbuiments/imbuiment-icon.gif"
import deathTrackerIcon from "../public/images/death-tracker/Skull_Candle.gif"

export const COLORS = {
  "dark-blue": "#051122",
  white: "#EAEEFF",
  "button-bg": "#4B4C56",
  "button-hover": "#ddd",
  positive: "#17c964",
  negative: "#ff4a4a",
  amount: "#bfbcbc",
  "timer-item-bg": "#131732",
  active: "rgb(255 210 132);",
  "body-bg": "#1f2029",
  "item-active": "#f0f0f0",
};

export const LANGUAGES = [
  { code: "en", title: "English" },
  { code: "pt-BR", title: "Português" },
];

export const USING_ITENS_LOCAL_KEY = "using-itens-local";

export const PREFERRED_SERVER_LOCAL = "preferred-server"

export const MENU_OPTIONS = [  
  {
    title: "Loot Spliter",
    icon: lootSpliterIcon,
    url: "/loot-spliter",
    description: "loot-spliter",
  },
  {
    title: "Itens Timer",
    icon: itensTimerIcon,
    url: "/itens-timer",
    description: "itens-timer-description",
  },
  {
    title: "Party Finder",
    icon: partyFinderIcon,
    url: "/party-finder",
    description: "party-finder",
  },
  {
    title: "Imbuiments",
    icon: imbuimentsIcon,
    url: "/imbuiments",
    description: "imbuiments",
  },
  {
    title: "Death Tracker",
    icon: deathTrackerIcon,
    url: "/death-tracker",
    description: "death-tracker-description",
  },
];
