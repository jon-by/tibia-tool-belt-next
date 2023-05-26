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

async function getDeathsByServer(server: string, limit?:number): Promise<Death[]> {
  const deaths: Death[] = [];

  const agregation: {}[] = []

  server !== "all" && agregation.push({$match:{server}})
  limit && agregation.push({$limit:limit})
  agregation.push({ $sort : { timestamp : -1 } })

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

export default {
  getDeathsByServer,
};
