import { add } from "./calculator.js";

let x = 10;
try {
  console.log(`adding two constants = ${add(x, y)}`);
} catch (e) {
  console.log(`something went wrong ----------> ${e.message}`);
}
