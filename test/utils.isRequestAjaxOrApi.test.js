const assert = require("assert")
const isRequestAjaxOrAPI = require("../utils/isRequestAjaxOrAPI")

describe("utils - isRequestAjaxOrAPI", function() {
  describe("when req accepts html and is not an XMLHttpRequest", function() {
    it("should return false", function() {
      const req = {
        accepts: () => true,
        xhr: false
      }

      const result = isRequestAjaxOrAPI(req)
      const expected = false

      assert.strictEqual(result, expected)
    })
  })

  describe("when req doesn't accept html and is not an XMLHttpRequest", function() {
    it("should return true", function() {
      const req = {
        accepts: () => false,
        xhr: false
      }

      const result = isRequestAjaxOrAPI(req)
      const expected = true

      assert.strictEqual(result, expected)
    })
  })

  describe("when req accepts html and is an XMLHttpRequest", function() {
    it("should return true", function() {
      const req = {
        accepts: () => true,
        xhr: true
      }

      const result = isRequestAjaxOrAPI(req)
      const expected = true

      assert.strictEqual(result, expected)
    })
  })
})
