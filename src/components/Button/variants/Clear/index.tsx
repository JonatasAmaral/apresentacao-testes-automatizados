import styled from 'styled-components';
import { Button as StyledButton } from "../../styled";

export const StyledClearButton = styled(StyledButton).attrs(
	(props) => ({
		...props,
		symbol: "C"
	})
)`
	background-color: #8B4549;
`;


export default StyledClearButton;