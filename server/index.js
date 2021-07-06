const server = require("./server");
const config = require('./config');
const logging = require("./logging");

const NAMESPACE = "Server";

if (!process.env.NODE_ENV || process.env.NODE_ENV == "development") {
    const envConfig = require("dotenv").config()
  if (envConfig.error) throw envConfig.error
};

// const PORT = process.env.PORT || 3000

server.listen(config.server.port, () => {
  logging.info(NAMESPACE, `Sever running on ${config.server.hostname} : ${config.server.port}`)
  // console.log("Listening on port", PORT)
});
