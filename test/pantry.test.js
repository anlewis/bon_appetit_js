import { expect } from "chai"
import Pantry from "../lib/pantry"
import Recipe from "../lib/recipe"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      it("checks pantry stock for ingredient, returning the ingredient count", () => {
        const pantry = new Pantry()

        expect(pantry.stockCheck("Cheese")).to.eql(0)
      })
    })

    describe("restock", () => {
      it("adds ingredient of a given amount to the pantry stock", () => {
        const pantry = new Pantry()
        pantry.restock("Cheese", 10)

        expect(pantry.stockCheck("Cheese")).to.eql(10)
      })

      it("adds ingredient of a given amount to the pantry stock, summing amount if ingredient is in stock", () => {
        const pantry = new Pantry()
        pantry.restock("Cheese", 10)
        pantry.restock("Cheese", 20)

        expect(pantry.stockCheck("Cheese")).to.eql(30)
      })
    })

    describe("addToShoppingList", () => {
      it("has a shopping list", () => {
        const pantry = new Pantry()

        expect(pantry.shoppingList).to.deep.eql({})
      })

      it("adds recipe ingredients to a shopping list", () => {
        const pantry = new Pantry()
        const recipe = new Recipe("Cheese Pizza")
        recipe.addIngredient("Cheese", 20)
        recipe.addIngredient("Flour", 20)
        pantry.addToShoppingList(recipe)

        expect(pantry.shoppingList).to.deep.eq({ "Cheese": 20, "Flour": 20 })
      })

      it("adds ingredients for multiple recipes to a shopping list", () => {
        const pantry = new Pantry()
        const recipe = new Recipe("Cheese Pizza")
        recipe.addIngredient("Cheese", 20)
        recipe.addIngredient("Flour", 20)
        pantry.addToShoppingList(recipe)

        const secondRecipe = new Recipe("Spaghetti")
        secondRecipe.addIngredient("Noodles", 10)
        secondRecipe.addIngredient("Sauce", 10)
        secondRecipe.addIngredient("Cheese", 5)
        pantry.addToShoppingList(secondRecipe)

        expect(pantry.shoppingList).to.deep.eq({ "Cheese": 25, "Flour": 20, "Noodles": 10, "Sauce": 10 })
      })
    })
  })
})