export type death = {
  killer: string;
  level: number;
  name: string;
  time: string;
};

export type onlinePlayerType = {
  name: string;
  level: number;
  vocation: string;
};

export type worldType = {
  world: {
    name: string;
    status: string;
    players_online: number;
    record_players: number;
    record_date: string;
    creation_date: string;
    location: string;
    pvp_type: string;
    premium_only: false;
    transfer_type: string;
    world_quest_titles: string[];
    battleye_protected: boolean;
    battleye_date: string;
    game_world_type: string;
    tournament_world_type: string;
    online_players: onlinePlayerType[];
  };
};

export type getWorldResponse = {
  worlds: worldType;
  information: {
    api_version: number;
    timestamp: string;
  };
};

export type worldsType = {
  worlds: {
    players_online: number;
    record_players: number;
    record_date: string;
    regular_worlds: {
      name: string;
      status: string;
      players_online: number;
      location: string;
      pvp_type: string;
      premium_only: boolean;
      transfer_type: string;
      battleye_protected: true;
      battleye_date: string;
      game_world_type: string;
      tournament_world_type: string;
    }[];
    tournament_worlds: boolean;
  };
  information: {
    api_version: number;
    timestamp: string;
  };
};

export type errorType = {
  error:boolean,
  errorMessage?:string
}