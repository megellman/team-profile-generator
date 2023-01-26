const Employee = require('../lib/employee');
    
describe('Employee Class', () => {
  it('first parameter should be the value of name', () => {
    const name = 'Joe';
    const employee = new Employee(name);
    expect(employee.name).toEqual('Joe');
  });
  it('second parameter should be the value of id', () => {
    const name = 'sample';
    const id = 123;
    const employee = new Employee(name, id);
    expect(employee.id).toEqual(123);
  });
  it('third parameter should be the value of email', () => {
    const name = 'sample';
    const id = 111;
    const email = 'test@email.com';
    const employee = new Employee(name, id, email);
    expect(employee.email).toEqual('test@email.com');  
  });
  test('should return name', () => {
    const employee = new Employee('Joe', 123, 'test@gmail.com');
    jest.spyOn(employee, 'getName').mockImplementation(() => 'Joe');

    expect(employee.getName()).toBe('Joe');
  });
  test('should return email', () => {
    const employee = new Employee('Joe', 123, 'test@gmail.com');
    jest.spyOn(employee, 'getName').mockImplementation(() => 'test@gmail.com');

    expect(employee.getEmail()).toBe('test@gmail.com');
  });
  test('should return Employee', () => {
    const employee = new Employee('Joe', 123, 'test@gmail.com');
    jest.spyOn(employee, 'getRole').mockImplementation(() => 'Employee');
  
    expect(employee.getRole()).toBe('Employee');
  });
})
