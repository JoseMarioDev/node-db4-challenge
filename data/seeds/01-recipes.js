exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {
      recipe_name: 'pancakes',
      instructions: 'mix ingredients, cook on grill medium heat',
    },
    {
      recipe_name: 'waffles',
      instructions: 'mix ingredients, cook in waffle maker, enjoy',
    },
  ]);
};
