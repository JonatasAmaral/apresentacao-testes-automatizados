import { Button } from "./index";
import { render, screen } from "@testing-library/react";

test('Button exists', () => {
	render(<Button />);
	const buttonElement = screen.getByRole("button");
	expect(buttonElement).toBeInTheDocument();
})
