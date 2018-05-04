import { expect } from "chai"
import Pantry from "../lib/pantry"

describe("Pantry", () => {
  describe("attributes", () => {
    const pantry = new Pantry()

    it("has a stock", () => {
      expect(pantry.stock).to.deep.equal({})
    })
  })

  describe("functions", () => {
    describe("stockCheck", () => {
      it("Checks pantry stock for ingredient, returning the ingredient count", () => {
        const pantry = new Pantry()

        expect(pantry.stockCheck("Cheese")).to.eql(0)
      })
    })

    describe("restock", () => {
      it("Adds ingredient of a given amount to the pantry stock", () => {
        const pantry = new Pantry()
        pantry.restock("Cheese", 10)

        expect(pantry.stockCheck("Cheese")).to.eql(10)
      })
    })

    describe("restock", () => {
      it("Adds ingredient of a given amount to the pantry stock, summing amount if ingredient is in stock", () => {
        const pantry = new Pantry()
        pantry.restock("Cheese", 10)
        pantry.restock("Cheese", 20)

        expect(pantry.stockCheck("Cheese")).to.eql(30)
      })
    })
  })
})