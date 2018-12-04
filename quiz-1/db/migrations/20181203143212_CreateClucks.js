
exports.up = function(knex, Promise) {
    return knex.schema.createTable("clucks", table => {
        // CREATE TABLE "clucks"
        table.increments("id");
        table.string("name");
        table.string("image_url"); 
        table.text("content"); 
        table.timestamp("createdAt").defaultTo(knex.fn.now());
        table.timestamp("updatedAt").defaultTo(knex.fn.now());
        // "createdAt" TIMESTAMPZ DEFAULT NOW()
      });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("clucks");
};
