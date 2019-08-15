exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .string('recipe_name', 255)
        .notNullable()
        .unique();
      tbl.string('address', 4000);
    })
    .createTable('species', tbl => {
      tbl.increments();

      tbl
        .string('species_name', 255)
        .notNullable()
        .unique();
    })
    .createTable('animals', tbl => {
      tbl.increments();

      tbl.string('animal_name', 255).notNullable();

      // a FK!!!!
      tbl
        .integer('species_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('species')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?

      // CASCADE, RESTRICT, NO ACTION, SET DEFAULT
    })
    .createTable('zoo_animals', tbl => {
      tbl.increments();

      tbl
        .integer('zoo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('zoos')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
      tbl
        .integer('animal_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('animals')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE'); // if the PK on primary table changes, what to do?
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('zoo_animals')
    .dropTableIfExists('animals')
    .dropTableIfExists('species')
    .dropTableIfExists('zoos');
};
