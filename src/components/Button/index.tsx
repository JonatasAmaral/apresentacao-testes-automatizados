import React from 'react';

export interface ButtonProps extends
	Omit<
	React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	>, 'children'
	> {
	symbol: string;
}

export function Button({ symbol, ...props }: ButtonProps) {

	return (
		<button {...props}>{symbol}</button>
	)
}

export default Button;
