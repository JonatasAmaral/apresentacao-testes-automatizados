import { render, screen, cleanup } from "@testing-library/react";

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
				console.log(e.getAttribute('disabled'));

				expect(e.getAttribute('disabled')).toBeNull();
			})
		})
		cleanup();
	})()
})
