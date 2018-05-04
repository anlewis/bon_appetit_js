// ES6

export default class Panty {
  constructor() {
    this.stock = {}
    this.shoppingList = {}
  }

  stockCheck(ingredientName) {
    return this.stock[ingredientName] || 0
  }

  restock(ingredientName, amount) {
    this.stock[ingredientName] = amount + this.stockCheck(ingredientName)
  }

  addToShoppingList(recipe) {
    let recipeIngredients = Object.keys(recipe.ingredients)
    recipeIngredients.forEach((ingredientName) => {
      this.shoppingList[ingredientName] = recipe.ingredients[ingredientName] + (this.shoppingList[ingredientName] || 0)
    })
    return this.shoppingList
  }
}