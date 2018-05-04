// ES6

export default class Panty {
  constructor() {
    this.stock = {}
  }

  stockCheck(ingredientName) {
    if(this.stock.hasOwnProperty(ingredientName)) {
      return this.stock[ingredientName]
    } else {
      return 0
    }
  }

  restock(ingredientName, amount) {
    this.stock[ingredientName] = amount + this.stockCheck(ingredientName)
  }
}