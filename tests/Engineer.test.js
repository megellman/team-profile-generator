const Engineer = require('../lib/engineer');

describe('Engineer Class', () => {
    it('fourth parameter should be the value of github username', () => {
        const engineer = new Engineer('Maya', 123, 'maya@email.com', 'mayagithub');

        expect(engineer.github).toEqual('mayagithub');
    });
    test('should return github username', () => {
        const engineer = new Engineer('Maya', 123, 'maya@email.com', 'mayagithub');
        jest.spyOn(engineer, 'getGithub').mockImplementation(() => 'mayagithub');
      
        expect(engineer.getGithub()).toBe('mayagithub');
      });
    test('should return Engineer', () => {
        const engineer = new Engineer('Maya', 123, 'maya@email.com', 'mayagithub');
        jest.spyOn(engineer, 'getRole').mockImplementation(() => 'Engineer');
      
        expect(engineer.getRole()).toBe('Engineer');
    })
})