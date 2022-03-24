export function add(...n) {
	return n.reduce((a, b) => a + b);
}

export function sub(...n) {
	return n.reduce((a, b) => a - b);
}

export function multiply(...n) {
	return n.reduce((a, b) => a * b);
}

export function adderMultiply(...n) {
	let total = 0;
	for (let i = 0; i < n.length - 1; i++) {
		let set = total || n[i];
		total = 0;
		for (let j = 0; j < n[i + 1]; j++) {
			total = add(total, set);
		}
	}

	return total;
}

import axios from 'axios';
export async function webMultiply(...n) {
	// send to https://api.mathjs.org/ and return result
	return (await axios.get(`https://api.mathjs.org/v4/`, {
		params: {
			expr: n.join("*")
		}
	})).data;
}