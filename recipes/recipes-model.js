const db = require('../data/db-config');

module.exports = {
  getRecipes,
  //getShoppingList,
  //getInstructions,
};

function getRecipes() {
  return db('recipes');
}
//should return ingredients and quantities for a given recipe
function getShoppingList(id) {
  return db('recipes as r')
    .innerJoin('ingredients as i', 'r.id', '=', 'i.id')
    .select('ingredients')
    .where({ recipe_id: id });
}
