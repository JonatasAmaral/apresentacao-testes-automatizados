import styled from "styled-components";
import { Button, ButtonProps } from "../../index";
import { Button as StyledButton } from "../../styled";

interface DigitButtonType extends ButtonProps {
	symbol: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
}

export function DigitButton(props: DigitButtonType) {
	return (
		<Button {...props} />
	)
}

export const StyledDigitButton = styled(DigitButton).attrs({
	as: StyledButton
})``;

export default StyledDigitButton;