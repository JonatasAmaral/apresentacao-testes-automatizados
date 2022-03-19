const { jest: jestReq, test } = require("@jest/globals");
const eAe = require("./funcao");

(() => {
	// wrapper só para esconder mock da apresentação
	console.log = jestReq.fn()
	eAe();
	logOutput = console.log.mock.calls[0][0]
})();

test('eAe() loga "E ae mundão!"', () => {
	expect(logOutput).toBe("E ae mundão!");
});
