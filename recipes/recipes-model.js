const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  //getInstructions,
};

function getRecipes() {
  return db('recipes');
}
//should return ingredients and quantities for a given recipe
function getShoppingList(id) {
  console.log(id);
  return db('recipes as r')
    .innerJoin('recipes_ingredients as ri', 'r.id', '=', 'ri.recipe_id') //<--FK on this tble , PK on recipe tble
    .innerJoin('ingredients as i', 'i.id', '=', 'ri.ingredient_id')
    .select('r.recipe_name', 'i.ingredient_name', 'ri.quantity')
    .where({ 'r.id': id });
}
