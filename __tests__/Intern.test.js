const Intern = require('../lib/Intern'); 

test('create an intern object', () => {
  const intern = new Intern();

  expect(typeof(intern)).toBe("object")
  
});

test('making sure that the name property matches the input', () => {
  const intern = new Intern("James");

  expect(intern.name).toBe("James")
  expect(intern.getName()).toBe("James")
});

test('making sure that the object created is classified as an Intern', () => {
  const intern = new Intern();

  expect(intern.getRole()).toBe("Intern")
  
});