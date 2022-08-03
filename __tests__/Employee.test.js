const Employee = require('../lib/Employee');

 
test('create an employee object', () => {
  const intern = new Employee();

  expect(typeof(employee)).toBe("object")
  
});

  test('making sure that the name property matches the input', () => {
    const employee = new Employee("James");
  
    expect(employee.name).toBe("James")
    expect(employee.getName()).toBe("James")
  });
  
  test('making sure that the object created is classified as an employee', () => {
    const employee = new Employee();
  
    expect(employee.getRole()).toBe("Employee")
    
  });