import { add, sub } from './calc.js';

describe('basic math works', () => {
	test('1 + 1 equals 2', () => {
		expect(add(1, 1)).toBe(2);
		expect(add(1, 1)).not.toBe(3);
	});

	test('2 - 1 equals 1', () => {
		expect(sub(2, 1)).toBe(1);
	});
});

describe('more complex usage', () => {
	it('can compose multiple add calls', () => {
		expect(add(add(1, 1), 1)).toBe(1 + 1 + 1);
	});
});
