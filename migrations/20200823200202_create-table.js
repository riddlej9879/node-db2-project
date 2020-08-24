exports.up = async function (knex) {
  await knex.schema.createTable("fruits", (table) => {
    // tanslates to '"id" INTERGER NOT NULL UNIQUE PRIMARY KEY'
    // tamle.integer("id").notNull().unique().primary()
    table.increments("id");
    table.text("vin", 17).notNull().unique();
    table.text("make").notNull();
    table.text("model").notNull();
    table.integer("mileage").notNull();
    table.text("transmission");
    table.boolean("salvaged").defaultTo(false);
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("cars");
};
