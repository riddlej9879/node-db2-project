const express = require("express");
const knex = require("knex");
const db = require("../data/config");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json({
      message: "Car-dealer",
    });
  } catch (err) {
    next(err);
  }
});

router.get("/cars", async (req, res, next) => {
  try {
    res.status(200).json(await db("car-dealer"));
  } catch (err) {
    next(err);
  }
});

router.get("/cars/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const car = await db("car-dealer").where({ id }).first();

    res.status(200).json(car);
  } catch (err) {
    next(err);
  }
});

router.post("/cars", async (req, res, next) => {
  try {
    const [id] = await db("car-dealer").insert(req.body);
    const newCar = await db("car-dealer").where({ id }).first();

    res.status(201).json(newCar);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

//    Failed attempts
// router.post("/cars", (req, res) => {
//   db("cars")
//     .insert({
//       vin: req.body.vin,
//       make: req.body.make,
//       model: req.body.model,
//       mileage: req.body.mileage,
//       transmission: req.body.transmission || null,
//       salvaged: req.body.salvaged || null,
//     })
//     .then((id) => {
//       res.status(201).json(id);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "Failed to create car" });
//     });
// });

// router.post("/:id", async (req, res) => {
//   try {
//     const newCar = await db("cars").insert(req.body);
//     res.status(201).json(newCar);
//   } catch (error) {
//     res.status(500).json({ message: "Missing data for post." });
//   }
// });

// router.post("/cars", (req, res, next) => {
//   const newCar = {
//     vin: req.body.vin,
//     make: req.body.make,
//     model: req.body.model,
//     mileage: req.body.mileage,
//     transmission: req.body.transmission || null,
//     salvaged: req.body.salvaged || null,
//   };

//   db.insert(newCar)
//     .then(() => {
//       return res.status(201).json(newCar);
//     })
//     .catch((err) => {
//       return res
//         .status(500)
//         .json({ message: "Error creating new car", newCar });
//     });
// });
