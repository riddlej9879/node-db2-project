// Seed file for test data in the database

exports.seed = async function (knex) {
  await knex("fruits").insert([
    {
      vin: "12345678901234567",
      make: "honda",
      model: "accord",
      mileage: "101202",
      transmission: "automatic",
      salvage: false,
    },
    {
      vin: "abcde123450123456",
      make: "pontiac",
      model: "grand am",
      mileage: "1001",
      transmission: "automatic",
    },
  ]);
};
