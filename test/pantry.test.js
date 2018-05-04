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
  })
})