const BASE_URL = "https://api.tibiadata.com";
import {
  getWorldResponse,
  worldType,
  onlinePlayerType,
  worldsType,
} from "./@types/_tracker-type";

export async function getWorldByName(name: string): Promise<worldType> {
  const rawWorld = await fetch(`${BASE_URL}/v3/world/${name}`);
  const world = (await rawWorld.json()) as getWorldResponse;
  return world.worlds;
}

export async function getOnlinePlayersByWorld(
  world: string
): Promise<onlinePlayerType[]> {
  const rawOnlinePlayers = await getWorldByName(world);
  return rawOnlinePlayers.world.online_players;
}

export async function getWorlds(): Promise<string[]> {
  const rawWorlds = await fetch(`${BASE_URL}/v3/worlds`);
  const worlds = (await rawWorlds.json()) as worldsType;

  const regularWorlds = worlds.worlds.regular_worlds.map((world) => world.name);

  return regularWorlds;
}

export async function getPlayerDeaths(wasOnline: string[]) {
  return new Promise(async (resolve, reject) => {
    try {
      const MAX_CONCURRENT_REQUESTS = 50;
      const urls = wasOnline.map(
        (player) => `${BASE_URL}/v3/character/${player}`
      );
      const batches = [];

      for (let i = 0; i < urls.length; i += MAX_CONCURRENT_REQUESTS) {
        const batch = urls.slice(i, i + MAX_CONCURRENT_REQUESTS);
        batches.push(batch);
      }

      const results = [];

      for (let i = 0; i < batches.length; i++) {
        const batch = batches[i];
        const promises = batch.map((url) => fetch(url));
        const batchResults = await Promise.all(promises);
        results.push(...batchResults);
      }

      const parsedResult = [];

      for (let i = 0; i < results.length; i++) {
        const playerInfo = results[i];
        const jsonResult = await parseJson(`index-${i}`, playerInfo);

        if (jsonResult?.characters?.deaths?.length > 0) {
          const name = jsonResult.characters.character.name;
          const time = jsonResult.characters.deaths[0].time;
          const reason = jsonResult.characters.deaths[0].reason;
          const server = jsonResult.characters.character.world;
          parsedResult.push({ name, time, reason, server });
        }
      }
      resolve(parsedResult);
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
}

async function parseJson(st: string, promise: any) {
  try {
    const parsed = await promise.json();
    return parsed;
  } catch (error) {
    console.log(st, error);
    return false;
  }
}
