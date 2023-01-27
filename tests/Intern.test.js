const Intern = require('../lib/intern');
afterEach(() => {
    jest.restoreAllMocks()
  });
describe('Intern Class', () => {
    const intern = new Intern('Lo', 444, 'email@email.com', 'schoolOfSchooling');
    jest.spyOn(intern, 'getSchool')
    jest.spyOn(intern, 'getRole')
    jest.spyOn(intern, 'validateEmail')
    it('Should return school', () => {
        expect(intern.school).toEqual('schoolOfSchooling');
    });
    it('should return school', () => {
        expect(intern.getSchool()).toEqual('schoolOfSchooling');
    });
    it('should return Intern', () => {
        expect(intern.getRole()).toEqual('Intern');
    })
    it('should return true if email is valid', () => {
        expect(intern.validateEmail()).toBe(true);
      });
})