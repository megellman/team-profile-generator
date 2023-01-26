const Intern = require('../lib/intern');

describe('Intern Class', () => {
    it('Should return school', () => {
        const intern = new Intern('Lo', 444, 'email@email.com', 'schoolOfSchooling');

        expect(intern.school).toEqual('schoolOfSchooling');
    });
    test('should return school', () => {
        const intern = new Intern('Lo', 444, 'email@email.com', 'schoolOfSchooling');
        jest.spyOn(intern, 'getSchool').mockImplementation(() => 'schoolOfSchooling');
      
        expect(intern.getSchool()).toBe('schoolOfSchooling');
      });
    test('should return Intern', () => {
        const intern = new Intern('Lo', 444, 'email@email.com', 'schoolOfSchooling');
        jest.spyOn(intern, 'getRole').mockImplementation(() => 'Intern');
      
        expect(intern.getRole()).toBe('Intern');
    })
})