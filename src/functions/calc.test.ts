import { jest } from '@jest/globals';
import { multiply, adderMultiply, webMultiply } from './calc';

describe('how to do lots of math', () => {
	const nums = [4, 3, 5];
	const multNumsRes = eval(nums.join('*')); // forma excêntrica de multiplicar, só pra ser diferentão

	test("plain multiplication", () => {
		expect(multiply(...nums)).toBe(multNumsRes);
	});

	test("repetitive adding", () => {
		expect(adderMultiply(...nums)).toBe(multNumsRes);
	});

	test("just look on the web already", async () => {
		expect(await webMultiply(...nums)).toBe(multNumsRes);
	});
})