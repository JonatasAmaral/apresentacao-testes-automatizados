import styled, { createGlobalStyle } from 'styled-components';
import font from "./fonts/digital-display-numbers.woff2";

import { Display } from "./components/Display/styled";
import { StyledDigitButton } from "./components/Button/variants/Digit";
import { StyledOpButton } from "./components/Button/variants/Operation";
import { StyledResultButton } from "./components/Button/variants/Result";
import { StyledClearButton } from "./components/Button/variants/Clear";
import { useState } from 'react';

const GlobalCalcStyle = createGlobalStyle`
	main {
		display: flex;
		width: 100%;
		height: 100%;
		background-color: #F4F4F4;
	}

	@font-face {
		font-family: "display-digits";
		font-weight: normal;
		src: url(${font}) format("woff2");
	}
`

const cellSize = "4.2rem";
const CalcBoard = styled.div`
	width: fit-content;
	display: grid;
	grid-template-areas:
		'D D D C'
		'n n n A'
		'n n n A'
		'n n n S'
		'z z R S'
	;
	grid-template-columns: repeat(4, ${cellSize});
	grid-template-rows: ${cellSize} repeat(4, ${cellSize});
	gap: .6rem;

	padding: 2rem;
	padding-top: 4rem;
	border-radius: 1.2rem;
	margin: auto;

	background-color: #ddd;
	
	box-shadow:
		inset .2rem .1rem .4rem 0 #edffff99,
		inset -0.1rem -0.2rem .8rem 0  rgba(0 0 0 / .10);
`;

export function Calculator() {
	const [canClear,] = useState(false);
	const [canCalculate,] = useState(false);
	const [canAdvance,] = useState(true);
	const [num1, setNum1] = useState('0');

	function addDigit(digit: string) {
		setNum1(p => (p + digit).replace(/^0+(?=[1-9])/, ''));
	}

	return (
		<CalcBoard>
			<GlobalCalcStyle />

			<Display id="display" style={{ gridArea: 'D' }}>
				{num1}
			</Display>
			<StyledClearButton disabled={!canClear} style={{ marginBottom: "1rem" }} />

			{'0123456789'.split('').map(d => (
				<StyledDigitButton
					key={d}
					symbol={d as "0"}
					style={{ order: 3 - Math.ceil(parseInt(d) / 3), gridArea: d === '0' ? 'z' : undefined }}
					onClick={({ target }) => addDigit(d)}
				/>
			))}

			<StyledOpButton symbol="+" style={{ gridArea: 'A' }} />
			<StyledOpButton symbol="-" style={{ gridArea: 'S' }} />
			<StyledResultButton disabled={!canCalculate} style={{ gridArea: 'R' }} />
		</CalcBoard>
	)
}

export default Calculator;
