exports.up = function (knex) {
  return knex.schema
    .createTable("Ingredients", tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().notNullable();
        tbl.integer('ingredient_id').unsigned().notNullable();
    })
    .createTable("Recipes", tbl => {
        tbl.increments();

        tbl.integer('recipe_id').unsigned().notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Recipes')
    .dropTableIfExists('Ingredients')
};
