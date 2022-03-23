import { add, webMultiply } from "./calc.js";

console.log("1 + 2 + 3 =", add(1, 2, 3));

(async () => { console.log("2 * 3 =", await webMultiply(2, 3)) })();
