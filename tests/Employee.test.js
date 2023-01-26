const Employee = require('../lib/employee');

describe('Employee Class', () => {
  it('Should return a name', () => {
    const name = 'Joe';
    const employee = new Employee(name);
    expect(employee.name).toEqual('Joe');
  });
  it('Should return an id', () => {
    const name = 'sample';
    const id = 123;
    const employee = new Employee(name, id);
    expect(employee.id).toEqual(123);
  });
  it('Should return an email', () => {
    const name = 'sample';
    const id = 111;
    const email = 'test@email.com';
    const employee = new Employee(name, id, email);
    expect(employee.email).toEqual('test@email.com');  
  });
})

// describe("Testing employee class", () => {
//     describe("---What it should do----", () => {
//       // Positive test
//       it("---should do this----", () => {
//         // Arrange
//         // ---- Declare variable to test ----
  
//         // Assert
//         // ---- expect(variable).toEqual/toBe(this) ----
//         expect(todoList.todos).toEqual([]);
//       });
//     });
  
//     describe("---- Name of test ----", () => {
//       // Exception test
//       it("----should do this----", () => {
//         // Arrange
//         //----declare variable----
//        const err = new Error(
//             'Error message here'
//         )

//         const cb = () => //to your function;
  
//         // Assert
//         expect(cb).toThrowError(err);
//       });
//     });
// })