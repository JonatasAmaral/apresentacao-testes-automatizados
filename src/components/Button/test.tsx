import { Button } from "./index";
import { render, screen } from "@testing-library/react";

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
