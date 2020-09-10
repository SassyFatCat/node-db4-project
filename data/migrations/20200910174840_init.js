exports.up = function (knex) {
  return knex.schema
    .createTable("Ingredients", tbl => {
        tbl.increments();
    })
    .createTable("Recipes", tbl => {
        tbl.increments();

        tbl.integer('ingredient_id').unsigned().notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Recipes')
    .dropTableIfExists('Ingredients')
};
