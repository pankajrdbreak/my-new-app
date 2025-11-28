const express = require("express");
const os = require("os");

const app = express();
const port = process.env.PORT || 9000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Node.js App 🚀",
    hostname: os.hostname(),
    platform: os.platform(),
    uptime: os.uptime()
  });
});

app.listen(port, () => {
  console.log(`HTTPS/HTTP Server started on port ${port}`);
});
