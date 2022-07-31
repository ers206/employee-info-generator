const Employee = require('../lib/Employee');

// from module 
test('create an employee object', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
    // expect(employee.value).toEqual(expect.any(Number));  not needed now value will be id or email 
  });