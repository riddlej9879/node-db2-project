const express = require("express");
const carsRouter = require("./routers/car-router");
const welcomeRouter = require("./routers/welcome-router");

const server = express();
const port = 5000;

server.use(express.json());
server.use("/cars", carsRouter);
server.use("/welcome", welcomeRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
