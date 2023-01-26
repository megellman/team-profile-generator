

describe("Testing employee class", () => {
    describe("---What it should do----", () => {
      // Positive test
      it("---should do this----", () => {
        // Arrange
        // ---- Declare variable to test ----
  
        // Assert
        // ---- expect(variable).toEqual/toBe(this) ----
        expect(todoList.todos).toEqual([]);
      });
    });
  
    describe("---- Name of test ----", () => {
      // Exception test
      it("----should do this----", () => {
        // Arrange
        //----declare variable----
       const err = new Error(
            'Error message here'
        )

        const cb = () => //to your function;
  
        // Assert
        expect(cb).toThrowError(err);
      });
    });
})