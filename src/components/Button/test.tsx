import { Button } from "./index";
import { Button as StyledButton } from "./styled";
import { render, screen, cleanup } from "@testing-library/react";

beforeEach(cleanup);

describe('General Button functionalities', () => {
	test('Button exists', () => {
		render(<Button >.</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toBeInTheDocument();
	});

	test('Button is styleable, receivind a (optional) className', () => {
		render(<Button className="teste" >.</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveClass("teste");
	});

	test('Button receives a symbol', () => {
		render(<Button>testing</Button>);
		const buttonElement = screen.getByRole("button");
		expect(buttonElement).toHaveTextContent("testing");
	});
});

describe('Button styles', () => {
	test('Styled Button is there', () => {
		const buttonElement = render(<StyledButton >.</StyledButton>).getByRole("button");

		expect(buttonElement).toBeInTheDocument();
		expect(buttonElement).toBeVisible();
	});
	test('match styles', () => {
		const buttonElement = render(<StyledButton >.</StyledButton>).getByRole("button");

		expect(buttonElement).toHaveStyle({ backgroundColor: '#333' })
		expect(buttonElement).toHaveStyle({ color: "#eee" })
		expect(buttonElement).toHaveStyle('border-radius: .6rem')
	});
});