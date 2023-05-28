import client from "./_mongo";
const database = client.db("tibiatoolbelt01");
const deathsCol = database.collection("deaths");

export type Death = {
  _id: string;
  name: string;
  level: number;
  time: string;
  reason: string;
  server: string;
  timestamp: number;
};

async function getDeathsByServer(
  server: string,
  limit?: number
): Promise<Death[]> {
  const deaths: Death[] = [];

  const agregation: {}[] = [];

  server !== "all" && agregation.push({ $match: { server } });
  agregation.push({ $sort: { timestamp: -1 } });
  limit && agregation.push({ $limit: limit });

  try {
    const results = await deathsCol.aggregate(agregation);

    for await (const result of results) {
      deaths.push({
        name: result.name,
        level: result.level,
        reason: result.reason,
        server: result.server,
        time: result.time,
        timestamp: result.timestamp,
        _id: result._id.toString(),
      });
    }

    return deaths;
  } catch (error) {
    console.log(error);
    return [];
  }
}

async function getTopDeaths(server: string) {
  try {
    const topDeaths: {}[] = [];

    const agregation: {}[] = [];

    let $match: any = { level: { $gt: 100 } };

    server !== "all" && ($match = { ...$match, server });

    agregation.push({ $match });

    // get players who die the most
    const results = await deathsCol.aggregate(
      agregation.concat([
        { $group: { _id: "$name", count: { $sum: 1 } } },
        { $sort: { count: -1 } },
        { $limit: 3 },
      ])
    );

    for await (const result of results) {
      topDeaths.push({ name: result._id, count: result.count });
    }

    return topDeaths;
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default {
  getDeathsByServer,
  getTopDeaths,
};
