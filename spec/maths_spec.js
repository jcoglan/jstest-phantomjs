JS.Test.describe("Maths", function() { with(this) {
  describe("sum", function() { with(this) {
    it("adds a list of numbers together", function() { with(this) {
      assertEqual( 6, Maths.sum([1,2,3]) )
    }})
  }})
}})

