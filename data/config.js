const knex = require("knex");
const knexfile = require("../knexfile");

// Initiate a connection to the database,
// so we can import it into other files
module.exports = knex(knexfile);
