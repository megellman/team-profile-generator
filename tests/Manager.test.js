const Manager = require('../lib/manager');
describe('Manager Class', () => {
    it('Should return office number', () => {
        const name = 'Ann';
        const id = 123;
        const email = 'test@email.com';
        const officeNumber = 555;
        const manager = new Manager(name, id, email, officeNumber);
        expect(manager.officeNumber).toEqual(555);
    });
    test('should return office number', () => {
        const manager = new Manager('Joe', 123, 'test@gmail.com, 222');
        jest.spyOn(manager, 'getOfficeNumber').mockImplementation(() => 222);
      
        expect(manager.getOfficeNumber()).toBe(222);
      });
    test('should return Manager', () => {
        const manager = new Manager('Joe', 123, 'test@gmail.com, 222');
        jest.spyOn(manager, 'getRole').mockImplementation(() => 'Manager');
      
        expect(manager.getRole()).toBe('Manager');
      });
})