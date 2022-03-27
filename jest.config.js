/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			isolatedModules: true
		}
	}
};

export default config;