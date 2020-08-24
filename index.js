const express = require("express");
const carsRouter = require("./routers/car-router");

const server = express();
const port = 5000;

server.use(express.json());
server.use(carsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong",
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
