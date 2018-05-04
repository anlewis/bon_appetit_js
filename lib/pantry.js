// ES6

export default class Panty {
  constructor() {
    this.stock = {}
  }

  addIngredient(ingredientName, amount) {
    return this.ingredients[ingredientName] = amount
  }

}