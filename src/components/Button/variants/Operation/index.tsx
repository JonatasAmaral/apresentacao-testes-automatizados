import styled from 'styled-components';
import { Button, ButtonProps } from "../../index";
import { Button as StyledButton } from "../../styled";

interface OpButtonType extends ButtonProps {
	symbol: "-" | "+";
}

export function OpButton(props: OpButtonType) {
	return (
		<Button {...props} />
	)
}

export const StyledOpButton = styled(OpButton).attrs({
	as: StyledButton
})`
	background-color: #D38A34;
	font-size: 3rem;
`;

export default StyledOpButton;