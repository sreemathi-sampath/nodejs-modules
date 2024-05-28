import { add, sub, multiply } from './calculator.js'

let x = 22, y = 22;

console.log(`Adding x and y gives ${add(x, y)}`);

console.log(`Subracting x and y gives ${sub(x, y)}`);

console.log(`Mutiplying x and y gives ${multiply(x, y)}`);

//SyntaxError: Cannot use import statement outside a module  --> used "type: module" in package.json