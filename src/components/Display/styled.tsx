import styled from "styled-components";

const DigitalDisplay = styled.div`
	display: grid;
	grid-template-areas: "digits";
	place-content: center start;
	grid-column: span 3;

	padding: 1rem;
	font-family: "display-digits";
	font-size: 4.4rem;

	background-color: #687967;
	color: #2D312D;
	border: inset 1px solid #2D312D;
	border-radius: 3px;

	box-shadow: inset 0 0 .5rem 0 #000;

	&::before {
		content: '8888888';
		grid-area: digits;
		opacity: .1;
	}
`

const Digits = styled.span`
	grid-area: digits;
	
`;

const BackgroundDigits = styled(Digits)`
	opacity: .1;
`;

export function Display({ children }: any) {
	return (
		<DigitalDisplay>
			<Digits>{children}</Digits>
		</DigitalDisplay>
	)
}

export default Display;