// eslint-disable-next-line @typescript-eslint/no-var-requires
const eslintrc = require('.')

module.exports = {
	...eslintrc,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json']
	}
}
