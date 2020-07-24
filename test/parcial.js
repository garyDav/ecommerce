const assert = require("assert")

const {
  combinatoria
} = require("../utils/mocks/parcial")

describe.only("Combinatoria", function() {
  it("Combinatoria de agrupaciones x y  cantidad de objetos n", function() {
    assert.strictEqual(combinatoria(3,5), 10)
  })
  it("Combinatoria cuanto x mayor que n", function() {
    assert.strictEqual(combinatoria(5,3), 'error: x debe ser menor que n')
  })
  it("Combinatoria cuanto x es negativo", function() {
    assert.strictEqual(combinatoria(-5,3), 'error: x no debe ser negativo')
  })
  it("Combinatoria con x =0 y n=3", function() {
    assert.strictEqual(combinatoria(0,3), 1)
  })
  it("Combinatoria con x=1 y n=4", function() {
    assert.strictEqual(combinatoria(1,4), 4)
  })
  it("Combinatoria con x=2 y n=5", function() {
    assert.strictEqual(combinatoria(2,5), 10)
  })
  it("Combinatoria con x=3 y n=7", function() {
    assert.strictEqual(combinatoria(3,7), 35)
  })
  it("Combinatoria con x=n", function() {
    assert.strictEqual(combinatoria(5,5), 1)
  })
  it("Combinatoria con x y n valores de cadena", function() {
    assert.strictEqual(combinatoria(-5,3), 'error: x no debe ser negativo')
  })
  it("Combinatoria con x=1 y n=1", function() {
    assert.strictEqual(combinatoria(1,1), 1)
  })
})
