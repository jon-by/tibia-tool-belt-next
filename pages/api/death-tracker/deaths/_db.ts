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
  count?: number
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
    const topDeaths: Death[] = [];

    const agregation: {}[] = [];

    let $match: any = { level: { $gt: 100 } };

    server !== "all" && ($match = { ...$match, server });

    agregation.push({ $match });

    // get players who die the most
    const results = await deathsCol.aggregate(
      agregation.concat([
        { $group: { _id: '$name', data: { $push: '$$ROOT' }, total: { $sum: 1 } } },
        { $project: { _id: 0, data: 1, total: 1 } },
      ])
    );

    for await (const result of results) {
      topDeaths.push({ ...result.data[0], count: result.total });
    }

    return topDeaths.sort((a, b) => {
      if (a.count !== b.count) {
        return b.count! - a.count!;
      } else {
        return b.level - a.level;
      }
    }).splice(0, 53); // 53 = top 3 + 50 results
  } catch (error) {
    console.log(error);
    return [];
  }
}

export default {
  getDeathsByServer,
  getTopDeaths,
};
