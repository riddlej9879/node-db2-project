exports.seed = async function (knex) {
  await knex("cars").insert[
    {
      vin: "1234567890123456",
      make: "Honde",
      model: "Prius",
      mileage: 101202,
      transmission: "automatic",
      salvaged: true,
    }
  ];
};
