const Manager = require('../lib/Manager'); 

test('create an manager object', () => {
  const manager = new Manager();

  expect(typeof(manager)).toBe("object")
  
});

test('making sure that the name property matches the input', () => {
  const manager = new Manager("James");

  expect(manager.name).toBe("James")
  expect(manager.getName()).toBe("James")
});

test('making sure that the object created is classified as an manager', () => {
  const manager = new Manager();

  expect(manager.getRole()).toBe("Manager")
  
});
// test('given name', ()=> {
//   expect(hello(' eric')).toBe('hello eric')
// })