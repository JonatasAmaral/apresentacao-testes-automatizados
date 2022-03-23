import { add, sub } from './calc.js';

describe('integrate add and sub functions', () => {
	const nums = [1, 2, 3, 4, 5];
	test("add and subtract result in 0", () => {
		expect(sub(add(...nums), ...nums)).toBe(0);
	});

	test("add more than subtract result in positive", () => {
		expect(sub(
			add(...nums),
			...nums.filter((_, k) => k > 0)
		)).toBeGreaterThan(0);
	});
})
