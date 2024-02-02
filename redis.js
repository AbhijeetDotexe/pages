const redis = require("redis");

const redisclient = redis.createClient();

async function connection() {
  await redisclient.connect();
}

// connection().then(() => {
//   console.log("Connected to the redis database");
// });

redisclient.on("ready", () => {
  console.log("Conected");
});

redisclient.on("error", () => {
  console.log("Error connecting to the redis database");
});

module.exports = connection;
