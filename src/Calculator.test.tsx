import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Calculator from "./Calculator";

import font from "./fonts/digital-display-numbers.woff2";
jest.mock(
	"./fonts/digital-display-numbers.woff2",
	() => "/src/fonts/digital-display-numbers.woff2"
);

beforeEach(() => {
	render(<Calculator />)
})

afterEach(cleanup)

describe("Calculator's starting point", () => {

	it("should start with 0", () => {
		const display = screen.getByRole('textbox');
		expect(display.getAttribute('value')).toBe("0")
	})
	it("must have result and clear buttons disabled", () => {
		const clearButton = screen.getByRole('button', { name: "C" });
		expect(clearButton.getAttribute('disabled')).toBeDefined();

		const resultButton = screen.getByRole('button', { name: "=" });
		expect(resultButton.getAttribute('disabled')).toBeDefined();
	})

	it.each(["+", "-"])("can use operator %p", (sym) => {
		const addButton = screen.getByRole('button', { name: sym });
		expect(addButton.getAttribute('disabled')).toBeFalsy();
	});

	(() => {
		const rendering = render(<Calculator />);
		const numberButtons = rendering.queryAllByRole('button', { name: /\d/ })
		numberButtons.forEach(e => {
			test(`number ${e.innerHTML} is enabled`, () => {
				expect(e.getAttribute('disabled')).toBeNull();
			})
		})
		cleanup();
	})()
})

describe("inputs work as expected", () => {
	test.each('123456789'.split(''))(`pressing '%s' button change display to it's digit`, (n) => {
		const display = screen.getByRole('textbox');
		const numberButton = screen.getByRole('button', { name: n })
		userEvent.click(numberButton);
		expect(display.getAttribute('value')).toBe(n)
	})

	test("input multiple digits append'em to display", () => {
		const display = screen.getByRole('textbox');
		const twoButton = screen.getByRole('button', { name: '2' });
		const sixButton = screen.getByRole('button', { name: '6' });

		userEvent.click(twoButton);
		userEvent.click(sixButton);
		userEvent.click(twoButton);

		expect(display.getAttribute('value')).toBe('262')
	})

	test("first input make clear button enabled", () => {
		const treeButton = screen.getByRole('button', { name: '3' });
		userEvent.click(treeButton);

		setTimeout(() => {
			const clearButton = screen.getByRole('button', { name: 'C' });
			userEvent.click(clearButton);
			expect(clearButton.getAttribute('disabled')).toBeNull();
		}, 10)
	})

	test("pushing clear button resets to 0", () => {
		const display = screen.getByRole('textbox');
		const sevenButton = screen.getByRole('button', { name: '7' });

		userEvent.click(sevenButton);
		userEvent.click(sevenButton);
		expect(display.getAttribute('value')).toBe('77')

		const clearButton = screen.queryByRole('button', { name: 'C' });
		clearButton && userEvent.click(clearButton);
		expect(display.getAttribute('value')).toBe('0')
	})

})