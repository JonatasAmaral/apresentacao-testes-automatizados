import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: string;
}

export function Button(props: ButtonProps) {

	return (
		<button {...props}>{props.children}</button>
	)
}

export default Button;
