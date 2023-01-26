const Manager = require('../lib/manager');
describe('Manager Class', () => {
    it('fourth parameter should be the value of officeNumber', () => {
        const manager = new Manager('Ann', 123, 'ann@email.com', 555);
        expect(manager.officeNumber).toEqual(555);
    });
    test('should return office number', () => {
        const manager = new Manager('Ann', 123, 'ann@email.com', 555);
        jest.spyOn(manager, 'getOfficeNumber').mockImplementation(() => 555);
      
        expect(manager.getOfficeNumber()).toBe(555);
      });
    test('should return Manager', () => {
        const manager = new Manager('Ann', 123, 'ann@email.com', 555);
        jest.spyOn(manager, 'getRole').mockImplementation(() => 'Manager');
      
        expect(manager.getRole()).toBe('Manager');
      });
})