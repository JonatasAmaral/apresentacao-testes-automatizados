/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
const config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	globals: {
		'ts-jest': {
			isolatedModules: true
		}
	}
};

export default config;