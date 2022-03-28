import styled from 'styled-components';
import { Button as StyledButton } from "../../styled";

export const StyledResultButton = styled(StyledButton).attrs(
	(props) => ({
		...props,
		symbol: "="
	})
)`
	background-color: #439888;
`;

export default StyledResultButton;