const Employee = require('../lib/Employee');

// from module 
test('create an employee object', () => {
    const employee = new Employee('name');
  
    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');  
    // not needed now value will be id or email 
  });