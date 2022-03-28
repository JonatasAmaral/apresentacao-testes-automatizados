import { render, screen, cleanup } from "@testing-library/react";

import { Button } from "./index";
import { Button as StyledButton } from "./styled";
import { StyledResultButton } from "./variants/Result";
import { StyledClearButton } from "./variants/Clear";
import { StyledOpButton } from "./variants/Operation";

beforeEach(cleanup);

describe('General Button functionalities', () => {
	test('Button exists', () => {
		render(<Button symbol="." />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
	});

	test('Button is styleable, receivind a (optional) className', () => {
		render(<Button className="teste" symbol="." />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveClass("teste");
	});

	test('Button receives a symbol', () => {
		render(<Button symbol="testing" />);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveTextContent("testing");
	});
});

describe('Button styles', () => {
	test('Styled Button is there', () => {
		const buttonElement = render(<StyledButton symbol="." />).getByRole("button");

		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toBeVisible();
	});
	test('match default styles', () => {
		const buttonElement = render(<StyledButton symbol="." />).getByRole("button");

		expect(buttonElement).toHaveStyle({ backgroundColor: '#333' })
		expect(buttonElement).toHaveStyle({ color: "#eee" })
		expect(buttonElement).toHaveStyle('border-radius: .6rem')
	});
	test('result Button is green', () => {
		const buttonElement = render(<StyledResultButton />).getByRole("button");
		expect(buttonElement).toHaveStyle({ backgroundColor: '#439888' })
	});
	test('clear Button is red', () => {
		const buttonElement = render(<StyledClearButton />).getByRole("button");
		expect(buttonElement).toHaveStyle({ backgroundColor: '#8B4549' })
	});
	test('operation Buttons are orange', () => {
		const buttonElement = render(<StyledOpButton symbol="+" />).getByRole("button");
		expect(buttonElement).toHaveStyle({ backgroundColor: '#D38A34' })
	});
});