import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  // describe("functions", () => {
  //   describe("addIngredient", () => {
  //     it("adds an ingredient and amount to ingredients", () => {
  //       const recipe = new Recipe("Pizza")
  //       expect(recipe.ingredients).to.eql({})

  //       recipe.addIngredient("cheese", 10)

  //       expect(recipe.ingredients).to.eql({ cheese: 10 })
  //     })
  //   })
  // })
})