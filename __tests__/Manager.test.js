// const Manger = require('../lib/Manager');

// test('creates a health potion object', () => {
//     const potion = new Potion('health');
  
//     expect(potion.name).toBe('health');
//     expect(potion.value).toEqual(expect.any(Number));
//   });
const{hello} =require('../lib/Manager')
test('should be defined', () =>{
  expect(hello).toBeDefined()
})

test('given name', ()=> {
  expect(hello(' eric')).toBe('hello eric')
})