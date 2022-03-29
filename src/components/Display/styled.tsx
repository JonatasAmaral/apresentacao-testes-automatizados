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
	border: .1rem solid #2D312D;
	border-radius: 3px;

	overflow: hidden;
	box-shadow: inset 0 0 .5rem 0 #000c;

	&::before {
		content: '#######';
		width: 100%;
		grid-area: digits;
		opacity: .1;
	}
`

const Digits = styled.input.attrs({
	readonly: "readonly"
})`
	display: block;
	width: 100%;
	grid-area: digits;
	background: none;
	border: none;
	font: inherit;
	color: #2D312D;
	margin: 0;
	padding: 0;
`;

const BackgroundDigits = styled(Digits)`
	opacity: .1;
`;

export function Display({ children, ...props }: any) {
	return (
		<DigitalDisplay {...props}>
			<Digits value={children} readOnly />
		</DigitalDisplay>
	)
}

export default Display;