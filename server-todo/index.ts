const { LoginAttemptFromClientSide } = require("./app/interfaces.ts");
const redis = require("redis");
const origins = {
  transports: ["websocket", "polling"],
  cors: true,
  origins: "localhost:*",
};
const io = require("socket.io")(10005, origins);
const redisClient = redis.createClient({
  socket: {
    host: "192.168.31.109",
    port: 6379,
  },
});
redisClient.connect();

io.on("connection", (socket: any) => {
  console.log("aa");
  socket.on("loginAttempt", (data: typeof LoginAttemptFromClientSide) => {
    console.log("aeqweqwa");
  });
});
