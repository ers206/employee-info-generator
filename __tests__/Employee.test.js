const Employee = require('../lib/Employee');

// from module 
test('create an employee object', () => {
    const employee = new Employee('Billy Jean');
  
    expect(employee.name).toBe('Billy Jean');
    
    
  });