const Engineer = require('../lib/Engineer');

test('create an engineer object', () => {
  const engineer = new Engineer('name');

  expect(engineer.name).toBe('name');
  expect(engineer.id).toBe('id');  
  expect(engineer.email).toBe('email');  
  expect(engineer.github).toBe('github');  
  
});