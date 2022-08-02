const Manager = require('../lib/Manager'); 

test('create an manager object', () => {
  const manager = new Manager('name');

  expect(manager.name).toBe('name');
  expect(manager.id).toBe('id');  
  expect(manager.email).toBe('email');  
  expect(manager.officeNumber).toBe('officeNumber');  
  
});

// test('given name', ()=> {
//   expect(hello(' eric')).toBe('hello eric')
// })