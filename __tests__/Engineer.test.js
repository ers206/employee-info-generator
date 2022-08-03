const Engineer = require('../lib/Engineer');

test('create engineer object', () => {
  const engineer = new Engineer();

  expect(typeof(engineer)).toBe("object")
  
});

test('making sure that the name property matches the input', () => {
  const engineer = new Engineer("James");

  expect(engineer.name).toBe("James")
  expect(engineer.getName()).toBe("James")
});

test('making sure that the object created is classified as an engineer', () => {
  const engineer = new Engineer();

  expect(engineer.getRole()).toBe("Engineer")
  
});