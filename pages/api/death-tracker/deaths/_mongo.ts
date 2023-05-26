import { MongoClient } from "mongodb"


const username = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_PASSWORD;
const url = process.env.MONGO_HOST;
const databaseName = process.env.MONGO_USER_NAME; // same as username

const connectionString = `mongodb://${username}:${password}@${url}/${databaseName}`;

const client = new MongoClient(connectionString);



export default client