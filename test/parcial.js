const assert = require("assert")

const {
  combinatoria
} = require("../utils/mocks/parcial")

describe.only("Combinatoria", function() {
  it("Combinatoria de agrupaciones x y  cantidad de objetos n", function() {
    assert.strictEqual(combinatoria(3,5), 10)
  })
})
