const Manager = require('../lib/manager');
afterEach(() => {
  jest.restoreAllMocks()
});
describe('Manager Class', () => {
  const manager = new Manager('Ann', 123, 'ann@email.com', 555);
  jest.spyOn(manager, 'getRole')
  jest.spyOn(manager, 'getOfficeNumber')
  jest.spyOn(manager, 'validateEmail')

  it('fourth parameter should be the value of officeNumber', () => {
    expect(manager.officeNumber).toEqual(555);
  });
  it('should return office number', () => {
    expect(manager.getOfficeNumber()).toEqual(555);
  });
  it('should return Manager', () => {
    expect(manager.getRole()).toEqual('Manager');
  });
  it('should return true if email is valid', () => {
    expect(manager.validateEmail()).toBe(true);
  });
})