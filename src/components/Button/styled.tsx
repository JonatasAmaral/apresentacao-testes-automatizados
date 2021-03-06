import styled from 'styled-components';

import { Button as Component } from './index';

interface StyledButtonProps {
	bgColor?: string
}

const size = "4.2rem";
export const Button = styled(Component) <StyledButtonProps>`
	display: grid;
	place-items: center;
	min-width: ${size};
	min-height: ${size};
	border-radius: .6rem;
	background-color: ${({ bgColor }) => bgColor || "#333"};
	
	font-size: 2.4rem;
	color: #eee;

	box-shadow:
		inset .4rem .4rem .8rem 0 rgba(255 255 255 / .15),
		inset -0.4rem -0.6rem .4rem 0  rgba(0 0 0 / .10);

	&{&:disabled {
		background-color: #999999;
		box-shadow: none;
		color:#eeeeee7f;
		pointer-events: none;
	}}
`

export default Button;