import axios from 'axios';

export function add(...n) {
	return n.reduce((a, b) => a + b);
}

export function sub(...n) {
	return n.reduce((a, b) => a - b);
}
