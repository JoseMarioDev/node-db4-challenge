exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    { ingredient_name: 'flour' },
    { ingredient_name: 'butter' },
    { ingredient_name: 'milk' },
    { ingredient_name: 'eggs' },
    { ingredient_name: 'syrup' },
  ]);
};
