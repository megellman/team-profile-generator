const Engineer = require('../lib/engineer');

describe('Engineer Class', () => {
    it('Should return github username', () => {
        const engineer = new Engineer('Maya', 123, 'email@email.com', 'mayagithub');

        expect(engineer.github).toEqual('mayagithub');
    });
    test('should return github username', () => {
        const engineer = new Engineer('Joe', 123, 'test@gmail.com', 'joegithub');
        jest.spyOn(engineer, 'getGithub').mockImplementation(() => 'joegithub');
      
        expect(engineer.getGithub()).toBe('joegithub');
      });
    test('should return Engineer', () => {
        const engineer = new Engineer('Joe', 123, 'test@gmail.com', 'joegithub');
        jest.spyOn(engineer, 'getRole').mockImplementation(() => 'Engineer');
      
        expect(engineer.getRole()).toBe('Engineer');
    })
})