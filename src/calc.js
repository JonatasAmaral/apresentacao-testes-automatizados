import axios from 'axios';

export function add(...n) {
	return n.reduce((a, b) => a + b);
}

export function sub(...n) {
	return n.reduce((a, b) => a - b);
}

export async function webMultiply(...n) {
	// send to https://api.mathjs.org/ and return result
	return (await axios.get(`https://api.mathjs.org/v4/`, {
		params: {
			expr: n.join("*")
		}
	})).data;
}