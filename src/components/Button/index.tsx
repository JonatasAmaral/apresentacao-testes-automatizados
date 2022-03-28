import React from 'react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children?: React.ReactChild;

}

export function Button(props: Props) {

	return (
		<button {...props}>{props.children}</button>
	)
}

export default Button;
